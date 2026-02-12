import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials login with murgi chor",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req): Promise<any> {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const isValid = bcrypt.compare(credentials!.password, user.password);
        if (!isValid) throw new Error("Incorrect password");

        return { id: user._id, email: user.email };
      },
    }),
  ],
  // if i call those jwt and session methods it will automatically do generating token and setting it up in the session
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
