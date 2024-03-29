const winston = require('winston')

module.exports = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  ]
})
