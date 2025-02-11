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
## UNION 和 UNION ALL
1.mysql   union  语法

mysql   union 用于把来自多个select  语句的结果组合到一个结果集合中。语法为：
```shell
select  column,......from table1

union [all]

select  column,...... from table2

...
```
在多个select  语句中，对应的列应该具有相同的字段属性，且第一个select 语句中被使用的字段名称也被用于结果的字段名称。

2.union  与 union all 的区别

当使用union  时，mysql 会把结果集中重复的记录删掉，而使用union  all ，mysql 会把所有的记录返回，且效率高于union 。



## FIND_IN_SET

`FIND_IN_SET()` 是MySQL用于字符串查找的函数。

语法为 `FIND_IN_SET(str, strlist)`，其中 `str` 是要查找的目标字符串，`strlist` 是逗号分隔的字符串列表。

该函数在 `strlist` 中查找 `str`。若找到，返回 `str` 在 `strlist` 中的位置（从1开始计数）；若未找到，返回0 。若 `str` 或 `strlist` 为 `NULL`，则返回 `NULL`。


## concat

1、功能：

将多个字符串连接成一个字符串。

2、语法：

concat(str1, str2,...)

返回结果为连接参数产生的字符串，如果有任何一个参数为null，则返回值为null。

## concat_ws
1、功能：

和concat()一样，将多个字符串连接成一个字符串，但是可以一次性指定分隔符～（concat_ws就是concat with separator）

2、语法：

concat_ws(separator, str1, str2, ...)

说明：第一个参数指定分隔符。需要注意的是分隔符不能为null，如果为null，则返回结果为null。

## GROUP_CONCAT
1、功能：

将group by产生的同一个分组中的值连接起来，返回一个字符串结果。

2、语法：

group_concat( [distinct] 要连接的字段 [order by 排序字段 asc/desc ] [separator '分隔符'] )

说明：通过使用distinct可以排除重复值；如果希望对结果中的值进行排序，可以使用order by子句；separator是一个字符串值，缺省为一个逗号。



## 参考
> https://www.cnblogs.com/alex0702/p/10767005.html
> https://www.cnblogs.com/duhuo/p/14829575.html