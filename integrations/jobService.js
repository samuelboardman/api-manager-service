const dataSourceProvider = require('./dataSourceProvider')
const urlBuilder = require('../utils/urlBuilderUtil')
const endPointsAuthenticator = require('../utils/endPointsAuthUtil')
const rabbitMQUtils = require('../utils/rabbitMQUtils')
const logger = require('../utils/errorManager')
let networkRequest = require('../utils/networkRequest')
const scheduleTaskService = require('../services/scheduleTaskService')
const constants = require('../constants/index')
// const scheduleTaskLogService = require('../services/scheduleTasksLogService')

let datasources
/**
 * @description get Datasources from Data Source Provider
 *
 * @returns {Object}  JSON
 */
dataSourceProvider.getDatasources()
  .then(function (value) {
    datasources = value
  })

/**
 * @description This initiates a pulling interval for all datasources with active tasks
 *
 *
 *
 */
setInterval(function () {
  try {
    pullActiveTasks()
  } catch (err) {
    logger.error(err)
    //   console.log('Error: ', err)
  }
}, 5)

/**
 * @description makes a pull request for active tasks
 *
 *
 */
async function pullActiveTasks () {
  try {
    let scheduleTasks = await scheduleTaskService.getAllActive()
    scheduleTasks.forEach(async function (element) {
      createPullRequest(element.datasourceId)
    })
  } catch (err) {
    logger.error(err)
    // console.log('Error: ', err)
  }
}
/**
 * @description makes a pull request for one datasource
 *
 * @param {string} datasourceId
 *
 *
 */
async function createPullRequest (datasourceId) {
  try {
    await datasources.forEach(async function (element) {
      if (element.id === datasourceId) {
        // scheduleTaskLogService.create()
        let token = await makeLoginRequest(element)
        let url = await urlBuilder.buildPullUrl(element)
        let response = await makePullRequest(url, token, element.headers.content_type)

        if (response.data.status === constants.HTTP_SUCCESS) {
          let rabbitMQPushStatus = await rabbitMQUtils.pushToRabbitMQ(element.newPushQueueName, response.data, element.dataSourceTypeId)
          if (rabbitMQPushStatus) {
            if (element.requirePushUpdate) {
              // let idsArr = []
              // await data.forEach(function (result) {
              //   idsArr.push(result.id)
              // })
              // let token = await makeLoginRequest(element)
              // let url = await urlBuilder.buildPushUrl(element)
              //    await makePushRequest(url, token, payLoad, element.headers.content_type)
            }
          }
        } else {

        }
      }
    })
  } catch (err) {
    logger.error(err)
    // console.log('Error: ', err)
  }
}
/**
 * @description makes a login request to generate token
 *
 * @param {object} datasource used to generate login parameters
 *
 *
 * @returns {String} token
 */
async function makeLoginRequest (datasource) {
  try {
    let loginUrl = urlBuilder.buildLoginUrl(datasource)
    let token = await endPointsAuthenticator.authenticate(loginUrl, datasource.authorizationType, datasource.loginBody, datasource.headers.content_type)
    return token
  } catch (err) {
    logger.error(err)
    // console.log('Error: ', err)
  }
}

/**
 * @description generates header for making a pull request to get expected data
 *
 * @param {string} url link to direct to
 * @param {string} token
 * @param {string} contentType
 *
 * @returns {Object}  JSON
 */
async function makePullRequest (url, token, contentType) {
  try {
    let headers = {
      'Authorization': token,
      'Content-Type': contentType
    }
    let data = await getData(url, headers)
    return data
  } catch (err) {
    logger.error(err)
    // console.log('Error: ', err)
  }
}
/**
 * @description makes a pull request to get expected data
 *
 * @param {string} url link to direct to
 * @param {string} header
 *
 * @returns {Object}  JSON
 */
async function getData (url, headers) {
  try {
    let data = {
      'headers': headers
    }
    return networkRequest.getRequest(url, data)
  } catch (err) {
    logger.error(err)
    // console.log(err)
  }
}

// async function makePushRequest (url, token, payLoad, contentType) {
//   try {
//     let headers = {
//       'Authorization': token,
//       'Content-Type': contentType
//     }
//     let data = await postData(url, payLoad, headers)
//     return data
//   } catch (err) {
//     console.log('Error: ', err)
//   }
// }
// async function postData (url, payLoad, headers) {
//   try {
//     let data = {
//       'headers': headers
//     }
//     return await axios.post(url, payLoad, data)
//   } catch (error) {
//     console.error(error)
//   }
// }
