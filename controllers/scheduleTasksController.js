// const Joi = require('joi')
const service = require('../services/scheduleTaskService')
const asyncMiddleware = require('../middlewares/async')
const constant = require('../constants/index')
let scheduleTasks = {
  /**
   * @description This method get scheduled task by Id
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  getById: asyncMiddleware(async function (req, res) {
    let response = await service.getById(req.params.id)
    if (response === null) {
      res.status(constant.HTTP_NOT_FOUND).json({ message: 'Record Not Found' })
    } else {
      res.status(constant.HTTP_SUCCESS).json(response)
    }
    return res
  }),
  /**
   * @description This method get all scheduled tasks
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  getAll: asyncMiddleware(async function (req, res, next) {
    let response = await service.getAll()
    if (response === null) {
      res.status(constant.HTTP_NOT_FOUND).json('Record Not Found').end()
    } else {
      res.status(constant.HTTP_SUCCESS).json(response).end()
    }
    return res
  }),
  /**
   * @description This method creates schedule
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  createTask: asyncMiddleware(async function (req, res) {
    await service.createTask(req.body)
    return res
  })
}
module.exports = scheduleTasks

// function validateParams (params) {
//   const schema = Joi.object().keys({
//     id: Joi.string().alphanum().required()
//   })
//   return Joi.validate(params, schema)
// }
