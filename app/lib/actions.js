'use server';

import { auth, signIn } from "@/auth";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(prevState, formData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }

    throw error;
  }

  // Redirect to the dashboard
  redirect('/');
}

export async function createUser(prevState, formData) {
  const rawFormData = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const { username, email, password } = rawFormData;

  // Hash the password
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    await sql`INSERT INTO users (name, email, password) VALUES (${username}, ${email}, ${passwordHash})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create user.');
  }

  // Redirect to the login page
  redirect('/login');
}

export async function createNewPot(prevState, formData) {
  const rawFormData = {
    potName: formData.get('potName'),
    target: formData.get('targetAmount'),
    theme: formData.get('theme'),
  };

  const { potName, target, theme } = rawFormData;

  try {
    const { user } = await auth();

    await sql`
      INSERT INTO pots (name, target, theme, user_id) VALUES (${potName}, ${parseInt(target)}, ${theme}, ${user.id})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create pot.');
  }

  revalidatePath('/pots');
  redirect('/pots');
}

export async function editPot(id, prevState, formData){
  const rawFormData = {
    potName: formData.get('potName'),
    target: formData.get('targetAmount'),
    theme: formData.get('theme'),
  };

  const { potName, target, theme } = rawFormData;

  try {
    const { user } = await auth();

    await sql`
      UPDATE pots SET name = ${potName}, target = ${parseInt(target)}, theme = ${theme} WHERE id = ${id} AND user_id = ${user.id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update pot.');
  }

  revalidatePath('/pots');
  redirect('/pots');
}

export async function updateMoneyPot(id, type, prevState, formData) {
  const rawFormData = {
    newAmount: formData.get('newAmount'),
  };

  const { newAmount } = rawFormData;

  try {
    const { user } = await auth();

    // Depending on the type, we either add or subtract money from the pot
    if(type.type === 'add') {
      await sql`
        UPDATE pots SET total = total + ${parseInt(newAmount)} WHERE id = ${id} AND user_id = ${user.id}
      `;
    } else {
      await sql`
        UPDATE pots SET total = total - ${parseInt(newAmount)} WHERE id = ${id} AND user_id = ${user.id}
      `;
    }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to udpate money in the pot.');
  }

  revalidatePath('/pots');
  redirect('/pots');
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
  redirect('/pots');
}