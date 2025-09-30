import bcrypt from "bcrypt"
import { prisma } from "../config/database.js"

export default class User {
  static async create(data) {
    return await prisma.user.create({
      data: {
        ...data,
        password: await bcrypt.hash(data.password, 10),
      },
    })
  }

  static async getByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    })
  }

  static async getAll() {
    return await prisma.user.findMany()
  }

  static async getById(id) {
    return await prisma.user.findUnique({
      where: { id },
    })
  }

  static async update(id, data) {
    return await prisma.user.update({
      where: { id },
      data,
    })
  }

  static async delete(id) {
    return await prisma.user.delete({
      where: { id },
    })
  }
}
