const endPointsAuthUtil = require('../utils/endPointsAuthUtil')

describe('Basic token', () => {
  it('should generate a basic token', () => {
    const result = endPointsAuthUtil.basicAuth({ username: 'Samuel', password: '123456B' })
    expect(result).toBe('Basic U2FtdWVsOjEyMzQ1NkI=')
  })
  it('should generate a oauth token', () => {
    // let mockfunction = jest.fn()
    // let value = mockfunction.mockResultValue('qwertyu')
    // const result = 'Bearer ' +
    // expect(result).('Basic Uii')
  })
})
