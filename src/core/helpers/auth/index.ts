import cryptoJs from 'crypto-js'

const authHelper = {
  encrypt: (text: string) => {
    const cipherText = cryptoJs.SHA512(text).toString()
    return cipherText
  }
}

export default authHelper
