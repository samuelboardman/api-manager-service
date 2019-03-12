const mongoose = require('../../config/integrations/mongodbconfig')
const commonModel = require('./commonModel')
const scheduleTaskLogTypeSchema = new mongoose.Schema(commonModel)

module.exports = scheduleTaskLogTypeSchema
