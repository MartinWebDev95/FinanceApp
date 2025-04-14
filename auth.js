import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { getUser } from './app/lib/data';
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        
        const user = await getUser(email);
        
        if (!user) return null;
        
        const passwordsMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordsMatch) return null;

        return user;        
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add the ID to the token
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id; // Add the ID to the session
      }

      return session;
    }
  },
});