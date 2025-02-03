/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  { id: "1", name: "Admin", email: "admin@example.com", password: "admin123", role: "admin" },
  { id: "2", name: "User", email: "user@example.com", password: "user123", role: "user" },
];

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
      
        const users = [
          { id: "1", name: "Admin", email: "admin@example.com", role: "admin" },
          { id: "2", name: "User", email: "user@example.com", role: "user" },
        ];
      
        console.log('Credentials received:', credentials); // Add this line
        const user = users.find((u) => u.email === credentials.email);
      
        if (!user) {
          console.log('User not found'); // Add this line
          return null;
        }
      
        console.log('User authorized:', user); // Add this line
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        } as any;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = token.role as "admin" | "user";
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
