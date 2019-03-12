const logger = require('../utils/errorManager')
const constant = require('../constants/index')
/**
 * @description handles all routes errors
 *
 * @param {string} err error to be handled
 * @param {string} req
 * @param {string} res
 *
 */
module.exports = function (err, req, res) {
  if (err) {
    logger.error(err)
    res.status(constant.HTPP_INTERNAL_SERVER).json({ message: 'Something Broke' })
  }
}
