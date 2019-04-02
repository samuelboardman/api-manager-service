const ScheduleTaskLog = require('../models/scheduler/scheduleTaskLog')
const logger = require('../utils/errorManager')
class ScheduleTaskLogRepo {
  /**
 * @description get scheduled tasks log by id
 *
 * @param {string} id error to be handled
 * @return {Object}
 */
  async findById (id) {
    try {
      return await ScheduleTaskLog.findById(id)
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTaskLog Respo', error)
    }
  }
  /**
 * @description get all scheduled tasks logs
 *
 *
 * @return {Array}
 */
  async findAll () {
    try {
      return await ScheduleTaskLog.find()
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTaskLog Respo', error)
    }
  }
  /**
   *@description creates new schedule task log
   *@param {Object} scheduledTaskLog
   *
   *@return {Array}
   */
  async create (scheduledTaskLog) {
    const addScheduleTask = new ScheduleTaskLog(scheduledTaskLog)
    try {
      await addScheduleTask.save()
      console.log('saved')
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTaskLog Respo', error)
    }
  }

  async init () {
    let scheduleTasksLog = this.findById('1')
    scheduleTasksLog.then(result => {
      if (result === null) {
        const initObject = {
          _id: 1,
          scheduleTaskLogStatusId: '1',
          scheduleTaskLogTypeId: '1',
          scheduleTaskId: '1',
          errorMessage: 'Type',
          startDateTime: new Date(),
          endDateTime: new Date()
        }
        this.create(initObject)
      }
    }
    )
  }
}

module.exports = ScheduleTaskLogRepo
