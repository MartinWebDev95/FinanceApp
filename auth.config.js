export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      // Any path different from login/signup is protected
      const isOnProtected = !(pathname.startsWith('/login') || pathname.startsWith('/sign-up'));

      // Redirect from login/signup to home if logged in
      if(isOnProtected) {
        if(isLoggedIn) return true;
        return false;
      } else if(isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl))
      }

      return true;
    },
  },
  providers: [],
};