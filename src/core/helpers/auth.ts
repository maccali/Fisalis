import cryptoJs from 'crypto-js'

const auth = {
  encrypt: (text: string) => {
    const cipherText = cryptoJs.SHA512(text).toString()
    return cipherText
  }
}

export default auth
