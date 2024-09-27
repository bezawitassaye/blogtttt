import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/User"; // Make sure this path is correct
import connect from "@/utiles/db"; // Check spelling: it should be "utils"
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();
        console.log("Credentials:", credentials);

        try {
          const user = await User.findOne({ email: credentials.email });
          console.log("User Found:", user);
          if (!user) {
            throw new Error("User not found!");


          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Wrong Credentials!");
          }

          return user; // Return user if password is correct
        } catch (error) {
          // Log the error to the console
          console.error("Authorization error:", error);
          throw new Error("Authorization error");
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    error: "/dashboard/login", // Redirect to this page on error
  },
  // Add a secret for better security
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
