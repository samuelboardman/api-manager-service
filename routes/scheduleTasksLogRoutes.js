const express = require('express')
const Route = express.Router()
const scheduleTasksLog = require('../controllers/scheduleTasksLogController')

Route.get('/:id', scheduleTasksLog.getById)
/**
 * @swagger
 * definitions:
 *   ScheduleTasksLogs:
 *     properties:
 *       code:
 *         type: string
 *       name:
 *         type: string
 */

/**
 * @swagger
 * /v1/api/scheduleTasksLogs:
 *   get:
 *     tags:
 *       - ScheduleTasksLogs
 *     description: Returns all ScheduleTasksLogs
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of ScheduleTasksLogs
 *         schema:
 *           $ref: '#/definitions/models/schedulers/scheduleTaskLog'
 */
Route.get('/', scheduleTasksLog.getAll)

module.exports = Route
