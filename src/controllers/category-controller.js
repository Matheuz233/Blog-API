import Category from "../models/category-model.js"
import {
  createCategorySchema,
  updateCategorySchema,
} from "../schemas/category-schemas.js"
import { handleBadRequest } from "../utils/bad-request.js"

export const createCategory = async (req, res) => {
  try {
    const validation = createCategorySchema.safeParse(req.body)

    handleBadRequest(res, validation)

    const category = await Category.create(req.body)
    res.status(201).json(category)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.getAll()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateCategory = async (req, res) => {
  try {
    const validation = updateCategorySchema.safeParse(req.body)

    handleBadRequest(res, validation)

    const categoryExists = await Category.getById(Number(req.params.id))
    if (!categoryExists) {
      return res.status(400).json({ message: "Categoria não encontrada" })
    }

    const category = await Category.update(Number(req.params.id), req.body)
    res.status(200).json(category)
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Categoria não encontrada" })
    }
    res.status(400).json({ message: error.message })
  }
}

export const deleteCategory = async (req, res) => {
  try {
    await Category.delete(Number(req.params.id))
    res.status(200).json({ message: "Categoria deletada com sucesso" })
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Categoria não encontrada" })
    }
    res.status(500).json({ message: error.message })
  }
}
