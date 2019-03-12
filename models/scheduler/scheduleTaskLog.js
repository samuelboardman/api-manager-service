const mongoose = require('../../config/integrations/mongodbconfig')
const timeZone = require('../../utils/timeZoneUtil')

const scheduleTaskLogSchema = new mongoose.Schema({
  _id: String,
  scheduleTaskLogStatusId: String,
  scheduleTaskLogTypeId: String,
  scheduleTaskId: String,
  errorMessage: String,
  institutionId: String,
  tenantId: String,
  startDateTime: { type: Date, default: timeZone },
  endDateTime: { type: Date, default: timeZone }

})

module.exports = scheduleTaskLogSchema
