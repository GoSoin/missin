const commentModel = require('../model/comment')

let comment = {}

const functionNames = [
  'getCommentList',
  'getComment',
  'saveComment',
  'updateCommentLike'
]

functionNames.forEach(fnName => {
  comment[fnName] = (req, res, next) => {
    commentModel[fnName](
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

module.exports = comment