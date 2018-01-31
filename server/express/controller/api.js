const topic = require('./topic')
const comment = require('./comment')

module.exports = {
  // 话题
  getTopicList: topic.getTopicList,
  getTopic: topic.getTopic,
  saveTopic: topic.saveTopic,
  updateTopicLike: topic.updateTopicLike,
  // 评论
  getCommentList: comment.getCommentList,
  getComment: comment.getComment,
  saveComment: comment.saveComment,
  updateCommentLike: comment.updateCommentLike
}