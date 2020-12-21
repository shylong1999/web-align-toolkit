/*
 Navicat Premium Data Transfer

 Source Server         : cms
 Source Server Type    : MySQL
 Source Server Version : 100406
 Source Host           : localhost:3306
 Source Schema         : toolkit

 Target Server Type    : MySQL
 Target Server Version : 100406
 File Encoding         : 65001

 Date: 21/12/2020 13:27:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for data_align
-- ----------------------------
DROP TABLE IF EXISTS `data_align`;
CREATE TABLE `data_align`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `lang1` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lang2` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `scope` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int NOT NULL,
  `created_date` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `update_date` timestamp(0) NULL DEFAULT NULL,
  `delete_date` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2562 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sen_align_data
-- ----------------------------
DROP TABLE IF EXISTS `sen_align_data`;
CREATE TABLE `sen_align_data`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `lang1` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lang2` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `scope` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `isCheck` int NOT NULL DEFAULT 0,
  `isDelete` int NOT NULL DEFAULT 0,
  `user_id` int NOT NULL,
  `create_date` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `update_time` timestamp(0) NULL DEFAULT NULL,
  `delete_date` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2596 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` timestamp(0) NOT NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `role` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `active` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
