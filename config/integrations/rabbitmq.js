const { Connection } = require('amqplib-as-promised')
const config = require('config')
const rmqConfig = config.get('rabbitParams')
const logger = require('../../utils/errorManager')
const connection = new Connection(rmqConfig)

/**
   * @description connects to RabbitMQ
   *
   * @param {string} queueName
   * @param {string} message
   *
   *
   */
async function connect (queueName, message) {
  try {
    await connection.init()
    const channel = await connection.createChannel()
    // await channel.assertQueue(queueName)
    await channel.sendToQueue(queueName, Buffer.from(message))
    await channel.close()
    await connection.close()
  } catch (err) {
    logger.error(err)
    // console.log('RMQ Error ', err)
  }
}
module.exports = connect
