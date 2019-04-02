const timeZone = require('../../utils/timeZoneUtil')
const mongoose = require('../../config/integrations/mongodbconfig')
const schema = {
  _id: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  authRoleId: String,
  passwordResetToken: String,
  enabled: Boolean,
  accountLocked: Boolean,
  deactivatedAt: { type: Date, default: timeZone },
  createdAt: { type: Date, default: timeZone },
  modifiedAt: { type: Date, default: timeZone },
  createdBy: String,
  lastModifiedBy: String,
  locale: String,
  timeZone: String
}

module.exports = mongoose.model('AuthUser', schema)
