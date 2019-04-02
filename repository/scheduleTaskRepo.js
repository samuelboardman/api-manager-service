const ScheduleTask = require('../models/scheduler/scheduleTask')
const logger = require('../utils/errorManager')
class ScheduleTaskRepo {
  async findById (id) {
    try {
      return await ScheduleTask.findById(id)
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTask Respo', error)
    }
  }
  async findAll () {
    try {
      return await ScheduleTask.find()
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTask Respo', error)
    }
  }
  async findAllActive () {
    try {
      return await ScheduleTask.find().where('enabled', true)
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTask Respo', error)
    }
  }
  async findActive () {
    try {
      return await ScheduleTask.find().where('enabled', true)
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTask Respo', error)
    }
  }

  async create (scheduledTask) {
    const addScheduleTask = new ScheduleTask(scheduledTask)
    try {
      await addScheduleTask.save()
      console.log('saved')
    } catch (error) {
      logger.error(error)
      // console.log('Error ', error)
    }
  }

  async init () {
    let scheduleTasks = this.findById('1')
    scheduleTasks.then(result => {
      if (result === null) {
        const initObject = {
          _id: 1,
          name: 'Test',
          lastErrorMessage: 'Test Error',
          datasourceId: '123456',
          transactionType: 'Type',
          lastRanTime: new Date(),
          lastSuccessTime: new Date(),
          lastStartDateTime: new Date(),
          lastEndDateTime: new Date(),
          statusChangePull: false,
          enabled: true,
          stopOnError: false
        }
        this.create(initObject)
      }
    }
    )
  }
}

module.exports = ScheduleTaskRepo
