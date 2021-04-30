import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import jwtHelper from 'helpers/jwt'

const auth = (
  handler: (arg0: NextApiRequest, arg1: NextApiResponse) => void
) => (req: NextApiRequest, res: NextApiResponse) => {
  const barrierToken = req.headers['authorization']

  const token = barrierToken.split(' ')[1]
  console.log('jwt', jwt)

  const respond = jwtHelper.verify(token)
  if (!respond.positive) {
    res.status(401).json({ message: 'You dont Have Permítions' })
  }

  return handler(req, res)
}

export default auth
