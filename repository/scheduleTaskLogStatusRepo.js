const ScheduleTaskLogStatus = require('../models/scheduler/scheduleTaskLogStatus')
const logger = require('../utils/errorManager')
class ScheduleTaskLogStatusRepo {
  async findById (id) {
    try {
      return ScheduleTaskLogStatus.findById(id)
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTaskLogStatus Respo', error)
    }
  }

  async findAll () {
    try {
      return ScheduleTaskLogStatus.find()
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTaskLogStatus Respo', error)
    }
  }

  async create (scheduledTaskLogStatus) {
    const addScheduleTask = new ScheduleTaskLogStatus(scheduledTaskLogStatus)
    try {
      await addScheduleTask.save()
      console.log('saved')
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTaskLogStatus Respo', error)
    }
  }

  async init () {
    let scheduleTasksLogStatus = this.findById('1')
    scheduleTasksLogStatus.then(result => {
      if (result === null) {
        const initRunningObject = {
          _id: '1',
          name: 'Running',
          description: 'EndPoint is Running',
          code: 'COMPLETED',
          lastModified: new Date(),
          endDateTime: new Date(),
          createdAt: new Date(),
          modifiedAt: new Date(),
          createdBy: 'Samuel',
          lastModifiedBy: 'BoardMan',
          locale: 'Nigeria',
          timeZone: 'Africa/Lagos'
        }
        this.create(initRunningObject)
      }
    }
    )

    let scheduleTasksLogStatus2 = this.findById('2')
    scheduleTasksLogStatus2.then(result => {
      if (result === null) {
        const initFailedObject = {
          _id: '2',
          name: 'Failed',
          description: 'EndPoint Failed',
          code: 'FAILED',
          lastModified: new Date(),
          endDateTime: new Date(),
          createdAt: new Date(),
          modifiedAt: new Date(),
          createdBy: 'Samuel',
          lastModifiedBy: 'BoardMan',
          locale: 'Nigeria',
          timeZone: 'Africa/Lagos'
        }
        this.create(initFailedObject)
      }
    })

    let scheduleTasksLogStatus3 = this.findById('3')
    scheduleTasksLogStatus3.then(result => {
      if (result === null) {
        const initCompletedObject = {
          _id: '3',
          name: 'Completed',
          description: 'EndPoint Completed',
          code: 'COMPLETED',
          lastModified: new Date(),
          endDateTime: new Date(),
          createdAt: new Date(),
          modifiedAt: new Date(),
          createdBy: 'Samuel',
          lastModifiedBy: 'BoardMan',
          locale: 'Nigeria',
          timeZone: 'Africa/Lagos'
        }
        this.create(initCompletedObject)
      }
    }
    )
  }
}
module.exports = ScheduleTaskLogStatusRepo
