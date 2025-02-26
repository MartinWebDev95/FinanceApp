export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const restrictedRoutes = ["/", "/pots", "/transactions", "/budgets"]; // Protected routes
      const isRestrictedRoute =
        restrictedRoutes.includes(nextUrl.pathname) ||
        restrictedRoutes.some(route => nextUrl.pathname.startsWith(route + "/"));

      if (isRestrictedRoute && !isLoggedIn) {
        return Response.redirect(new URL("/login", nextUrl)); // Redirect to login if not authenticated
      }

      if (isLoggedIn && (nextUrl.pathname === "/login" || nextUrl.pathname === "/sign-up")) {
        return Response.redirect(new URL("/", nextUrl)); // Redirect to dashboard if authenticated
      }

      return true;
    },
  },
  providers: [], // Add authentication providers here
};