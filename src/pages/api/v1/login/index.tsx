// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'services/prisma'
import common from 'middlewares/common'
import auth from 'helpers/auth'
import jwt from 'jsonwebtoken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { email, password } = request.body

    const cipherPass = auth.encrypt(password)

    const user = await prisma.user.findFirst({
      where: { email, password: cipherPass }
    })

    if (user) {
      const token = jwt.sign({ userId: user.id }, 'teste', { expiresIn: 3000 })
      response.status(200).json({ user, token })
      return
    } else {
      response.status(403).json({ message: 'User or Password was wrong' })
      return
    }
  }
  response.status(404)
  return
}

export default common(handler)
