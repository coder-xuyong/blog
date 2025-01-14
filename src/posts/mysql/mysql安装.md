---
title: mysql 安装
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
order: 1
category:
  - mysql

tag:
  - sql

---

mysql 安装指南
<!-- more -->

# mysql安装

## 官方文档
(mysql5.7 参考手册)[https://dev.mysql.com/doc/refman/5.7/en/replication-gtids-howto.html]

## 下载
压缩包下载地址：https://dev.mysql.com/downloads/mysql/5.5.html#downloads

## 配置环境变量
主要是将bin目录放入path环境中

## 创建 my.ini配置文件
填入
```shell
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir = D:\\mysql\\mysql-8.0.17-winx64
# 设置mysql数据库的数据的存放目录
datadir = D:\\mysql\\mysql-8.0.17-winx64\\data
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 创建模式
sql_mode = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

```

## cmd 到bin目录
初始化,执行下述命令之后，会多出一个data文件夹，文件夹里面会有一个 .err 结尾的文件，里面有初始密码
```shell
mysqld --initialize
```
## 执行 sc delete mysql
删除 先前安装的 mysql 残余

## 执行 mysqld --install
如果报错 `Install/Remove of the Service Denied!`
以管理员身份运行 cmd 重新执行
然后登陆修改密码