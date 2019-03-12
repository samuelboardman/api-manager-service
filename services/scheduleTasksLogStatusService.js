const ScheduleTasksLogStatusRepo = require('../repository/scheduleTaskLogStatusRepo')

exports.getAll = () => {
  return new ScheduleTasksLogStatusRepo().findAll()
}

exports.getById = (id) => {
  return new ScheduleTasksLogStatusRepo().findById(id)
}
