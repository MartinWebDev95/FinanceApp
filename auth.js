import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { getUser } from './app/lib/data';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await getUser(credentials.email);
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
  }
});