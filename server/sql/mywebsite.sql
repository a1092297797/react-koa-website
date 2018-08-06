/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50537
Source Host           : localhost:3306
Source Database       : mywebsite

Target Server Type    : MYSQL
Target Server Version : 50537
File Encoding         : 65001

Date: 2018-08-06 10:44:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `article`
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `sumary` varchar(255) DEFAULT NULL,
  `like` int(11) unsigned zerofill DEFAULT NULL,
  `createdate` date DEFAULT NULL,
  `lastedit` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', 'es6简介', 'es6-阮一峰', null, '2018-06-01', null);
