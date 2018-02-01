const express = require('express')
const router = express.Router()

const API = require('../controller/api')
const {NOT_FOUND} = require('../common/config')

// 获取话题列表
router.get('/get/topic/list', API.getTopicList)
// 获取指定话题
router.get('/get/topic', API.getTopic)
// 发布话题
router.post('/save/topic', API.saveTopic)
// 点赞话题
router.put('/update/topic/like', API.updateTopicLike)

// 获取评论列表
router.get('/get/comment/list', API.getCommentList)
// 获取指定评论
router.get('/get/comment', API.getComment)
// 发布评论
router.post('/save/comment', API.saveComment)
// 点赞评论
router.put('/update/comment/like', API.updateCommentLike)

// 404 - GET
router.get('*', (req, res) => {
  res.end(JSON.stringify({
    code: NOT_FOUND,
    message: '接口不存在'
  }))
})
// 404 - POST
router.post('*', (req, res) => {
  res.end(JSON.stringify({
    code: NOT_FOUND,
    message: '接口不存在'
  }))
})
// 404 - PUT
router.put('*', (req, res) => {
  res.end(JSON.stringify({
    code: NOT_FOUND,
    message: '接口不存在'
  }))
})

module.exports = router