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

/** View engine setup **/
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')
app.engine('html', ejs.__express)
ejs.delimiter = '?'

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

/** Catch 404 and forward to error handler **/
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

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