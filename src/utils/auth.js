import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./../dbConnect/dbConnect";
import bcrypt from "bcrypt";
import User from "@/models/UserLists";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials.email });
        if (user) {
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Invalid password");
          }
        } else {
          throw new Error("User not found");
        }
      },
    }),
  ],
  callbacks: {
    async singIn({ user }) {
      if (user) {
        return true;
      }
    },
    jwt: async ({ token, user }) => {
      await dbConnect();
      const userEmail = await User.findOne({ email: token.email });
      userEmail.password = undefined;
      token.user = userEmail;
      return token;
    },
    session: async ({ session, token }) => {
      await dbConnect();
      session.user = token.user;
      return session;
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/login",
    },
  },
};
