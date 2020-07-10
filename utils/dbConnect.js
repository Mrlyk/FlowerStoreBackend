const mysql = require('mysql')
// 数据库配置 暂时只放在本地
const dbConnect = require('../config/dbconfig.js')

module.exports = {
  // 连接池对象 连接数据库
  sqlConnect: function (sql, sqlArr, callBack) {
    let pool = mysql.createPool(dbConnect.config)
    pool.getConnection((err, conn) => {
      console.log('数据库连接打开')
      if (err) {
        console.log(err)
        console.log('连接失败1')
        return false
      }
      // 连接成功，传入sql
      conn.query(sql, sqlArr, callBack)
      // 操作完成 释放连接
      conn.release()
    })
  }

}
