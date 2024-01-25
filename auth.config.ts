import type { NextAuthConfig } from 'next-auth';

/**
 * Configuration object for authentication in the Next.js store application.
 */
export const authConfig = {
  pages: {
    /**
     * The sign-in page URL.
     */
    signIn: '/user/login',
  },
  callbacks: {
    /**
     * Callback function called when a user is authorized.
     * @param auth - The authentication object.
     * @param request - The request object containing the next URL.
     * @returns A boolean indicating whether the user is authorized.
     */
    authorized({ auth, request: { nextUrl } }) {
      // Check if user is logged in
      const isLoggedIn = !!auth?.user;
      // Check if user is on profile page
      const isOnProfile = nextUrl.pathname.startsWith('/user/profile');
      // if user is on profile page and logged in, allow access
      if (isOnProfile) {
        // Redirect unauthenticated users to login page
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
        // Redirect authenticated users to home page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      // Allow access to all other pages
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
