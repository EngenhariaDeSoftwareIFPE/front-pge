import { z } from "zod";

export const schema = z.object({
    fullName: z
        .string()
        .max(50),
    registrationNumber: z
        .string()
        .max(14),
    email: z
        .string()
        .email(),
    course: z
        .string()
        .max(30),
    password: z
        .string()
        .min(8)
        .refine((value) => /[A-Z]/.test(value), {
            message: 'A senha deve conter pelo menos uma letra maiúscula.',
        })
        .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
            message: 'A senha deve conter pelo menos um caractere especial.',
        }),
    passwordConfirm: z
        .string(),
}).refine(data => data.password === data.passwordConfirm, {
    message: 'As senhas não coincidem',
});