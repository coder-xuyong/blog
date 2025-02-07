---
title: deepseek 本地搭建
icon: https://www.deepseek.com/favicon.ico
cover: https://fastcdn.mihoyo.com/content-v2/hk4e/126200/0dca02ec950a9713e811f2aee6169ba6_4674205181278794291.png
date: 2025-02-08
lastUpdated: true
order: 1
isOriginal: true
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
category:
  - AI
tag:
  - AI
  - deepseek
sticky: false
star: true
---
本地搭建 deepseek ，搭建属于自己的 AI
<!-- more -->

## 了解 Ollama
ollama（Omni - Layer Learning Language Acquisition Model 的缩写，也可以意译为 “全层学习语言习得模型”。），lama 有 羊驼 的意思，故图标为一只羊驼

![ollama ico](https://ollama.com/public/ollama.png){style="display: block; margin: 0 auto;"}

官网地址：https://ollama.com/
其主要目的是：Get up and running with large language models. 翻译为：启动并运行大型语言模型。

此为 ollama 在 github 介绍时的原文：https://github.com/ollama/ollama/blob/main/README.md

言简意赅说一下，就是通过它，用户能够轻松在本地部署 AI 模型，将 AI 本地化。

## 安装 Ollama
Ollama 官方下载地址：https://ollama.com/download
根据不同的系统下载对应的包。

### windows 系统安装
打开浏览器，访问 Ollama 官方网站：https://ollama.com/download，下载适用于 Windows 的安装程序。

下载地址为：https://ollama.com/download/OllamaSetup.exe。

下载完成后，双击安装程序并按照提示完成安装。


**验证安装**
打开命令提示符或 PowerShell，输入以下命令验证安装是否成功：

ollama --version
如果显示版本号，则说明安装成功。

**改安装路径（可选）**
如果需要将 Ollama 安装到非默认路径，可以在安装时通过命令行指定路径，例如：

OllamaSetup.exe /DIR="d:\some\location"
这样可以将 Ollama 安装到指定的目录。



## 参考
> https://www.runoob.com/ollama/ollama-tutorial.html
> https://blog.csdn.net/2301_81028896/article/details/145394934