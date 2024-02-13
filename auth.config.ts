import GitHub from "next-auth/providers/github";
import Credential from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas/LoginSchema";
import bcryptjs from "bcryptjs";

export default {
    pages: {
        signIn: "/sign-in",
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credential({
            async authorize(credentials, request) {
                const validateFields = LoginSchema.safeParse(credentials);
                if (validateFields.success) {
                    const { email, password } = validateFields.data;
                    const user = await prisma?.user.findUnique({
                        where: { email },
                    });
                    if (!user || !user.password) {
                        return null;
                    }
                    const passwordMatched = await bcryptjs.compare(
                        password,
                        user.password
                    );

                    if (passwordMatched) {
                        return user;
                    }
                }
                return null;
            },
        }),
    ],
} satisfies NextAuthConfig;
