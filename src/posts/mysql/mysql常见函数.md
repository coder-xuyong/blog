---
title: MySQL 常见函数
icon: fa-solid fa-ghost
date: 2025-02-10
lastUpdated: true
order: 1
isOriginal: true
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
category:
  - mysql
tag:
  - mysql
sticky: false
star: true
---
记录经常使用的 mysql 函数。
<!-- more -->

## FIND_IN_SET方法
### 定义与语法
`FIND_IN_SET()` 是MySQL用于字符串查找的函数。语法为 `FIND_IN_SET(str, strlist)`，其中 `str` 是要查找的目标字符串，`strlist` 是逗号分隔的字符串列表。

### 工作原理
该函数在 `strlist` 中查找 `str`。若找到，返回 `str` 在 `strlist` 中的位置（从1开始计数）；若未找到，返回0 。若 `str` 或 `strlist` 为 `NULL`，则返回 `NULL`。

## GROUP_CONCAT方法
### 定义与语法
`GROUP_CONCAT()` 是MySQL的聚合函数，用于将分组后的多个值连接成一个字符串。语法为：
```sql
GROUP_CONCAT([DISTINCT] expr [,expr...]
             [ORDER BY {unsigned_integer | col_name | expr}
                 [ASC | DESC] [,col_name...]]
             [SEPARATOR str_val])
```
 - `DISTINCT` 为可选参数，用于去除重复值。
 - `expr` 表示要连接的表达式，通常为列名。
 - `ORDER BY` 可选，用于指定连接值的排序方式。
 - `SEPARATOR` 可选，用于指定连接值之间的分隔符，默认是逗号 `,`。

### 工作原理
它先对查询结果按指定条件分组，然后将每组内的 `expr` 值连接成一个字符串。通过参数可控制去重、排序及分隔方式。

