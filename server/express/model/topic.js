const util = require('util')
const dbQuery = require('./db')

/**
 * 获取话题列表
 * @param {Object} data
 * @params {startIndex: number, page: number}
 * @param {function} success
 * @param {function} error
 */
function getTopicList(data, success, error) {
  let sql = util.format('SELECT DISTINCT id, nickname, avatar, title, content, comm_num, like_num, created_time FROM topics ORDER BY created_time DESC LIMIT %d, %d', data.startIndex * data.page, data.page)

  dbQuery(sql, (err, res) => {
    if(err) throw error

    res.length > 0 ? success(res) : error()
  })
}

/**
 * 获取指定话题
 * @param {Object} data
 * @params {id: number}
 * @param {function} success
 * @param {function} error
 */
function getTopic(data, success, error) {
  let sql = util.format('SELECT DISTINCT id, nickname, avatar, title, content, comm_num, like_num, created_time FROM topics WHERE id = %d', data.id)

  dbQuery(sql, (err, res) => {
    if(err) throw err

    res.length > 0 ? success(res) : error()
  })
}

/**
 * 发布话题
 * @param {Object} data
 * @params {nickname: string, avatar: string, title: string, content: string}
 * @param {function} success
 * @param {function} error
 */
function saveTopic(data, success, error) {
  let sql = util.format("INSERT INTO topics(nickname, avatar, title, content) VALUES('%s', '%d', '%s', '%s', '%s')", data.nickname, data.avatar, data.title, data.content)

  dbQuery(sql, (err, res) => {
    if(err) throw err

    return res
  })
}

/**
 * 话题点赞
 * @param {Object} data
 * @params {id: number}
 * @param {function} success
 * @param {function} error
 */
function updateTopicLike(data, success, error) {
  let sql = util.format("UPDATE topics SET like_num = like_num + 1 WHERE id = '%d'", data.topic_id)

  dbQuery(sql, (err, res) => {
    if(err) throw err

    return res
  })
}

module.exports = {
  getTopicList: getTopicList,
  getTopic: getTopic,
  saveTopic: saveTopic,
  updateTopicLike: updateTopicLike
}