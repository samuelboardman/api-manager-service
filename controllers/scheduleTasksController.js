// const Joi = require('joi')
const service = require('../services/scheduleTaskService')
const asyncMiddleware = require('../middlewares/async')
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
      res.status(404).json({ message: 'Record Not Found' })
    } else {
      res.status(200).json(response)
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
    // res.status(404).send('Record Not Found').end()
    let response = await service.getAll()
    if (response === null) {
      res.status(404).json('Record Not Found').end()
    } else {
      res.status(200).json(response).end()
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
