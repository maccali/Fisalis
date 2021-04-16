import { NextApiRequest, NextApiResponse } from 'next'

const common = (
  handler: (arg0: NextApiRequest, arg1: NextApiResponse) => void
) => (req: NextApiRequest, res: NextApiResponse) => {
  // console.log('req.complete', req.body)

  console.log('PASSANDO em common')
  // console.log('REQ -> req.query', req.query)
  // console.log('REQ -> req.body', req.body)

  // res.status(200).json({ q: req.body })
  return handler(req, res)
}

export default common
