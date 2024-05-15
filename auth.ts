import { AuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
};

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = async () => {
  try {
    // Retrieve the session using the provided auth options
    const session = await getServerSession(authOptions);
    return session;
  } catch (error) {
    // Handle any errors that occur during session retrieval
    console.error("Error getting session:", error);
    return null;
  }
};

export { authOptions, getSession };
