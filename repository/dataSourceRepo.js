const mongoose = require('../config/integrations/mongodbconfig')
const schema = require('../models/dataSource')
const DataSource = mongoose.model('DataSource', schema)
const logger = require('../utils/errorManager')
class DataSourceRepo {
  async findById (id) {
    try {
      return await DataSource.findById(id)
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTask Respo', error)
    }
  }
  async findAll () {
    try {
      return await DataSource.find()
    } catch (error) {
      logger.error(error)
      // console.log('Error ScheduleTask Respo', error)
    }
  }
  async findAllActive () {
    try {
      return await DataSource.find().where('enabled', true)
    } catch (error) {
      logger.error(error)
    }
  }
  async findActive () {
    try {
      return await DataSource.find().where('enabled', true)
    } catch (error) {
      logger.error(error)
    }
  }

  async create (dataSource) {
    const addDataSource = new DataSource(dataSource)
    try {
      await addDataSource.save()
      console.log('saved')
    } catch (error) {
      logger.error(error)
      // console.log('Error ', error)
    }
  }
  async update (dataSource) {
  //   const updateDataSource = new DataSource(dataSource)
  //   try {
  //     await updateDataSource.update()
  //     console.log('saved')
  //   } catch (error) {
  //     logger.error(error)
  //     // console.log('Error ', error)
  //   }
  }
}

module.exports = DataSourceRepo
