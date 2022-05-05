const express = require('express')

const router = express.Router()
// const DeviceController = require('@controllers/devicesController')
const DeviceController = require('@controllers/devicesController')

router.get('/', DeviceController.get)

module.exports = router
