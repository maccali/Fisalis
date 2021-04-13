// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'services/prisma'
import teste from 'middlewares/cookies'
import example from 'helpers/example'
// import { User } from '@prisma/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.user.findMany()
  console.log('req.headers', req.headers)

  console.log('example.soma(10, 11)', example.soma(10, 11))
  res.status(200).json(users)
}

export default teste(handler)
