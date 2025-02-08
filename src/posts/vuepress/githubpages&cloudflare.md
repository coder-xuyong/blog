---
title: 使用cdn提升githubpages的访问速度
icon: pen-to-square
date: 2025-02-09
lastUpdated: true
order: 4
isOriginal: true
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
category:
  - vuepress
  - CDN
  - cloudflare
tag:
  - vuepress
  - CDN
  - cloudflare
sticky: false
# 此页面会出现在星标文章中
star: false
---


## cdn 概述和分析
通过 CDN（内容分发网络）将静态资源缓存到全球节点，显著提升访问速度。

1. Cloudflare 加速

优点：免费，全球节点多，支持 HTTPS。

注意：国内用户访问 Cloudflare 节点可能仍有延迟，但对海外用户效果显著。

2. 国内 CDN 服务（需备案）
如果用户主要在国内，可使用阿里云、腾讯云 CDN，但需域名备案。备案特别麻烦，主要是需要花钱，可以参考：https://blog.csdn.net/lion_no_back/article/details/131075457


综上，使用 cdn  提升 github pages 访问速度慢的问题，对比国内（腾讯、阿里云）和国外 cloudflare ，最终选择使用 cloudflare。

## Cloudflare github pages 部署步骤

访问官网：https://www.cloudflare-cn.com/
点击右上角登陆，可能需要科学上网。
使用 Google 或者 apple 账号登陆。
登陆成功后，右上角可以选择切换中文。
选择 计算(Workers)/Worker 和 pages，如下图所示
 ![image-5229ef83986fc43043307a0e7b52525](img/5229ef83986fc43043307a0e7b52525.png)

选择pages，连接 git 
  ![](img/c47258a386cf69a13adece1710ec1a6.png)
选择github，连接github，登陆之后选择仓库
![](img/c34d88889af349e21dd7f7aa3a0fb6d.png)
![](img/d83b03703e8bc667074818f124fbb9c.png)
选择分支，确认构建命令和打包目录
![](img/461a4950431295849026a07118d1f92.png)
出现构建错误
![](img/9fc5ae43d8bf91521079a0446637177.png)
需要自定义 node 版本
![](img/8e80e4b4f8541529ca57ff98f8f9afc.png)
但又出现了找不到打包目录的错误
![](img/445e12f1cf48c98cbf42d7cd5384b72.png)
修改构建输出目录
![](img/6c5121d73827eaff642de51c0dda12f.png)
构建成功
![](img/8767524bf30a81a54cf5e35b60f8417.png)
可以访问 dev 结尾的网址预览项目

后续上传代码到github上，会自动打包
![](img/b9e627a8fbdd6374f65202550884cbf.png)


## 阿里云域名获取

访问阿里云官网获取：https://wanwang.aliyun.com/domain
身份验证需要花费半小时的时间。

## 参考
> https://blog.csdn.net/lion_no_back/article/details/131075457
> https://blog.csdn.net/abjtxf/article/details/145431226
> https://qinyu.space/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/%E5%88%A9%E7%94%A8cloudflare%E5%8A%A0%E9%80%9Fgithub%E4%B8%BB%E9%A1%B5%E8%AE%BF%E9%97%AE/#