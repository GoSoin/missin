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
      req.body,
      function success(data) {
        res.end(JSON.stringify({
          status: 200,        // HTTP状态码
          code: 200,          // 接口状态码
          message: 'success', // 接口状态说明
          data: data          // 接口返回数据
        }))
      },
      function error() {
        res.end(JSON.stringify({
          code: 0,
          message: 'error'
        }))
      }
    )
  }
})

module.exports = topic