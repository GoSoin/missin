/** 引入依赖 **/
const mysql = require('mysql')

/** 创建数据池 **/
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'missin',
  user: 'missin',
  password: '123456'
})

/** 创建驱动 **/
const dbQuery = function(sql, callback) {
  pool.getConnection((err, conn) => {
    if(err) {
      callback(err, null, null)
    } else {
      conn.query(sql, (qerr, vals, fields) => {
        // 释放连接
        conn.release()
        // 事件驱动回调
        callback(qerr, vals, fields)
      })
    }
  })
}

module.exports = dbQuery