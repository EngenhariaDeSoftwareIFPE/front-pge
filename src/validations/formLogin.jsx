import { z } from "zod";

export const schema = z.object({
    email: z
        .string()
        .email(),
    password: z
        .string()
        .min(8)
        .refine((value) => /[A-Z]/.test(value), {
            message: 'A senha deve conter pelo menos uma letra maiúscula.',
        })
        .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
            message: 'A senha deve conter pelo menos um caractere especial.',
        }),
})