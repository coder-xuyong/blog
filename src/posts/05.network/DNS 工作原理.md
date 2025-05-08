---
title: DNS 工作原理
date: 2025-02-17
lastUpdated: true
isOrigin: true
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
category:
  - network

tag:
  - DNS
order: 1
star: true
permalinkPattern: :year/:month/:day/:slug.html
---

## DNS 核心作用
DNS（域名系统，Domain Name System）适用于将 域名 转换为 IP 的服务。

域名与 IP 的映射：DNS 本质上是一个分布式数据库，存储了域名与对应 IP 地址的映射关系。

## DNS 的组成部分

- 域名空间（Domain Name Space）： 以树状结构组织域名，例如：`根域（.） → 顶级域（.com） → 二级域（sbnvidia.com） → 子域（www.sbnvidia.com）`
+ DNS 服务器：
    - **递归解析器（Recursive Resolver）**：用户直接访问的服务器（如 ISP 提供的 DNS 或公共 DNS 如 8.8.8.8），负责代替用户完成查询。
    - **根域名服务器（Root Server）**：全球共 13 组，存储顶级域（如 .com、.org）的地址信息。
    - **顶级域服务器（TLD Server）**：管理特定顶级域（如 .com 服务器存储所有以 .com 结尾的域名信息）。
    - **权威域名服务器（Authoritative Server）**：存储具体域名的 IP 地址（如 example.com 的权威服务器由域名所有者管理）。


## DNS 解析流程
当用户在浏览器输入 www.sbnvidia.com 时，解析过程如下：

1.**本地缓存查询**：
+ 浏览器检查自身缓存 → 若无，检查操作系统缓存（如 hosts 文件）。
+ 若仍无结果，向递归解析器（如本地 DNS 服务器）发起请求。

2.**递归解析器处理**：
+ 递归解析器先检查自身缓存，若未命中，则从根域名服务器开始逐级查询： a. 根域名服务器：返回 .com 顶级域服务器的地址。 b. 顶级域服务器（.com）：返回 sbnvidia.com 的权威服务器地址。 c. 权威域名服务器：返回 www.sbnvidia.com 的 IP 地址。

3.**返回结果**：
+ 递归解析器将最终 IP 返回给用户设备，并缓存结果（根据记录的 TTL 时间）。
+ **缓存层级**：浏览器 → 操作系统 → 递归解析器均会缓存结果，减少重复查询。
+ **TTL（Time to Live）**：每条 DNS 记录设有时效性，超时后缓存失效，需重新查询。