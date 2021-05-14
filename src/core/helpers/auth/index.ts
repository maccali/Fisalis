import cryptoJs from 'crypto-js'
import { IAuthHelper, InputEncrypt } from './types'

class AuthHelper implements IAuthHelper {
  encrypt({ text }: InputEncrypt): string {
    const cipherText = cryptoJs.SHA512(text).toString()
    return cipherText
  }
  test({ text }: InputEncrypt): string {
    return text
  }
}

export { AuthHelper }
