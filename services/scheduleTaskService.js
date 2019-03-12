const ScheduleTaskRepo = require('../repository/scheduleTaskRepo')

exports.getAll = () => {
  return new ScheduleTaskRepo().findAll()
}
exports.getAllActive = () => {
  return new ScheduleTaskRepo().findAllActive()
}

exports.getById = (id) => {
  return new ScheduleTaskRepo().findById(id)
}

exports.createTask = (req) => {
  return new ScheduleTaskRepo().create(req)
}
