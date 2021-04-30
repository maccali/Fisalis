// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import common from 'middlewares/common'
import authHelper from 'helpers/auth'
import jwtHelper from 'helpers/jwt'

import userRepository from 'repositories/user'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { email, password } = request.body

    const cipherPass = authHelper.encrypt(password)

    const user = await userRepository.findUserForLogin(email, cipherPass)

    if (user) {
      const payload = {
        userId: user.id
      }
      const token = jwtHelper.sign(payload)
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
