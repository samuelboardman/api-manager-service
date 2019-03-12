const swaggerJSDoc = require('swagger-jsdoc')

// swagger definition
let swaggerDefinition = {
  info: {
    title: 'RACS TransactionsJobs Microservice API',
    version: '1.0.0',
    description: 'RACS TransactionsJobs Microservice API'
  },
  host: 'localhost:9056',
  basePath: '/'
}

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js']
}

// initialize swagger-jsdoc
let swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec
