import { z } from "zod"

export const createPostSchema = z.object({
  title: z
    .string({ message: "Título é obrigatório" })
    .min(1, { message: "Título é obrigatório" }),
  content: z
    .string({ message: "Conteúdo é obrigatório" })
    .min(1, { message: "Conteúdo é obrigatório" })
    .max(255, { message: "Conteúdo deve ter no máximo 255 caracteres" }),
  userId: z.number({ message: "ID do usuário inválido" }),
  categoryId: z.number({ message: "ID da categoria inválido" }),
})

export const updatePostSchema = z.object({
  title: z.string().min(1, { message: "Título não pode ser vazio" }).optional(),
  content: z
    .string()
    .min(1, { message: "Conteúdo não pode ser vazio" })
    .max(255, { message: "Conteúdo deve ter no máximo 255 caracteres" })
    .optional(),
  categoryId: z.number({ message: "ID da categoria inválido" }).optional(),
})
