---
# 这是文章的标题
title: idea 使用方便记录
cover: https://webstatic.mihoyo.com/upload/contentweb/2022/07/04/d063646e97392638e07da24ce6b8c3cb_3567507076955258130.png
icon: file
author: xuyong
date: 2024-12-21
lastUpdated: true
category:
  - idea
tag:
  - 使用指南
sticky: false
star: false
---

记录 idea 使用过程中遇到的问题

<!-- more -->

## springboot的yml文件没有小叶子

下载 Spring Boot Helper 插件

## 好用的插件
| 名字       | 作用   |  操作  |官网|
| --------   | :-----  | :---- |:---- |
| translation |翻译帮助翻译英文文档|   Ctrl+Q查看注释，Ctrl+shift+y 翻译 ，或者打开自动翻译文档 |https://yiiguxing.gitee.io/translation-plugin/#/docs?id=usage|
| Spring Boot Helper |yml文件小叶子和其他|   下载就有小叶子   |不知道|



## 快捷键
```shell
格式化文档：Ctrl+Shift+Alt+L
文件内替换：Ctrl+R
进入方法体：Ctrl+B
提交git的commit：Ctrl+K
快速折叠if/else语句：Ctrl+Shift+。
try-catch-finally:Ctrl+Alt+T
```
## 使用过程中遇到的问题
### 启动报错 windows defender might impact performance
```shell
windows defender might impact performance

exclude IDE and project directories from antivirus scans:

*****

*****

Alternatively, add the IDE process as an exclusion

Exclude directories    Don't show again
```

windows defender可能会影响性能
从防病毒扫描中排除IDE和项目目录

解决方法：
**下面两个选项都可以点击，点击之后一路默认即可，或者直接×掉**
