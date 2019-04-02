// const Joi = require('joi')
const service = require('../services/authRoleService')
const asyncMiddleware = require('../middlewares/async')
const constant = require('../constants/index')
let userRole = {
  /**
   * @description This method get Role by Id
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
   * @description This method get all Roles
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
   * @description This method creates Role
   *
   * @param {request} req HTTP request
   * @param {response} res HTTP response
   *
   * @returns {object} JSON HTTP Status code
   */
  createRole: asyncMiddleware(async function (req, res) {
    await service.createRole(req.body)
    return res
  })
}
module.exports = userRole

// function validateParams (params) {
//   const schema = Joi.object().keys({
//     id: Joi.string().alphanum().required()
//   })
//   return Joi.validate(params, schema)
// }
