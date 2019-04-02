const mongoose = require('../config/integrations/mongodbconfig')
const timeZone = require('../utils/timeZoneUtil')
const dataSourceSchema = new mongoose.Schema({
  _id: String,
  dataSourceTypeId: String,
  description: String,
  baseUrl: String,
  authorizationType: String,
  loginBody: Map,
  loginEndpoint: String,
  pullEndPoint: String,
  pushEndpoint: String,
  institutionId: String,
  pushQueueName: String,
  requirePushUpdate: Boolean,
  headers: Map,
  params: Map,
  tenantId: String,
  lastModified: { type: Date, default: timeZone },
  endDateTime: { type: Date, default: timeZone },
  createdAt: { type: Date, default: timeZone },
  modifiedAt: { type: Date, default: timeZone },
  createdBy: String,
  lastModifiedBy: String,
  locale: String
})

module.exports = mongoose.model('DataSource', dataSourceSchema)
