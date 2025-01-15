---
title: mysql使用中遇到的问题记录
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
cover: https://fastcdn.mihoyo.com/content-v2/hk4e/126200/0dca02ec950a9713e811f2aee6169ba6_4674205181278794291.png
isOriginal: true
category:
  - mysql

tag:
  - sql

---

mysql使用中遇到的问题记录
<!-- more -->

## Packet for query is too large错误
```txt
在mysql安装目录中找到my.ini配置文件
在最后添加 max_allowed_packet=10485760
```
数值可以 MB为单位，16M


##  索引失效
eg：假设age是整数类型，但是却使用字符串类型
```shell
SELECT * FROM user WHERE age = '20';
```
MySQL 需要在查询时转换 '20' 为整数类型，可能会导致索引无法使用。 某个电商平台就有这么一个类似的bug，导致下单超时崩盘30分钟。

## MySql 5.7 解决GROUP BY出现的问题
报错如下：
```shell
1055 - Expression #1 of SElECT list is not in GRoUp BY clause and contains nonaggregated column 'projhigh.project node.i whicn is not functionally dependent on columns in GROup BY clause; this is incompatible with sql mode=only_full_group_by

```

引起的原因是：这个错误一般发生在mysql 5.7以及 5.7以上的版本中，其原因是mysql的默认配置中,sql_mode="ONLY_FULL_GROUP_BY" 这个配置严格执行了 'SQL92标准',所以很高网站维护人员在升级mysql版本时，都会修改 sql_mode 的配置，使其能兼容。

解决方法1，重启mysql后会失效：
```shell
-- 查看ONLY_FULL_GROUP_BY 校验规则是否开启
SELECT @@GLOBAL.sql_mode;
SELECT @@SESSION.sql_mode;
 
 
-- 第一个sql语句的结果，使用自己查询的结果
ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
 
-- 第二个sql语句的结果
ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION


-- 关闭only_full_group_by的规则校验
set @@GLOBAL.sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO, NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
set @@SESSION.sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO, NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';

```

解决方法2：
修改配置文件 my.ini 
```shell
在 [mysqld] 下面添加代码：
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
```

重启mysql服务。

注意：

1、不同的系统，mysql 的配置文件名以及路径不同

2、Mac或Linux文件  /etc/my.cnf

3、windows 在数据库安装目录下的 my.ini