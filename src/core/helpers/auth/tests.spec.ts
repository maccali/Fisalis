import { AuthHelper } from './index'

test('should return a text passed', () => {
  const authHelper = new AuthHelper()
  const text = authHelper.test({ text: 'a palavra' })
  expect(text).toEqual('a palavra')
})
