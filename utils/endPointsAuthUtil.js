const querystring = require('querystring')
let networkRequest = require('../utils/networkRequest')
const logger = require('../utils/errorManager')
/**
 * @description makes endpoint login request
 *
 * @param {string} loginUrl link to direct to
 * @param {string} authorizationType
 * @param {Object} loginBody
 * @param {string} contentType
 * @returns {Object}  JSON
 */
exports.authenticate = async function (loginUrl, authorizationType, loginBody, contentType) {
  let token
  if (authorizationType === 'oauth') {
    let response = await oauthToken(loginUrl, loginBody, contentType)
    token = 'Bearer ' + response.data.access_token
  }
  if (authorizationType === 'basicAuth') {
    token = basicAuth(loginBody)
  }

  return token
}

/**
 * @description handles bearer token authentication
 *
 * @param {string} loginUrl link to direct to
 * @param {Object} loginBody
 * @param {string} contentType
 * @returns {String}  Token
 */
async function oauthToken (loginUrl, loginBody, contentType) {
  let formData = querystring.stringify(loginBody)
  let headers = {
    'Content-Type': contentType
  }
  let response = await networkRequest.postRequest(loginUrl, headers, formData)
  return 'Bearer ' + response.data.access_token
}
/**
 * @description handles basic authentication
 *
 * @param {Object} loginBody
 * @returns {String}  token
 */
function basicAuth (loginBody) {
  try {
    let token = Buffer.from(loginBody.username + ':' + loginBody.password).toString('base64')
    token = 'Basic ' + token
    return token
  } catch (err) {
    logger.error(err)
    // console.log('Error ', err)
  }
}

exports.oauthToken = oauthToken
exports.basicAuth = basicAuth
