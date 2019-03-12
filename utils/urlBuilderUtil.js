const querystring = require('querystring')
/**
 * @description build pull Url
 *
 * @param {Object} dataSource
 * @returns {String}  String
 */
exports.buildPullUrl = (dataSource) => {
  if (dataSource.params === null) {
    return dataSource.baseUrl + '/' + dataSource.pullEndPoint
  }
  let formData = querystring.stringify(dataSource.params)
  return dataSource.baseUrl + '/' + dataSource.pullEndPoint + '?' + formData
}
/**
 * @description build push Url
 *
 * @param {Object} dataSource
 * @returns {String}  String
 */
exports.buildPushUrl = (dataSource) => {
  if (dataSource.params === null) {
    return dataSource.baseUrl + '/' + dataSource.pushEndpoint
  }
  let formData = querystring.stringify(dataSource.params)
  return dataSource.baseUrl + '/' + dataSource.pushNewpoint + '?' + formData
}
/**
 * @description build login Url
 *
 * @param {Object} dataSource
 * @returns {String}  String
 */
exports.buildLoginUrl = (dataSource) => {
  return dataSource.baseUrl + '/' + dataSource.loginEndpoint
}
