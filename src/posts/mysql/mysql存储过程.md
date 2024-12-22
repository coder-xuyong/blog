---
title: mysql 存储过程
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

# mysql 存储过程

## 什么是存储过程
存储过程就是一些SQL语句的集合，可以简单理解为类似Java中的一个接口函数，函数里面可以使用查询SQL、流程控制语句、定义参数、条件等，用来实现更复杂逻辑的处理。

## 存储过程的作用（优点）
1.执行速度更快（因为不需要从应用程序调用MySQL服务，减少了获取连接、网络传输的耗时）

2.相比普通SQL实现了复杂的逻辑处理。比如可以应用在测试数据的预置，有时我们在性能测试的时候，需要预置大量的测试数据，利用代码当然能实现预置测试数据，但是一方面测试代码有时候是不能上传到测试环境的，修改发布也不方便。这时候用存储过程就可以轻松修改变量，直接在数据库中执行。

## 存储过程的缺点
1.书写复杂的存储过程，会显得晦涩难懂。

2.存储过程难以调试，很少工具可以调试存储过程，使得开发和维护都不容易。

3.不能移植，存储过程只能在数据中执行。

## 创建存储过程

### 1.具体语法详解

```shell
CREATE PROCEDURE sp_name ([proc_parameter])
[characteristice ...] routine_body
```

CREATE PROCEDURE：创建存储过程的关键字

sp_name：存储过程的名称

proc_parameter：存储过程的参数列表，列表形式如 [IN | OUT | INOUT] param_name type

* IN：输入

* OUT：输出

* INOUT：输入或输出

* param_name：参数名

* type：参数类型，可以是MySQL数据库中的任意类型

characteristics：存储过程的特性，有以下取值

* LANGUAGUE SQL：说明routine_body部分是由SQL语句组成的，当前系统支持的语言为SQL。SQL是LANGUAGE特性的唯一值

* [NOT]DETERMINISTIC：存储过程执行的结果是否确定。DETERMINISTIC表示是确定的，输入相同的参数，只会得到相同的结果。如果没有指定值，默认为 NOT DETERMINISTIC。

* { CONTAINTS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }：指明子程序使用SQL语句的限制

  - CONTAINTS SQL：表明子程序包含SQL语句，但不包含读写数据的语句

  - NO SQL：表明子程序不包含SQL语句

  - READS SQL DATA：表明子程序包含读写数据的语句 
  - MODIFIES SQL DATA：表明子程序包含读写数据的语句

  - 默认默认为 CONTAINTS SQL

* SQL SECURITY{ DEFINER | INVOKER }：指明谁有权执行

    - DEFINER：表示只有定义者才能执行

    - INVOKER：表示有权调用者可以执行

    - 系统默认为 DEFINER

* COMMENT 'string'：注释信息