import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const auth = (
  handler: (arg0: NextApiRequest, arg1: NextApiResponse) => void
) => (req: NextApiRequest, res: NextApiResponse) => {
  const barrierToken = req.headers['authorization']

  const token = barrierToken.split(' ')[1]
  console.log('jwt', jwt)
  jwt.verify(token, 'teste', (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'You dont Have Permítions' })
    }
    if (decoded) {
      // req.userId = decoded.userId
    }
  })

  return handler(req, res)
}

export default auth
