import { NextApiRequestInput, NextApiResponseOutput } from 'interfaces/next'

import { prisma } from 'services/prisma'
import common from 'middlewares/common'
import auth from 'helpers/auth'
import output from 'output'

const login = async (
  request: NextApiRequestInput,
  response: NextApiResponseOutput
) => {
  const { name, email, password } = request.body

  const cipherPass = auth.encrypt(password)

  const checkEmailInUse = await prisma.user.findFirst({
    where: { email }
  })
  if (checkEmailInUse) {
    output.send({ status: 400, response, json: { message: 'Email in use' } })
    return
  }
  const user = await prisma.user.create({
    data: { name, email, password: cipherPass }
  })

  output.send({ status: 200, response, json: user })
}

const handler = async (
  request: NextApiRequestInput,
  response: NextApiResponseOutput
) => {
  if (request.method === 'POST') {
    await login(request, response)
    // email()
    // log("LOGIN", )
    // audit()
    // notify()
    console.log('input', request.body)
    console.log('output', response.body)
  }

  output.send({ status: 404, response })
  return
}

export default common(handler)
