'use server';

import { auth } from "@/auth";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { getUser } from "./data";
import { BudgetFormSchema, PotFormSchema, SignUpFormSchema, TransactionFormSchema, UpdateMoneyPotFormSchema } from "./utils";
import { writeFile } from 'fs/promises';
import path from 'path';

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
    transactionAvatar: formData.get('transactionAvatar'),
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
    transactionAvatar,
    transactionName, 
    transactionDate, 
    transactionAmount, 
    transactionCategory, 
    transactionRecurring 
  } = validationData.data;

  try {

    // Upload the avatar to the assets folder
    if (transactionAvatar.size > 0) {
      const filePath = path.join(process.cwd(), 'public', 'assets', transactionAvatar.name);
      const buffer = await transactionAvatar.arrayBuffer();
      const fileBuffer = Buffer.from(buffer);
      writeFile(filePath, fileBuffer);
    }

    // Fetch the category id
    const categoryId = await sql`
      SELECT id FROM categories WHERE value = ${transactionCategory}
    `;

    const { user } = await auth();

    // If transactionAvatar is not provided, use a default image
    const avatarPath = transactionAvatar.size > 0 ? `./assets/${transactionAvatar.name}` : './assets/previewImage.png';

    // Determine if the transaction is recurring
    const recurring = !transactionRecurring ? false : true;

    await sql`
      INSERT INTO transactions (avatar, name, date, amount, recurring, category_id, user_id) VALUES (${avatarPath}, ${transactionName}, ${transactionDate}, ${parseInt(transactionAmount)}, ${recurring}, ${categoryId.rows[0].id}, ${user.id})
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