import * as yup from 'yup'

const registerSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).required()
})

export default registerSchema
