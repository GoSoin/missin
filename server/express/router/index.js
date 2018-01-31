const express = require('express')
const router = express.Router()

const API = require('../controller/api')

// 获取话题列表
router.get('/get/topic/list', API.getTopicList)
// 获取指定话题
router.get('/get/topic', API.getTopic)
// 发布话题
router.post('/save/topic', API.saveTopic)
// 点赞话题
router.post('/update/topic/like', API.updateTopicLike)

// 获取评论列表
router.get('/get/comment/list', API.getCommentList)
// 获取指定评论
router.get('/get/comment', API.getComment)
// 发布评论
router.post('/save/comment', API.saveComment)
// 点赞评论
router.post('/update/comment/like', API.updateCommentLike)

module.exports = router