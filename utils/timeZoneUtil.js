const moment = require('moment-timezone')

const dateLagos = moment.tz(Date.now(), 'Africa/Lagos')

module.exports = dateLagos
