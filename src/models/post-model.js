import { prisma } from "../config/database.js"

export default class Post {
  static async create(data) {
    return await prisma.post.create({
      data,
    })
  }

  static async getAll() {
    return await prisma.post.findMany()
  }

  static async getById(id) {
    return await prisma.post.findUnique({
      where: { id },
    })
  }

  static async update(id, data) {
    return await prisma.post.update({
      where: { id },
      data,
    })
  }

  static async delete(id) {
    return await prisma.post.delete({
      where: { id },
    })
  }
}
