const express = require('express')
const Route = express.Router()
const dataSources = require('../controllers/dataSourceController')

Route.get('/:id', dataSources.getById)
Route.get('/', dataSources.getAll)
Route.post('/', dataSources.createSource)
Route.put('/:id', dataSources.updateSource)
module.exports = Route
