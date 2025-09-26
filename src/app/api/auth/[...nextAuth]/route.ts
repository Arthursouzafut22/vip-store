import NextAuth from "next-auth";
import googleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
  ],
  secret: "",
});

export { handler as GET, handler as POST };
