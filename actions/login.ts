"use server";
import prisma from "@/lib/db";
import { z } from "zod";
import bcryptjs from "bcryptjs";
import { LoginSchema } from "@/schemas/LoginSchema";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateField = LoginSchema.safeParse(values);

    if (!validateField.success) {
        return { error: "Invalid Field" };
    }
    const { email, password } = validateField.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Email no existe" };
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(
            existingUser.email
        );

        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        );

        return { success: "Confirmation email sent" };
    }
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
        return {
            success: "Inicio de sesion exitoso",
        };
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {
                        error: "Invalid Credentials",
                    };
                default:
                    return { error: "Ha ocurrido un error!" };
            }
        }
        throw error;
    }
};
