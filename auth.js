import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { getUser } from './app/lib/data';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;

        // Get the user with the email
        const user = await getUser(email);
        
        // If the user does not exist, return null
        if (!user) return null;
        
        // Compare the password with the hashed password from the database
        const passwordsMatch = await bcrypt.compare(password, user.password);

        // If the passwords match, return the user
        if (passwordsMatch) return user;

        return null;
      }
    }),
  ],
});