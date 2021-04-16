// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'services/prisma'
import common from 'middlewares/common'
import auth from 'helpers/auth'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { name, email, password } = request.body

  const cipherPass = auth.encrypt(password)

  const checkEmailInUse = await prisma.user.findFirst({
    where: { email }
  })

  if (checkEmailInUse) {
    response.status(400).json({ message: 'Email in use' })
  }

  const user = await prisma.user.create({
    data: { name, email, password: cipherPass }
  })

  response.status(200).json(user)
}

export default common(handler)
