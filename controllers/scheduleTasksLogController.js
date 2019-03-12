// const Joi = require('joi')
const asyncMiddleware = require('../middlewares/async')
const service = require('../services/scheduleTasksLogService')
const constant = require('../constants/index')
let scheduleTasksLog = {
  /**
   * @description This method get schedule task log by Id
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  getById: asyncMiddleware(async function (req, res) {
    let response = await service.getById(req.params.id)
    if (response === null) {
      res.status(constant.HTTP_NOT_FOUND).json('Record Not Found').end()
    } else {
      res.status(constant.HTTP_SUCCESS).json(response).end()
    }

    return res
  }),
  /**
   * @description This method get schedule task log by task id
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  getByTaskId: asyncMiddleware(async function (req, res) {
    let response = await service.getByTaskId(req.params.id)
    if (response === null) {
      res.status(constant.HTTP_NOT_FOUND).json('Record Not Found').end()
    } else {
      res.status(constant.HTTP_SUCCESS).json(response).end()
    }

    return res
  }),
  /**
   * @description This method get all schedule tasks logs
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  getAll: asyncMiddleware(async function (req, res) {
    // res.status(404).send('Record Not Found').end()
    let response = await service.getAll()
    if (response === null) {
      res.status(constant.HTTP_NOT_FOUND).json('Record Not Found').end()
    } else {
      res.status(constant.HTTP_SUCCESS).json(response).end()
    }

    return res
  })

}
module.exports = scheduleTasksLog

// function validateParams (params) {
//   const schema = Joi.object().keys({
//     id: Joi.string().alphanum().required()
//   })
//   return Joi.validate(params, schema)
// }
