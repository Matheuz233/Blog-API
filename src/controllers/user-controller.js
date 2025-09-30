import User from "../models/user-model.js"
import { createUserSchema, updateUserSchema } from "../schemas/user-schemas.js"
import { handleBadRequest } from "../utils/bad-request.js"

const checkExistingUserByEmail = async (res, email) => {
  const existingUser = await User.getByEmail(email)

  if (existingUser) {
    res.status(409).json({ message: "Email já cadastrado" })
  }
}

export const createUser = async (req, res) => {
  try {
    const validation = createUserSchema.safeParse(req.body)

    handleBadRequest(res, validation)
    await checkExistingUserByEmail(res, req.body.email)

    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.getAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await User.getById(Number(req.params.id))
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const validation = updateUserSchema.safeParse(req.body)

    handleBadRequest(res, validation)

    if (req.body.email) {
      await checkExistingUserByEmail(res, req.body.email)
    }

    const userExists = await User.getById(userId)
    if (!userExists) {
      return res.status(400).json({ message: "Usuário não encontrado" })
    }

    const user = await User.update(Number(req.params.id), req.body)
    res.status(200).json(user)
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Usuário não encontrado" })
    }
    res.status(400).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    await User.delete(Number(req.params.id))
    res.status(200).json({ message: "Usuário deletado com sucesso" })
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Usuário não encontrado" })
    }
    res.status(500).json({ message: error.message })
  }
}
