import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { compare } from "bcrypt";
import User from "@/models/User";
import connect from "@/lib/db";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required!");
        }

        const user = await User.findOne({
            email: credentials.email,
          });

        if (!user) {
          console.log("Email does not exist!");
          throw new Error("Email does not exist!");
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          console.log("Incorrect password!");
          throw new Error("Incorrect password");
        }

        if (isCorrectPassword) {
          return user;
        } else {
          console.log("Incorrect password!");
          throw new Error("Incorrect password");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    error: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  //   jwt: {
  //     secret: process.env.NEXTAUTH_JWT_SECRET,
  //   },
  // secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };