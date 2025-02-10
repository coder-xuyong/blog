---
title: AI 入门
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

## FIND_IN_SET(str, strlist)

- str：需要查找的目标字符串。
- strlist：由逗号分隔的字符串列表，函数会在此列表中查找 str。

1.简单查找
```shell
SELECT FIND_IN_SET('apple', 'banana,apple,orange');
```
在这个例子中，str 是 'apple'，strlist 是 'banana,apple,orange'。函数会在 strlist 中查找 'apple'，由于 'apple' 是列表中的第二个元素，所以该查询将返回 2。

2. 未找到的情况
```shell
sqlSELECT FIND_IN_SET('grape', 'banana,apple,orange');
```
这里要查找的 'grape' 不在 'banana,apple,orange' 列表中，因此函数会返回 0。

3. 在 WHERE 子句中使用
假设有一个 products 表，其中 tags 列存储着以逗号分隔的产品标签列表，下面的查询将找出所有带有 'sale' 标签的产品：
```shell
sqlSELECT * FROM products
WHERE FIND_IN_SET('sale', tags) > 0;
```