# Host: localhost  (Version: 5.5.53)
# Date: 2018-02-01 17:48:37
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "comments"
#

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `t_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联话题id',
  `content` varchar(255) NOT NULL DEFAULT '' COMMENT '评论内容',
  `nickname` varchar(255) NOT NULL DEFAULT '' COMMENT '评论昵称',
  `avatar` varchar(255) DEFAULT NULL COMMENT '评论者头像',
  `reply_name` varchar(255) NOT NULL DEFAULT '' COMMENT '被评论昵称',
  `comm_num` int(11) NOT NULL DEFAULT '0' COMMENT '回复数量',
  `like_num` int(11) NOT NULL DEFAULT '0' COMMENT '点赞数量',
  `created_time` datetime NOT NULL DEFAULT '2018-02-01 00:00:00' COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT '2018-02-01 00:00:00' COMMENT '更新时间',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='评论表';

#
# Data for table "comments"
#

/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;

#
# Structure for table "topics"
#

DROP TABLE IF EXISTS `topics`;
CREATE TABLE `topics` (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `title` varchar(255) NOT NULL DEFAULT '' COMMENT '话题标题',
  `content` varchar(255) DEFAULT NULL COMMENT '话题内容',
  `nickname` varchar(255) NOT NULL DEFAULT '' COMMENT '匿名昵称',
  `avatar` varchar(255) DEFAULT NULL COMMENT '匿名头像',
  `comm_num` int(11) NOT NULL DEFAULT '0' COMMENT '评论数量',
  `like_num` int(11) NOT NULL DEFAULT '0' COMMENT '点赞数量',
  `created_time` datetime NOT NULL DEFAULT '2018-02-01 00:00:00' COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT '2018-02-01 00:00:00' COMMENT '更新时间',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COMMENT='话题表';

#
# Data for table "topics"
#

/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
/*!40000 ALTER TABLE `topics` ENABLE KEYS */;
