import { z } from "zod"

export const createCategorySchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório" })
    .min(1, { message: "Nome é obrigatório" }),
})

export const updateCategorySchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório" })
    .min(1, { message: "Nome é obrigatório" }),
})
