---
title: 遇到的网络相关的问题
date: 2025-04-01
lastUpdated: true
isOrigin: true
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
category:
  - network

tag:
  - windows
order: 2
star: true
permalinkPattern: :year/:month/:day/:slug.html
---

## 远程桌面能ping通，但是连不上
原因：
> 远程桌面连接未开启
> 端口被占用

## 查看电脑mac地址

### windows
1.可以是用命令`getmac`获取
2.也可以在 `控制面板\所有控制面板项\网络连接 ` 中，双击一个网络，点击详细信息，就可以看到其中的物理地址

### linux
`ifconfig` 命令可以查看，其中 “HWaddr” 或 “ether” 一般为物理地址