// const Joi = require('joi')
const service = require('../services/scheduleTasksLogStatusService')
const asyncMiddleware = require('../middlewares/async')
const constant = require('../constants/index')
let scheduleTasksLogStatus = {
  /**
   * @description This method get schedule task log status by id
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  getById: asyncMiddleware(async function (req, res, next) {
    let response = await service.getById(req.params.id)
    if (response === null) {
      res.status(constant.HTTP_NOT_FOUND).json('Record Not Found').end()
    } else {
      res.status(constant.HTTP_SUCCESS).json(response).end()
    }
    return res
  }),
  /**
   * @description This method get all schedule task logs
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  getAll: asyncMiddleware(async function (req, res) {
    let response = await service.getAll()
    if (response === null) {
      res.status(constant.HTTP_NOT_FOUND).json('Record Not Found').end()
    } else {
      res.status(constant.HTTP_SUCCESS).json(response).end()
    }

    return res
  })

}
module.exports = scheduleTasksLogStatus

// function validateParams (params) {
//   const schema = Joi.object().keys({
//     id: Joi.string().alphanum().required()
//   })
//   return Joi.validate(params, schema)
// }
