const util = require('util')
const dbQuery = require('./db')
const {SUCCESS_CODE, LOCK_PARAMETER, TYPE_ERROR} = require('../common/config')

/**
 * 获取话题列表
 * @param {Object} data
 * @augments {page: number, per: number}
 * @return {function} success
 * @return {function} error
 */
function getTopicList(data, success, error) {
  data.page = data.page || 1
  data.per = data.per || 10
  let sql = util.format(`SELECT DISTINCT id, nickname, avatar, title, content, comm_num, like_num, created_time FROM topics ORDER BY created_time DESC LIMIT %d, %d`, (data.page - 1) * data.per, data.per)

  dbQuery(sql, (err, res) => {
    return err ? error(err) : success({data: res, code: SUCCESS_CODE})
  })
}

/**
 * 获取指定话题
 * @param {Object} data
 * @augments {id: number}
 * @return {function} success
 * @return {function} error
 */
function getTopic(data, success, error) {
  if(!data || !data.id) return error({errno: LOCK_PARAMETER, code: '缺少参数'})
  if(typeof data.id !== 'number') return error({errno: TYPE_ERROR, code: '参数类型错误'})

  let sql = util.format(`SELECT DISTINCT id, nickname, avatar, title, content, comm_num, like_num, created_time FROM topics WHERE id = %d`, data.id)
  dbQuery(sql, (err, res) => {
    return err ? error(err) : success({data: res, code: SUCCESS_CODE})
  })
}

/**
 * 发布话题
 * @param {Object} data
 * @augments {nickname: string, avatar: string, title: string, content: string}
 * @return {function} success
 * @return {function} error
 */
function saveTopic(data, success, error) {
  if(!data || !data.nickname || !data.title || !data.content) return error({errno: LOCK_PARAMETER, code: '缺少参数'})
  if((typeof data.nickname !== 'string') || (typeof data.title !== 'string') || (typeof data.content !== 'string')) return error({errno: TYPE_ERROR, code: '参数类型错误'})

  let sql = util.format(`INSERT INTO topics(nickname, avatar, title, content) VALUES('%s', '%s', '%s', '%s')`, data.nickname, data.avatar || '', data.title, data.content)
  dbQuery(sql, (err, res) => {
    return err ? error(err) : getTopic({id: res.insertId}, success, error)
  })
}

/**
 * 话题点赞
 * @param {Object} data
 * @augments {id: number}
 * @return {function} success
 * @return {function} error
 */
function updateTopicLike(data, success, error) {
  if(!data || !data.id) return error({errno: LOCK_PARAMETER, code: '缺少参数'})
  if(typeof data.id !== 'number') return error({errno: TYPE_ERROR, code: '参数类型错误'})

  let sql = util.format(`UPDATE topics SET like_num = like_num + 1 WHERE id = %d`, data.id)
  dbQuery(sql, (err, res) => {
    return err ? error(err) : success({data: [], code: SUCCESS_CODE})
  })
}

module.exports = {
  getTopicList: getTopicList,
  getTopic: getTopic,
  saveTopic: saveTopic,
  updateTopicLike: updateTopicLike
}