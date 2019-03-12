const endPointsAuthUtil = require('../utils/endPointsAuthUtil')

describe('Basic token', () => {
  it('should generate a basic token', () => {
    const result = endPointsAuthUtil.basicAuth({ username: 'Samuel', password: '123456B' })
    expect(result).toBe('Basic U2FtdWVsOjEyMzQ1NkI=')
  })
  it('should generate a basic token', () => {
    const result = endPointsAuthUtil.basicAuth({ username: 'Samuel', password: '123456B' })
   //g expect(result).('Basic Uii')
  })
})
