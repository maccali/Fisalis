import { NextApiRequest, NextApiResponse } from 'next'

const teste = (
  handler: (arg0: NextApiRequest, arg1: NextApiResponse) => void
) => (req: NextApiRequest, res: NextApiResponse) => {
  console.log('PASSANDO em Teste')
  console.log('req.body', req.body)

  return handler(req, res)
}

export default teste
