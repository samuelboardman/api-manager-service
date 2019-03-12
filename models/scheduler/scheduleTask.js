const mongoose = require('../../config/integrations/mongodbconfig')
const timeZone = require('../../utils/timeZoneUtil')
const scheduleTaskSchema = new mongoose.Schema({
  _id: String,
  name: String,
  lastErrorMessage: String,
  datasourceId: String,
  institutionId: String,
  lastRanTime: { type: Date, default: timeZone },
  interval: Number,
  nextRunTime: { type: Date, default: timeZone },
  lastSuccessTime: { type: Date, default: timeZone },
  lastStartDateTime: { type: Date, default: timeZone },
  lastEndDateTime: { type: Date, default: timeZone },
  enabled: Boolean,
  stopOnError: Boolean

})
module.exports = scheduleTaskSchema
