---
title: minio 入门
date: 2025-04-07
lastUpdated: true
isOrigin: true
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
category:
  - minio

tag:
  - io

order: 1
star: true
permalinkPattern: :year/:month/:day/:slug.html
---

## 介绍
MinIO 是一种高性能、S3 兼容的对象存储。
它专为大规模 AI/ML、数据湖和数据库工作负载而构建，并且它是由软件定义的存储。
不需要购买任何专有硬件，就可以在云上和普通硬件上拥有分布式对象存储。
MinIO拥有开源 GNU AGPL v3 和商业企业许可证的双重许可。

## 官方网站
中文官网：https://www.minio.org.cn/
英文官网：https://min.io/
官方演示服务器：https://play.minio.org.cn

- 用户名: minioadmin
- 密码: minioadmin

## 下载安装
windows 下载地址：https://dl.minio.org.cn/server/minio/release/windows-amd64/minio.exe

## 启动服务
找到minio.exe 所在的路径，启用 cmd 输入： `.\minio.exe server C:\minio --console-address :9090`
根据控制台信息，启动服务。如：http://127.0.0.1:9000




