---
title: ftp
icon: pen-to-square
date: 2023-06-05
lastUpdated: true
category:
  - java
tag:
  - bug
---

ftp 的一些基础内容

<!-- more -->

## 概述
文件传输协议（File Transfer Protocol，FTP）是用于在网络上进行文件传输的一套标准协议，它工作在 OSI 模型的第七层， TCP 模型的第四层， 即应用层， 使用 TCP 传输而不是 UDP， 客户在和服务器建立连接前要经过一个“三次握手”的过程， 保证客户与服务器之间的连接是可靠的， 而且是面向连接， 为数据传输提供可靠保证。

FTP允许用户以文件操作的方式（如文件的增、删、改、查、传送等）与另一主机相互通信。然而， 用户并不真正登录到自己想要存取的计算机上面而成为完全用户， 可用FTP程序访问远程资源， 实现用户往返传输文件、目录管理以及访问电子邮件等等， 即使双方计算机可能配有不同的操作系统和文件存储方式。
## 引入依赖
```xml
 <dependency>
    <groupId>commons-net</groupId>
    <artifactId>commons-net</artifactId>
    <version>3.3</version>
</dependency>
```

## Server Reply: SSH-2.0-OpenSSH_7.4 报错
端口号设置错误，22是sftp的默认端口，ftp默认使用的端口是21。

## 老是连接超时
阿里云每一开放21端口号

## getReplyCode() 返回530
就是你连接上了，只是ftpClient.getReplyCode()的返回值是530，那么就是因为你当前用户没有传输文件的权限，先提供如下解决办法。     
一般root用户是有权限的若是root      还返回530，就用一下方法：先查看/etc/vsftpd/下面的文件ftpusers和user_list里面是否有你的用户名，若有注释就可以了。这两个文件中的用户都是没有权限。

## sortFile 连接超时
将下述代码放在建立连接之前
```java
 ftpClient.enterLocalPassiveMode();//开启被动模式
```