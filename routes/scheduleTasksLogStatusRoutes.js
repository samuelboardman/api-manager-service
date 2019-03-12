const express = require('express')
const Route = express.Router()
const scheduleTasksLogStatus = require('../controllers/scheduleTasksLogStatusController')

Route.get('/:id', scheduleTasksLogStatus.getById)
Route.get('/', scheduleTasksLogStatus.getAll)

module.exports = Route
