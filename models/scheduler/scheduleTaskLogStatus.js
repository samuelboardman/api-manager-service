const mongoose = require('../../config/integrations/mongodbconfig')
const commonModel = require('./commonModel')
const scheduleTaskLogStatusSchema = new mongoose.Schema(commonModel)

module.exports = scheduleTaskLogStatusSchema
