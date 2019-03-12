const mongoose = require('../config/integrations/mongodbconfig')
const schema = require('../models/scheduler/scheduleTaskLogType')
const ScheduleTaskLogType = mongoose.model('ScheduleTaskLogType', schema)
const logger = require('../utils/errorManager')
class ScheduleTaskLogTypeRepo {
  async findById (id) {
    try {
      return await ScheduleTaskLogType.findById(id)
    } catch (error) {
      logger.error(error)
      //  console.log('Error ScheduleTaskLogType Respo', error)
    }
  }
  async findAll () {
    try {
      return await ScheduleTaskLogType.find()
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTaskLogType Respo', error)
    }
  }

  async create (scheduledTaskLogType) {
    const addScheduleTask = new ScheduleTaskLogType(scheduledTaskLogType)
    try {
      await addScheduleTask.save()
      // console.log('saved')
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTaskLogType Respo', error)
    }
  }

  async init () {
    let scheduleTasksLogType = this.findById('PULL')
    scheduleTasksLogType.then(result => {
      if (result === null) {
        const initRunningObject = {
          _id: 'PULL',
          name: 'Pull EndPoint',
          description: 'EndPoint to Pull',
          code: 'PULL',
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

    let scheduleTasksLogType2 = this.findById('PUSH')
    scheduleTasksLogType2.then(result => {
      if (result === null) {
        const initFailedObject = {
          _id: 'PUSH',
          name: 'Push EndPoint',
          description: 'EndPoint to Push',
          code: 'PUSH',
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
  }
}
module.exports = ScheduleTaskLogTypeRepo
