import { prisma } from 'services/prisma'

const userRepository = {
  findUserByEmail: async (email: string) => {
    return await prisma.user.findFirst({
      where: { email }
    })
  },
  createUser: async (name: string, email: string, password: string) => {
    return await prisma.user.create({
      data: { name, email, password }
    })
  },
  findUserForLogin: async (email: string, password: string) => {
    return await prisma.user.findFirst({
      where: { email, password }
    })
  }
}

export default userRepository
