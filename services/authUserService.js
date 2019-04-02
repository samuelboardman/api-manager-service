const AuthUserRepo = require('../repository/authUserRepo')

exports.getAll = () => {
  return new AuthUserRepo().findAll()
}
exports.validateUser = (req) => {
  return new AuthUserRepo().validateUser(req.body.email, req.body.password)
}

exports.getById = (id) => {
  return new AuthUserRepo().findById(id)
}

exports.createUser = (req) => {
  return new AuthUserRepo().create(req.body)
}
exports.resetUserPassword = (email) => {
  return new AuthUserRepo().resetUserPassword(email)
}
