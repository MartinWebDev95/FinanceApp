'use server';

import { signIn } from "@/auth";
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