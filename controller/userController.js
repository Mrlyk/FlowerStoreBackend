const mysqld = require('../utils/dbConnect.js')

// test
const test = (req, res) => {
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
}

// 登录
const login = (req, res) => {
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
}

// 通过名称查找用户
const getUserByName = (req, res) => {
  let name = req.query.name
  let sql = 'select * from `user` where `name` = ?'
  let values = [name]
  let callBack = (err, data) => {
    if (err) {
      console.log('连接出错')
    } else {
      res.send(data)
    }
  }
  mysqld.sqlConnect(sql, values, callBack)
}

module.exports = {
  login,
  test,
  getUserByName
}
