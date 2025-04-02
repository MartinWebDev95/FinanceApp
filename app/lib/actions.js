'use server';

import { auth, signIn } from "@/auth";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { getUser } from "./data";

const LoginFormSchema = z.object({
  email: z.string({
    required_error: "Email is required",
  }).email({
    message: 'Invalid email address'
  }),
  password: z.string({
    required_error: "Password is required",
  }).min(8, {
    message: 'Password must be at least 8 character long'
  })
});

const SignUpFormSchema = z.object({
  username: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name cant' be a number",
  }).min(1, {
    message: 'Name must be at least 1 character long.',
  }).trim(),
  email: z.string({
    required_error: "Email is required",
  }).email({
    message: 'Invalid email address'
  }),
  password: z.string({
    required_error: "Password is required",
  }).min(8, {
    message: 'Password must be at least 8 character long'
  })
});

const PotFormSchema = z.object({
  potName: z.string({
    required_error: "Pot name is required",
    invalid_type_error: "Pot name can't be a number",
  }).min(1, {
    message: 'Pot name must be at least 1 character long.',
  }).trim(),
  targetAmount: z.preprocess(val => parseInt(val), z.number({
    required_error: 'Target amount is required.',
    invalid_type_error: 'Target amount must be a number.',
  })),
  theme: z.string({
    required_error: "Theme is required",
  }).min(1, {
    message: 'Please select a theme.',
  }),
})

const UpdateMoneyPotFormSchema = PotFormSchema.omit({ potName: true, theme: true });

const TransactionFormSchema = z.object({
  transactionName: z.string({
    required_error: "Transaction name is required",
    invalid_type_error: "Transaction name can't be a number",
  }).min(1, {
    message: 'Transaction name must be at least 1 character long.',
  }).trim(),
  transactionDate: z.string().date({
    invalid_type_error: 'Please enter a valid date.',
  }),
  transactionAmount: z.preprocess(val => parseInt(val), z.number({
    required_error: 'Transaction amount is required.',
    invalid_type_error: 'Transaction amount must be a number.',
  })),
  transactionCategory: z.string({
    required_error: 'Transaction category is required.',
  }).min(1, {
    message: 'Please select a category.',
  }),
  transactionRecurring: z.coerce.boolean(),
});

const BudgetFormSchema = z.object({
  budgetCategory: z.string({
    required_error: 'Budget category is required.',
  }).min(1, {
    message: 'Please select a category.',
  }),
  budgetMaximumAmount: z.preprocess(val => parseInt(val), z.number({
    required_error: 'The amount is required.',
    invalid_type_error: 'The amount must be a number.',
  })),
  budgetTheme: z.string({
    required_error: 'Theme is required.',
  }).min(1, {
    message: 'Please select a theme.',
  }),
});

export async function login(prevState, formData) {
  const validationData = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
          
  if(!validationData.success) {
    return {
      errors: validationData.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validationData.data;

  try {
    const user = await getUser(email);
    
    if(!user){
      return {
        errors: { email: ['The email does not exist'] },
      };
    }

    // Compare the password with the hashed password from the database
    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch){
      return {
        errors: { password: ['The password does not exist'] },
      };
    }

    await signIn('credentials', formData);
  } catch (error) {
    if(error) {
      return 'Someting went wrong';
    }

    throw error;
  }

  // Redirect to the dashboard
  redirect('/');
}

export async function createUser(prevState, formData) {
  const validationData = SignUpFormSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if(!validationData.success) {
    return {
      errors: validationData.error.flatten().fieldErrors,
    }
  }

  const { username, email, password } = validationData.data;

  // Hash the password
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    // Check if the email already exist in the database
    const user = await getUser(email);

    if(user) {
      return {
        errors: { email: ['There are already an account with this email'] },
      }        
    }

    await sql`INSERT INTO users (name, email, password) VALUES (${username}, ${email}, ${passwordHash})`;
  } catch (error) {
    throw new Error('Failed to create user.');
  }

  // Redirect to the login page
  redirect('/login');
}

