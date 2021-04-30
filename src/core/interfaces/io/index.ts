// import { NextApiResponse } from 'next'
// import { NextApiResponseOutput } from 'interfaces/next'

type outStatus = 200 | 201 | 400 | 403 | 404 | 500

interface outFace {
  status: outStatus
  response: NextApiResponseOutput
  json?: any
}

const output = {
  send: ({ status, response, json = {} }: outFace) => {
    if (status === 200) {
      response.json(json)
    }
    if (status === 201) {
      response.json(json)
    }
    if (status === 400) {
      response.json(json)
    }
    if (status === 403) {
      response.json(json)
    }
    if (status === 404) {
      response.status(status).end()
    }
    if (status === 500) {
      response.status(status).end()
    }

    response.status(status).end()

    response.body = {
      status,
      json
    }
  }
}

export default output
