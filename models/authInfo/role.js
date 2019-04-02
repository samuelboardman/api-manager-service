const timeZone = require('../../utils/timeZoneUtil')
const mongoose = require('../../config/integrations/mongodbconfig')
const schema = {
  _id: String,
  name: String,
  permisionIds: [ String ],
  enabled: Boolean,
  deactivatedAt: { type: Date, default: timeZone },
  createdAt: { type: Date, default: timeZone },
  modifiedAt: { type: Date, default: timeZone },
  createdBy: String,
  lastModifiedBy: String,
  locale: String,
  timeZone: String
}

module.exports = mongoose.model('AuthRole', schema)
