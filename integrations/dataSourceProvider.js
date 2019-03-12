const querystring = require('querystring')
const config = require('config')
const logger = require('../utils/errorManager')
let networkRequest = require('../utils/networkRequest')
/**
 * @description generate token to pull datasource
 *
 *
 * @returns {String} Token
 */
function generateToken () {
  let url = config.get('sso.baseIdentityURL') + '/connect/token'
  let basicCredentials = Buffer.from(config.get('sso.apiUsername') + ':' + config.get('sso.apiPassword')).toString('base64')
  let authConnection = 'Basic ' + basicCredentials
  let form = {
    grant_type: 'client_credentials',
    scope: 'identity-server-api'
  }
  let formData = querystring.stringify(form)
  let headers = {
    'Authorization': authConnection,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  return networkRequest.postRequest(url, headers, formData)
}
/**
 * @description get datasources from client
 *
 *
 * @returns {Object} Promise of datasources
 */
exports.getDatasources = async () => {
  try {
    let response = await generateToken()
    let accessToken = 'Bearer ' + response.data.access_token
    let datasources = await getRemoteDataSource(accessToken)
    return datasources
  } catch (err) {
    logger.error(err)
    // console.log('Error', err)
  }
}
/**
 * @description get datasource using token
 *
 * @param {string} token
 *
 * @returns [Object]  JSON Array
 */
async function getRemoteDataSource (token) {
  try {
    let url = config.get('datasource_url')
    let headers = { 'Authorization': token,
      'Content-Type': 'application/json' }
    let datasources = await getData(url, headers)

    if (datasources.data) {
      return datasources.data
    }
  } catch (err) {
    logger.error(err)
  }
}
/**
 * @description get Datasources
 *
 * @param {string} url link to direct to
 * @param {string} headers

 *
 * @returns {Object}  JSON
 */
let getData = async (url, headers) => {
  try {
    let data = {
      'headers': headers
    }
    return await networkRequest.getRequest(url, data)
  } catch (err) {
    logger.error(err)
    // console.error(err)
  }
}
