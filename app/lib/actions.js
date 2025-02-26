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