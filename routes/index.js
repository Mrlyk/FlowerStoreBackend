const mysqld = require('../utils/dbConnect.js')
const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  let sql = 'select * from `user`'
  let sqlArr = []
  let callBack = (err, data) => {
    if (err) {
      console.log('连接出错')
    } else {
      res.send(data)
    }
  }
  mysqld.sqlConnect(sql, sqlArr, callBack)
  // res.render('index', { title: 'Express' })
})

module.exports = router
