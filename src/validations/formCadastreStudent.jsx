import { z } from "zod";

export const schema = z.object({
    fullName: z
        .string()
        .max(50, "O nome completo não pode ter mais de 50 caracteres.")
        .min(10, "O nome completo deve ter pelo menos 10 caracteres."),
    registrationNumber: z
        .string()
        .min(1, "O número de registro não pode estar vazio.")
        .max(14, "O número de registro não pode ter mais de 14 caracteres."),
    email: z
        .string()
        .min(1, "O email não pode estar vazio.")
        .email("O email não é válido."),
    course: z
        .string()
        .min(1, "O curso não pode estar vazio.")
        .max(30, "O curso não pode ter mais de 30 caracteres."),
    password: z
        .string()
        .min(8, "A senha deve ter pelo menos 8 caracteres.")
        .refine((value) => /[A-Z]/.test(value), {
            message: 'A senha deve conter pelo menos uma letra maiúscula.',
        })
        .refine((value) => /[0-9]/.test(value), {
            message: 'A senha deve conter pelo menos um número.',
        })
        .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
            message: 'A senha deve conter pelo menos um caractere especial.',
        }),
    passwordConfirm: z
        .string()
        .min(1, "A confirmação de senha não pode estar vazia."),
}).refine(data => data.password === data.passwordConfirm, {
    message: 'As senhas não coincidem',
    path: ['passwordConfirm']
});