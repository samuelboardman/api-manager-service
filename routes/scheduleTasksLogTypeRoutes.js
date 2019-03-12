const express = require('express')
const Route = express.Router()
const scheduleTasksLogType = require('../controllers/scheduleTasksLogTypeController')

Route.get('/:id', scheduleTasksLogType.getById)
Route.get('/', scheduleTasksLogType.getAll)

module.exports = Route
