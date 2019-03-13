// const Joi = require('joi')
const service = require('../services/dataSourceService')
const asyncMiddleware = require('../middlewares/async')
const constant = require('../constants/index')
let dataSources = {
  /**
   * @description This method get dataSource by Id
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
   * @description This method get all dataSources
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
   * @description This method creates dataSource
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  createTask: asyncMiddleware(async function (req, res) {
    await service.createTask(req.body)
    res.status(constant.HTTP_CREATED).json({ message: 'Created' }).end()
    return res
  }),
  /**
   * @description This method update dataSource
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  updateSource: asyncMiddleware(async function (req, res) {
    await service.updateSource(req.body)
    //  res.status(constant.HTTP_SUCCESS).json({ message: 'Success' }).end()
    return res
  })
}
module.exports = dataSources

// function validateParams (params) {
//   const schema = Joi.object().keys({
//     id: Joi.string().alphanum().required()
//   })
//   return Joi.validate(params, schema)
// }
