const rmq = require('../config/integrations/rabbitmq')
const contants = require('../constants/index')
const logger = require('../utils/errorManager')

/**
 * @description handles bearer token authentication
 *
 * @param {string} pushQueueName Name of Queue to push to
 * @param {Object} data data to push
 * @param {string} dataSourceTypeId data type either JSON or XML
 * @returns {Boolean}  push status
 */
exports.pushToRabbitMQ = async function (pushQueueName, data, dataSourceTypeId) {
  try {
    let pushData
    if (dataSourceTypeId === contants.JSON) {
      pushData = JSON.stringify(data)
    }
    if (dataSourceTypeId === contants.XML) {
      pushData = await new XMLSerializer().serializeToString(data)
    }
    //   if (dataSourceTypeId === 'file') {
    //   }

    let status = await rmq(pushQueueName, pushData)
    return status
  } catch (err) {
    logger.error(err)
  }
}
