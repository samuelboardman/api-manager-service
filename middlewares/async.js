
/**
 * @description handles try catch errors for all routes
 *
 * @param {function} handler
 *
 */
module.exports = function (handler) {
  return async (req, res, next) => {
    try {
      handler(req, res)
    } catch (ex) {
      next(ex)
    }
  }
}
