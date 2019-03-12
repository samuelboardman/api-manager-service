const axios = require('axios')
const logger = require('../utils/errorManager')
/**
 * @description handles post requests
 *
 * @param {string} url link to direct to
 * @param {Object} headers
 * @param {string} formData
 * @returns {Object}  JSON
 */
module.exports.postRequest = function (url, headers, formData) {
  try {
    return axios({
      method: 'post',
      url: url,
      headers: headers,
      data: formData
    })
  } catch (err) {
    logger.error(err)
  }
}

/**
 * @description handles bearer token authentication
 *
 * @param {string} url link to direct to
 * @param {Object} header
 * @returns {Object}  JSON
 */
module.exports.getRequest = async function (url, header) {
  try {
    let response = await axios.get(url, header)
    return response
  } catch (err) {
    logger.error(err)
  }
}
