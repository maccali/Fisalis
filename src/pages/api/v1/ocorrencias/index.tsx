// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'services/prisma'
import common from 'middlewares/common'
import authMid from 'middlewares/auth'
import auth from 'helpers/auth'
import jwt from 'jsonwebtoken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json({ oi: 'oi' })
  console.log(request)
}

export default authMid(common(handler))
