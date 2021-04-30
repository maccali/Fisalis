import { NextApiRequest, NextApiResponse } from 'next'

type NextApiResponseOutput = T<
  NextApiResponse,
  {
    body: {
      status: number
      json: any
    }
  }
>

type NextApiRequestInput = NextApiRequest
