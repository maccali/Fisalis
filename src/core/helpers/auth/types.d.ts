/* eslint-disable no-unused-vars */

type InputEncrypt = { text: string }
type OutputEncrypt = string

export interface IAuthHelper {
  encrypt(InputEncrypt): OutputEncrypt
}
