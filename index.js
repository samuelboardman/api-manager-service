const logger = require('./utils/errorManager')
const swagger = require('./config/integrations/swaggerConfig')
require('custom-env').env(true)
const eurekaClient = require('./config/integrations/eurekaconnect')
const dbMigrations = require('./migrations/dbmigrations')
// const request = require('supertest')
// require('./integrations/jobService')
const express = require('express')
let app = express()
require('./startup/routes')(app)
app.use('/', express.static('api-docs'))

app.get('/swagger.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swagger)
})

// serve swagger

process.on('uncaughtException', (ex) => {
  logger.error(ex.message, ex)
})
process.on('unhandledRejection', (ex) => {
  logger.error(ex.message, ex)
})
const port = process.env.RACS_PORT || 9056
app.listen(port, () => {
  console.log(`Listening to port ${port}.......`)
})
eurekaClient.start()

dbMigrations()
