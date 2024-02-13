import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import prisma from "./lib/db";
import { UserRole } from "@prisma/client";
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    events: {
        async linkAccount({ user }) {
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    emailVerified: new Date(),
                },
            });
        },
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider !== "credentials") {
                return true;
            }

            const existingUser = await prisma.user.findFirst({
                where: { id: user.id },
            });

            if (!existingUser?.emailVerified) return false;
            
            return true;
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (!token.sub) return token;

            const existingUser = await prisma.user.findUnique({
                where: { id: token.sub },
            });
            if (!existingUser) return token;

            token.role = existingUser.role;
            return token;
        },
    },
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
});
