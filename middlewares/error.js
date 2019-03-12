const logger = require('../utils/errorManager')
/**
 * @description handles all routes errors
 *
 * @param {string} err error to be handled
 * @param {string} req
 * @param {string} res
 *
 * @returns {Object}  JSON
 */
module.exports = function (err, req, res) {
  if (err) {
    logger.error(err)
    res.status(500).json({ message: 'Something Broke' })
  }
}
