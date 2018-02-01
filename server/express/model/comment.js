const util = require('util')
const dbQuery = require('./db')
const {SUCCESS_CODE, LOCK_PARAMETER, TYPE_ERROR} = require('../common/config')

/**
 * 获取评论列表
 * @param {Object} data
 * @augments {topicId: number, page: number, per: number}
 * @return {function} success
 * @return {function} error
 */
function getCommentList(data, success, error) {
  data.page = data.page || 1
  data.per = data.per || 10
  let sql = util.format(`SELECT DISTINCT id, nickname, avatar, content, reply_name, comm_num, like_num, created_time FROM comments WHERE t_id = %d ORDER BY created_time DESC LIMIT %d, %d`, data.topicId, (data.page - 1) * data.per, data.per)

  dbQuery(sql, (err, res) => {
    return err ? error(err) : success({data: res, code: SUCCESS_CODE})
  })
}

/**
 * 获取指定评论
 * @param {Object} data
 * @augments {id: number}
 * @return {function} success
 * @return {function} error
 */
function getComment(data, success, error) {
  if(!data || !data.id) return error({errno: LOCK_PARAMETER, code: '缺少参数'})
  if(typeof data.id !== 'number') return error({errno: TYPE_ERROR, code: '参数类型错误'})

  let sql = util.format(`SELECT DISTINCT id, nickname, avatar, content, reply_name, comm_num, like_num, created_time FROM comments WHERE id = %d`, data.id)
  dbQuery(sql, (err, res) => {
    return err ? error(err) : success({data: res, code: SUCCESS_CODE})
  })
}

/**
 * 发布评论
 * @param {Object} data
 * @augments {topicId: string, reply_name: string, nickname: string, avatar: string, content: string}
 * @return {function} success
 * @return {function} error
 */
function saveComment(data, success, error) {
  if(!data || !data.topicId || !data.reply_name || !data.nickname || !data.content) return error({errno: LOCK_PARAMETER, code: '缺少参数'})
  if((typeof data.topicId !== 'number') || (typeof data.reply_name !== 'string') || (typeof data.nickname !== 'string') || (typeof data.content !== 'string')) return error({errno: TYPE_ERROR, code: '参数类型错误'})

  let sql = util.format(`INSERT INTO comments(t_id, reply_name, nickname, avatar, content) VALUES(%d, '%s', '%s', '%s', '%s')`, data.topicId, data.reply_name, data.nickname, data.avatar || '', data.content)
  dbQuery(sql, (err, res) => {
    return err ? error(err) : getComment({id: res.insertId}, success, error)
  })
}

/**
 * 评论点赞
 * @param {Object} data
 * @augments {id: number}
 * @return {function} success
 * @return {function} error
 */
function updateCommentLike(data, success, error) {
  if(!data || !data.id) return error({errno: LOCK_PARAMETER, code: '缺少参数'})
  if(typeof data.id !== 'number') return error({errno: TYPE_ERROR, code: '参数类型错误'})

  let sql = util.format(`UPDATE comments SET like_num = like_num + 1 WHERE id = %d`, data.id)
  dbQuery(sql, (err, res) => {
    return err ? error(err) : success({data: [], code: SUCCESS_CODE})
  })
}

module.exports = {
  getCommentList: getCommentList,
  getComment: getComment,
  saveComment: saveComment,
  updateCommentLike: updateCommentLike
}