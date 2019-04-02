const bcrypt = require('bcrypt')

exports.run = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}
exports.validate = (inputPassword, password) => {
  return bcrypt.compare(inputPassword, password)
}
