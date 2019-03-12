const timeZone = require('../../utils/timeZoneUtil')
const commonObject = {
  _id: String,
  name: String,
  description: String,
  code: String,
  lastModified: { type: Date, default: timeZone },
  endDateTime: { type: Date, default: timeZone },
  createdAt: { type: Date, default: timeZone },
  modifiedAt: { type: Date, default: timeZone },
  createdBy: String,
  lastModifiedBy: String,
  locale: String,
  timeZone: String
}

module.exports = commonObject
