const express = require('express')
const Route = express.Router()
const scheduleTasks = require('../controllers/scheduleTasksController')

Route.get('/:id', scheduleTasks.getById)
Route.get('/', scheduleTasks.getAll)
Route.post('/', scheduleTasks.createTask)

module.exports = Route
