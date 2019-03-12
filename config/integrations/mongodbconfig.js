const mongoose = require('mongoose')
const logger = require('../../utils/errorManager')
require('custom-env').env(true)
const config = require('config')
const dbConfig = config.get('mongodb')
// const dbUrl = dbConfig.host + ':' + dbConfig.port
const dbName = dbConfig.databaseName
// const dbUsername = dbConfig.username
// const dbPassword = dbConfig.password
// const connectString = 'mongodb://' + dbUsername + ':' + dbPassword + '@' + dbUrl + '/' + dbName
const connectString = 'mongodb://localhost:27017/' + dbName

/**
   * @description connect to MongoDB
   *
   */
const dbConnect = async function conectDb () {
  try {
    await mongoose.connect(connectString).then(
      console.log('DB Connected')
    )
  } catch (err) {
    logger.error(err)
  }
}
dbConnect()
module.exports = mongoose
