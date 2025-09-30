import Category from "../models/category-model.js"
import Post from "../models/post-model.js"
import User from "../models/user-model.js"
import { createPostSchema, updatePostSchema } from "../schemas/post-schemas.js"
import { handleBadRequest } from "../utils/bad-request.js"

export const createPost = async (req, res) => {
  try {
    const validation = createPostSchema.safeParse(req.body)

    handleBadRequest(res, validation)

    const { userId, categoryId } = req.body

    const userExists = await User.getById(userId)
    if (!userExists) {
      return res.status(400).json({ message: "Usuário não encontrado" })
    }

    const categoryExists = await Category.getById(categoryId)
    if (!categoryExists) {
      return res.status(400).json({ message: "Categoria não encontrada" })
    }

    const post = await Post.create(req.body)
    res.status(201).json(post)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.getAll()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getPostById = async (req, res) => {
  try {
    const post = await Post.getById(Number(req.params.id))
    if (!post) {
      return res.status(404).json({ message: "Postagem não encontrada" })
    }
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { categoryId, ...postData } = req.body

    const validation = updatePostSchema.safeParse(req.body)
    if (!validation.success) {
      return res.status(400).json({ errors: validation.error.format() })
    }

    const postExists = await Post.getById(id)
    if (!postExists) {
      return res.status(404).json({ message: "Postagem não encontrada" })
    }

    const categoryExists = await Category.getById(categoryId)
    if (!categoryExists) {
      return res.status(400).json({ message: "Categoria não encontrada" })
    }

    const updatedPost = await Post.update(id, { categoryId, ...postData })
    res.status(200).json(updatedPost)
  } catch (error) {
    console.error("Erro ao atualizar postagem:", error)
    res.status(500).json({ message: "Erro interno do servidor" })
  }
}

export const deletePost = async (req, res) => {
  try {
    const post = await Post.delete(Number(req.params.id))
    if (!post) {
      return res.status(404).json({ message: "Postagem não encontrada" })
    }
    res.status(200).json({ message: "Postagem deletada com sucesso" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
