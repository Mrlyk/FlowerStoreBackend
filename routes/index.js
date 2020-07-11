// const express = require('express')
// const router = express.Router()
// const user = require('../controller/userController.js')
//
// /* GET home page. */
// router.get('/', user.getUserInfo)
//
// module.exports = router
const systemApi = require('./systemApi')

module.exports = function (app) {
  app.use('/system-api', systemApi)
}
