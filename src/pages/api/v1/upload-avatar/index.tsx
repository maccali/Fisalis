import { NextApiRequest, NextApiResponse } from 'next'
// import AWS from 'aws-sdk';
import formidable from 'formidable-serverless'
// AWS.config.region = 'ap-northeast-2';

export const config = {
  api: {
    bodyParser: false
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await new Promise(function (resolve, reject) {
    const form = formidable()

    form.keepExtensions = true
    form.keepFilename = true

    form.parse(req, (err: any, fields: any, files: any) => {
      // console.log('files', files)
      res.status(200).json(files)
      //   const s3 = new AWS.S3({
      //     accessKeyId: process.env.AWS_ACCESS_KEY_CODE,
      //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_CODE
      //   });

      //   const params = {
      //     Bucket: 'mybucket',
      //     Key: `folder/${files.file.name}`,
      //     ACL: 'public-read',
      //     Body: require('fs').createReadStream(files.file.path);
      //   };

      //   s3.upload(params, (err:any, data:any) => {
      //     resolve({ err, data });
      //   });

      //   if (err) return reject(err);
      //   resolve({ fields, files });
    })
  })
}
