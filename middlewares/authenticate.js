const jwt = require('jsonwebtoken')
require('custom-env').env(true)

let checkToken = (req, res, next) => {
  let token = req.headers['authorization']
  token = token.slice(7, token.length)
  if (token) {
    jwt.verify(token, process.env.dataSource_private_key, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        })
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    })
  }
}
module.exports = {
  checkToken: checkToken
}