export async function createNewPot(prevState, formData) {
  const validationData = PotFormSchema.safeParse({
    potName: formData.get('potName'),
    targetAmount: formData.get('targetAmount'),
    theme: formData.get('theme'),
  });

  if (!validationData.success) {
    return {
      errors: validationData.error.flatten().fieldErrors,
    };
  }

  const { potName, targetAmount, theme } = validationData.data;

  try {
    const { user } = await auth();

    await sql`
      INSERT INTO pots (name, target, theme, user_id) VALUES (${potName}, ${parseInt(targetAmount)}, ${theme}, ${user.id})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create pot.');
  }

  revalidatePath('/pots');
}

export async function editPot(id, prevState, formData){
  const validationData = PotFormSchema.safeParse({
    potName: formData.get('potName'),
    targetAmount: formData.get('targetAmount'),
    theme: formData.get('theme'),
  });

  if(!validationData.success) {
    return {
      errors: validationData.error.flatten().fieldErrors,
    };
  }

  const { potName, targetAmount, theme } = validationData.data;

  try {
    const { user } = await auth();

    await sql`
      UPDATE pots SET name = ${potName}, target = ${parseInt(targetAmount)}, theme = ${theme} WHERE id = ${id} AND user_id = ${user.id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update pot.');
  }

  revalidatePath('/pots');
}

export async function updateMoneyPot(id, type, prevState, formData) {
  const validationData = UpdateMoneyPotFormSchema.safeParse({
    targetAmount: formData.get('targetAmount'),
  });

  if(!validationData.success) {
    return {
      errors: validationData.error.flatten().fieldErrors,
    };
  }

  const { targetAmount } = validationData.data;

  try {
    const { user } = await auth();

    // Depending on the type, we either add or subtract money from the pot
    if(type.type === 'add') {
      await sql`
        UPDATE pots SET total = total + ${parseInt(targetAmount)} WHERE id = ${id} AND user_id = ${user.id}
      `;
    } else {
      await sql`
        UPDATE pots SET total = total - ${parseInt(targetAmount)} WHERE id = ${id} AND user_id = ${user.id}
      `;
    }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to udpate money in the pot.');
  }

  revalidatePath('/pots');
}

export async function deletePot(id) {
  try {
    const { user } = await auth();

    await sql`
      DELETE FROM pots WHERE id = ${id} AND user_id = ${user.id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete pot.');
  }

  revalidatePath('/pots');
}

export async function createNewTransaction(prevState, formData) {
  const validationData = TransactionFormSchema.safeParse({
    transactionName: formData.get('transactionName'),
    transactionDate: formData.get('transactionDate'),
    transactionAmount: formData.get('transactionAmount'),
    transactionCategory: formData.get('transactionCategory'),
    transactionRecurring: formData.get('transactionRecurring'),
  });

  if (!validationData.success) {
    return {
      errors: validationData.error.flatten().fieldErrors,
    };
  }

  const { 
    transactionName, 
    transactionDate, 
    transactionAmount, 
    transactionCategory, 
    transactionRecurring 
  } = validationData.data;

  try {
    //Fetch the category id
    const categoryId = await sql`
      SELECT id FROM categories WHERE value = ${transactionCategory}
    `;

    const { user } = await auth();

    await sql`
      INSERT INTO transactions (avatar, name, date, amount, recurring, category_id, user_id) VALUES ('./assets/Logo-1.jpg', ${transactionName}, ${transactionDate}, ${parseInt(transactionAmount)}, ${!transactionRecurring ? false : true}, ${categoryId.rows[0].id}, ${user.id})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create transaction.');
  }

  revalidatePath('/transactions');
}

export async function createNewBudget(prevState, formData) {
  const validationData = BudgetFormSchema.safeParse({
    budgetCategory: formData.get('budgetCategory'),
    budgetMaximumAmount: formData.get('budgetMaximumAmount'),
    budgetTheme: formData.get('budgetTheme'),
  });

  if(!validationData.success){
    return {
      errors: validationData.error.flatten().fieldErrors,
    };
  }

  const { 
    budgetCategory,
    budgetMaximumAmount,
    budgetTheme,
  } = validationData.data;

  try {
    //Fetch the category id
    const categoryId = await sql`
      SELECT id FROM categories WHERE value = ${budgetCategory}
    `;

    const { user } = await auth();

    await sql`
      INSERT INTO budgets (maximum, theme, category_id, user_id) VALUES (${budgetMaximumAmount}, ${budgetTheme}, ${categoryId.rows[0].id}, ${user.id})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create a new budget.');
  }

  revalidatePath('/budgets');
}

export async function editBudget(id, prevState, formData) {
  const validationData = BudgetFormSchema.safeParse({
    budgetCategory: formData.get('budgetCategory'),
    budgetMaximumAmount: formData.get('budgetMaximumAmount'),
    budgetTheme: formData.get('budgetTheme'),
  });

  if(!validationData.success) {
    return {
      errors: validationData.error.flatten().fieldErrors,
    }
  }

  const { 
    budgetCategory,
    budgetMaximumAmount,
    budgetTheme,
  } = validationData.data;

  try {
    const { user } = await auth();
    
  // Fetch the category id
    const categoryId = await sql`
      SELECT id FROM categories WHERE value = ${budgetCategory}
    `;

  // Update the budget
    await sql`
      UPDATE budgets SET maximum = ${budgetMaximumAmount}, theme = ${budgetTheme}, category_id = ${categoryId.rows[0].id} WHERE id = ${id} AND user_id = ${user.id}
    `;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update budget.');
  }

  revalidatePath('/budgets');
}

export async function deleteBudget(id) {
  try {
    const { user } = await auth();

    await sql`
      DELETE FROM budgets WHERE id = ${id} AND user_id = ${user.id}
    `;
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete budget.');
  }

  revalidatePath('/budgets');
}