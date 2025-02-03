import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const users = [
          { id: "1", name: "Admin", email: "admin@example.com", role: "admin" },
          { id: "2", name: "User", email: "user@example.com", role: "user" },
        ];

        const user = users.find((u) => u.email === credentials?.email);

        if (user) return user;
        return null;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      session.user = { ...session.user, ...user };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
