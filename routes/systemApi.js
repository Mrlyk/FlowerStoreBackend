const express = require('express')
const router = express.Router()
const user = require('../controller/userController.js')

router.get('/login', user.login)
router.get('/test', user.test)
router.get('/getUserByName', user.getUserByName)

module.exports = router
