"use server";
import prisma from "@/lib/db";
import { z } from "zod";
import bcryptjs from "bcryptjs";
import { RegisterSchema } from "@/schemas/RegisterSchema";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateField = RegisterSchema.safeParse(values);

    if (!validateField) {
        return { error: "Invalid Field" };
    }
    const { email, password, name } = values;
    try {
        const existinUser = await prisma?.user.findUnique({
            where: { email },
        });
        if (existinUser) {
            return { error: "Email already in use" };
        }
        const hashedPassword = await bcryptjs.hashSync(password);
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });
        const verificationToken = await generateVerificationToken(email);
        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        );
        return {
            success: "Confirmación de email enviado",
        };
    } catch (error) {
        return {
            error: "Ha ocurrido un error, verifica tu información",
        };
    }
};
