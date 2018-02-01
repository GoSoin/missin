const topicModel = require('../model/topic')

let topic = {}

const functionNames = [
  'getTopicList',
  'getTopic',
  'saveTopic',
  'updateTopicLike'
]

functionNames.forEach(fnName => {
  topic[fnName] = (req, res, next) => {
    topicModel[fnName](
      (fnName.indexOf('get') > -1 ? req.query : req.body),
      function success(data) {
        res.end(JSON.stringify({
          status: 200,        // HTTP状态码
          code: data.code,          // 接口状态码
          message: 'OK',            // 接口状态说明
          data: data.data           // 接口返回数据
        }))
      },
      function error(err) {
        res.end(JSON.stringify({
          code: err.errno,
          message: err.code
        }))
      }
    )
  }
})

module.exports = topic