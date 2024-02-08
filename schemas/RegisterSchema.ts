import { z } from "zod";

export const RegisterSchema = z.object({
    name: z
        .string()
        .min(4, { message: "Nombre debe de tener al menos 4 caracteres" }),
    email: z.string().email({ message: "Email es necesario" }),
    password: z
        .string()
        .min(6, { message: "Password debe de contener minimo 6 caracteres" }),
});
