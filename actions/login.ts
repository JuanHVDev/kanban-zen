"use server";
import prisma from "@/lib/db";
import { z } from "zod";
import bcryptjs from "bcryptjs";
import { LoginSchema } from "@/schemas/LoginSchema";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateField = LoginSchema.safeParse(values);

    if (!validateField) {
        return { error: "Invalid Field" };
    }
    const { email, password } = values;
    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (!existingUser) {
            return { error: "Usuario no encontrado" };
        }
        const validatePassword = await bcryptjs.compare(
            password,
            existingUser.password as string
        );

        if (!validatePassword) {
            return {
                error: "Contraseña Incorrecta",
            };
        }

        return {
            success: "Inicio de sesion exitoso",
        };
    } catch (error) {
        return {
            error: "Ha ocurrido un error, verifica tu información",
        };
    }
};
