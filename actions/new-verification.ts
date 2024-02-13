"use server";
import prisma from "@/lib/db";
import { getVerificationTokenByToken } from "@/data/verification-token";
export const newVerification = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
        return { error: "Token no exist!" };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return { error: "Token ha expirado" };
    }

    const existingUser = await prisma.user.findFirst({
        where: {
            email: existingToken.email,
        },
    });

    if (!existingUser) {
        return { error: "Email no existe" };
    }

    await prisma.user.update({
        where: { id: existingUser.id },
        data: {
            emailVerified: new Date(),
            email: existingToken.email,
        },
    });

    await prisma.verificationToken.delete({
        where: { id: existingToken.id },
    });

    return { success: "Email verificado" };
};
