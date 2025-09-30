import { prisma } from "../config/database.js"

export default class Category {
  static async create(data) {
    return await prisma.category.create({
      data,
    })
  }

  static async getAll() {
    return await prisma.category.findMany()
  }

  static async getById(id) {
    return await prisma.category.findUnique({
      where: { id },
    })
  }

  static async update(id, data) {
    return await prisma.category.update({
      where: { id },
      data,
    })
  }

  static async delete(id) {
    return await prisma.category.delete({
      where: { id },
    })
  }
}
