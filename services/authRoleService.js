const AuthRoleRepo = require('../repository/authRoleRepo')

exports.getAll = () => {
  return new AuthRoleRepo().findAll()
}

exports.getById = (id) => {
  return new AuthRoleRepo().findById(id)
}

exports.createRole = (req) => {
  return new AuthRoleRepo().create(req)
}
