const ScheduleTasksLogTypeRepo = require('../repository/scheduleTaskLogTypeRepo')

exports.getAll = () => {
  return new ScheduleTasksLogTypeRepo().findAll()
}

exports.getById = (id) => {
  return new ScheduleTasksLogTypeRepo().findById(id)
}
