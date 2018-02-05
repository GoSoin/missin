/** 依赖模块 **/
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const ejs = require('ejs')

/** 引入路由 **/
const router = require('./router')

/** 创建express应用 **/
let app = express()

/** 允许跨域 **/
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if(req.method == 'OPTIONS') {
    res.send(200)   // 让options请求快速返回
  }
  else {
    next()
  }
})

/** 载入 **/
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  resave: true,   // Don't save session if unmodified
  saveUninitialized: false,   // Don't create session until something stored
  secret: '123456'
}))
app.use('/api/v1', router)

/** 'development' error handler: will print stacktrace **/
if(app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

/** 'production' error handler: no stacktraces leaked to user **/
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app