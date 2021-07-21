// import { NextApiRequestInput, NextApiResponseOutput } from 'interfaces/next'

import common from 'middlewares/common'
import output from 'interfaces/io'
import { AuthHelper } from 'helpers/auth'
import userRepository from 'repositories/user'
import {
  NextApiRequestInput,
  NextApiResponseOutput
} from 'interfaces/rewrites/next'

const register = async (
  request: NextApiRequestInput,
  response: NextApiResponseOutput
) => {
  const { name, email, password } = request.body

  const authHelper = new AuthHelper()

  const cipherPass = authHelper.encrypt({ text: password })
  const checkEmailInUse = await userRepository.findUserByEmail(email)

  if (checkEmailInUse) {
    output.send({ status: 400, response, json: { message: 'Email in use' } })
    return
  }

  const user = await userRepository.createUser(name, email, cipherPass)

  output.send({ status: 200, response, json: user })
}

const handler = async (
  request: NextApiRequestInput,
  response: NextApiResponseOutput
) => {
  if (request.method === 'POST') {
    await register(request, response)
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
