---
title: DML和DQL常用命令，操作表数据
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
category:
  - mysql

tag:
  - sql

---

DML和DQL常用命令，操作表数据
<!-- more -->

# DML和DQL常用命令，操作表数据


## DML（Data Manipulation Language）
```shell
INSERT INTO 表名(列名1,列名2,…) VALUES(值1,值2,…);--给指定列添加数据
INSERT INTO 表名 VALUES(值1,值2,…);--给全部列添加数据
--批量添加数据
NSERT INTO 表名(列名1,列名2,…) VALUES(值1,值2,…),(值1,值2,…),(值1,值2,…)…;
INSERT INTO 表名 VALUES(值1,值2,…),(值1,值2,…),(值1,值2,…)…;

UPDATE 表名 SET 列名1=值1,列名2=值2,… [WHERE 条件] ;--修改表数据
DELETE FROM 表名 [WHERE 条件] ;--删除数据

```

## DQL（data query language）

```shell
SELECT 字段列表 FROM 表名;
SELECT * FROM 表名; -- 查询所有数据
SELECT DISTINCT 字段列表 FROM 表名;--去除重复记录
--起别名，AS: AS 也可以省略

SELECT 字段列表 FROM 表名 WHERE 条件列表;--条件查询
SELECT 字段列表 FROM 表名 LIMIT  起始索引 , 查询条目数;--分页查询
select * from stu where name like '_%';--模糊查询，（1）_ : 代表单个任意字符，（2）% : 代表任意个数字符
```
### 排序查询

```sql
    SELECT 字段列表 FROM 表名 ORDER BY 排序字段名1 [排序方式1],排序字段名2 [排序方式2] …;
```

上述语句中的排序方式有两种，分别是：

* ASC ： 升序排列 **（默认值）**
* DESC ： 降序排列

> 注意：如果有多个排序条件，当前边的条件值一样时，才会根据第二条件进行排序


### 聚合函数
==将一列数据作为一个整体，进行纵向计算==
| 函数名      | 功能                             |
| ----------- | -------------------------------- |
| count(列名) | 统计数量（一般选用不为null的列） |
| max(列名)   | 最大值                           |
| min(列名)   | 最小值                           |
| sum(列名)   | 求和                             |
| avg(列名)   | 平均值                           |


```sql
SELECT 聚合函数名(列名) FROM 表;
```

> 注意：null 值不参与所有聚合函数运算


### 分组查询


```sql
SELECT 字段列表 FROM 表名 [WHERE 分组前条件限定] GROUP BY 分组字段名 [HAVING 分组后条件过滤];
```

> 注意：分组之后，查询的字段为聚合函数和分组字段，查询其他字段无任何意义


