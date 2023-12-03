import { z } from "zod";

export const schema = z.object({
    email: z
        .string()
        .email('Email inválido.'),
    password: z
        .string()
        .min(1, 'Digita sua senha.'),
})