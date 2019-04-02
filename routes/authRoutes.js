const express = require('express')
const Route = express.Router()
const authUser = require('../controllers/authUserController')
const authRole = require('../controllers/authRoleController')

Route.get('/:id', authUser.getById)
Route.get('/', authUser.getAll)
Route.post('/create', authUser.createUser)
Route.get('/reset:email', authUser.resetUserPassword)
Route.post('/login', authUser.validDateUser)

Route.get('/:id', authRole.getById)
Route.get('/', authRole.getAll)
Route.post('/create', authRole.createRole)
Route.put('/login', authUser.updateRole)

module.exports = Route
