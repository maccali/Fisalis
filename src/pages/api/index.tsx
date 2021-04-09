// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../core/services/prisma'
// import { User } from '@prisma/client'

export default async (req: any, res: any) => {
  const users = await prisma.user.findMany()

  res.status(200).json(users)
}
