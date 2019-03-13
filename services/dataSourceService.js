const DataSourceRepo = require('../repository/dataSourceRepo')

exports.getAll = () => {
  return new DataSourceRepo().findAll()
}
exports.getAllActive = () => {
  return new DataSourceRepo().findAllActive()
}

exports.getById = (id) => {
  return new DataSourceRepo().findById(id)
}

exports.createSource = (req) => {
  return new DataSourceRepo().create(req)
}
exports.updateSource = (req) => {
  return new DataSourceRepo().update(req)
}
