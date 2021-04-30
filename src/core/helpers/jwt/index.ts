import jwt from 'jsonwebtoken'

interface IPayload {
  userId: string
}
interface IVerify {
  positive: boolean
  data: any
}

// type IVerifyFunction = (arg0: string) => IVerify

const jwtHelper = {
  sign: (payload: IPayload) => {
    return jwt.sign(payload, 'teste', { expiresIn: 3000 })
  },
  verify: (token: string): IVerify => {
    let final
    jwt.verify(token, 'teste', (err, decoded) => {
      if (err) {
        final = { positive: false, data: err }
      }
      if (decoded) {
        final = { positive: true, data: decoded }
        // req.userId = decoded.userId
      }
    })
    return final
  }
}

export default jwtHelper
