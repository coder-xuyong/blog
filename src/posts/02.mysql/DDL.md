---
title: DDL常用命令，操作数据库和表结构
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
category:
  - mysql

tag:
  - sql

---

DDL常用命令，操作数据库和表结构
<!-- more -->


# DDL常用命令，操作数据库和表结构

标签（空格分隔）： mysql

---
（data definition language）数据库定义语言
## 操作数据库
```shell
SHOW DATABASES;--查询所有数据库
CREATE DATABASE 数据库名称;--创建数据库
CREATE DATABASE IF NOT EXISTS 数据库名称;--创建数据库(判断，如果不存在则创建)
DROP DATABASE 数据库名称;--删除数据库
DROP DATABASE IF EXISTS 数据库名称;--删除数据库(判断，如果存在则删除)
USE 数据库名称;--切换到当前数据库
SELECT DATABASE();--查看当前使用的数据库
```


## 修改数据库密码
```shell
mysql> use mysq;
-- 查询主机用户名密码：5.7版本之前的
mysql> select host,user,plugin,password from user;
-- 查询主机用户名密码：5.7版本之后的，包括5.7
mysql> select host,user,plugin,authentication_string from user;
mysql> select host,user,plugin,authentication_string from user\G;
mysql> select host,user,plugin,authentication_string from mysql.user;
-- 修改密码，刷新权限
mysql> update user set password=password("新密码") where user="root";
mysql> flush privileges;
mysql> quit
-- 上面修改密码是在5.7版本之前的。若是5.7版本之后的（包括5.7），没有password这个字段了，则修改方法如下：
mysql> alter user "root"@"localhost" identified by "新密码";  -- 方法1
mysql> update user set authentication_string=password("新密码") where user="root";  -- 方法2
mysql> flush privileges;
mysql> quit
```

## 修改数据库连接权限
```shell
update user set host='%' where user='root';
```
## 查看当前数据库的连接数
```shell
show status like 'Threads%';
```

## 操作表
```shell
SHOW TABLES;--查询当前数据库下所有表名称
DESC 表名称;--查询表结构
--创建表
CREATE TABLE 表名 (
	字段名1  数据类型1,
	字段名2  数据类型2,
	…
	字段名n  数据类型n
);
DROP TABLE 表名;--删除表
DROP TABLE IF EXISTS 表名;--删除表时判断表是否存在
ALTER TABLE 表名 RENAME TO 新的表名;--修改表名
ALTER TABLE 表名 ADD 列名 数据类型;--添加一列
ALTER TABLE 表名 MODIFY 列名 新数据类型;--修改数据类型
ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;--修改列名和数据类型
ALTER TABLE 表名 DROP 列名;--删除列
```




