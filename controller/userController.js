const mysqld = require('../utils/dbConnect.js')

// 获取用户信息
const getUserInfo = (req, res) => {
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

module.exports = {
  getUserInfo
}
