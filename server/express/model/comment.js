const util = require('util')
const dbQuery = require('./db')

/**
 * 获取评论列表
 * @param {Object} data
 * @params {topicId: number, startIndex: number, page: number}
 * @param {function} success
 * @param {function} error
 */
function getCommentList(data, success, error) {
  let sql = util.format('SELECT DISTINCT id, nickname, avatar, content, reply_name, comm_num, like_num, created_time FROM comments WHERE topic_id = %d ORDER BY create_time DESC LIMIT %d, %d', data.topicId, data.startIndex * data.page, data.page)

  dbQuery(sql, (err, res) => {
    if(err) throw error

    res.length > 0 ? success(res) : error()
  })
}

/**
 * 获取指定评论
 * @param {Object} data
 * @params {id: number}
 * @param {function} success
 * @param {function} error
 */
function getComment(data, success, error) {
  let sql = util.format('SELECT DISTINCT id, nickname, avatar, content, reply_name, comm_num, like_num, created_time FROM comments WHERE id = %d', data.id)

  dbQuery(sql, (err, res) => {
    if(err) throw err

    res.length > 0 ? success(res) : error()
  })
}

/**
 * 发布评论
 * @param {Object} data
 * @params {topicId: string, nickname: string, avatar: string, title: string, content: string}
 * @param {function} success
 * @param {function} error
 */
function saveComment(data, success, error) {
  let sql = util.format("INSERT INTO comments(topic_id, nickname, avatar, title, content) VALUES('%d, %s', '%d', '%s', '%s', '%s')", data.topicId, data.nickname, data.avatar, data.title, data.content)

  dbQuery(sql, (err, res) => {
    if(err) throw err

    return res
  })
}

/**
 * 评论点赞
 * @param {Object} data
 * @params {id: number}
 * @param {function} success
 * @param {function} error
 */
function updateCommentLike(data, success, error) {
  let sql = util.format("UPDATE comments SET like_num = like_num + 1 WHERE id = '%d'", data.topic_id)

  dbQuery(sql, (err, res) => {
    if(err) throw err

    return res
  })
}

module.exports = {
  getCommentList: getCommentList,
  getComment: getComment,
  saveComment: saveComment,
  updateCommentLike: updateCommentLike
}