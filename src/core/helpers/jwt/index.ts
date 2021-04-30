import jwt from 'jsonwebtoken'

interface IPayload {
  userId: string
}

const jwtHelper = {
  sign: (payload: IPayload) => {
    return jwt.sign(payload, 'teste', { expiresIn: 3000 })
  }
}

export default jwtHelper
