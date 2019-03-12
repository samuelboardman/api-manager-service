const ScheduleTaskRepo = require('../repository/scheduleTaskRepo')
const ScheduleTaskLogRepo = require('../repository/scheduleTaskLogRepo')
const ScheduleTaskLogStatusRepo = require('../repository/scheduleTaskLogStatusRepo')
const ScheduleTaskLogTypeRepo = require('../repository/scheduleTaskLogTypeRepo')
const logger = require('../utils/errorManager')
const express = require('express')
const app = express()
const environment = app.get('env')

/**
 * @description run migration data for development, test and staging environment
 *
 *
 */
function runMigrations () {
  if ((environment === 'development') || (environment === 'test') || (environment === 'staging')) {
    runningMigrations()
  }
}
/**
 * @description initiates migration for all models
 *
 *
 */
async function runningMigrations () {
  try {
    new ScheduleTaskRepo().init()
    new ScheduleTaskLogRepo().init()
    new ScheduleTaskLogStatusRepo().init()
    new ScheduleTaskLogTypeRepo().init()
  } catch (err) {
    logger.error(err)
    console.log('DB Migrations Error ', err.message)
  }
}

module.exports = runMigrations
