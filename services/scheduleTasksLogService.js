const ScheduleTasksLogRepo = require('../repository/scheduleTaskLogRepo')

exports.getAll = () => {
  return new ScheduleTasksLogRepo().findAll()
}

exports.getById = (id) => {
  return new ScheduleTasksLogRepo().findById(id)
}

exports.getByTaskId = (id) => {
  return new ScheduleTasksLogRepo().find(id).where('scheduleTaskId', id)
}

exports.create = (req) => {
  return new ScheduleTasksLogRepo().create(req)
}
