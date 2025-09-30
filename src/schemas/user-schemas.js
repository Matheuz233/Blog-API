import { z } from "zod"

export const createUserSchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório" })
    .min(1, { message: "Nome é obrigatório" }),
  email: z
    .email({ message: "Email inválido" })
    .min(1, { message: "Email é obrigatório" }),
  password: z
    .string({ message: "Senha é obrigatória" })
    .min(1, { message: "Senha é obrigatória" }),
})

export const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.email({ message: "Email inválido" }).optional(),
  password: z.string().optional(),
})
