---
title: Windows 使用笔记
date: 2025-06-16
order: 2
lastUpdated: true
category:
  - windows

tag:
  - shell
  - windows
permalinkPattern: :year/:month/:day/:slug.html
---

## 修改注册表显卡型号
目的：开启鸣潮pc端极致画质，官方只对4090以上的显卡开放。因此，我们需要修改注册表中的显卡型号，重启电脑后，就可以开启极致画质。

步骤：
- 在设备管理器中找到 显示适配器/显卡型号/详细信息，在属性中找到设备实例路径，复制他的值：`PCI\VEN_10DE&DEV_1C81&SUBSYS_11C01028&REV_A1\4&E482FF8&0&0008`
- win+r 输入 regedit，打开注册表。找到这个路径`计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\PCI`，在后面加上步骤一，复制的值，注意PCI有时候会重复，注意取消，或者依次找寻。
- 找到 DeviceDesc ，将其值的最后的 GPU 型号修改为 4090，保存重启电脑，即完成。

## 禁止windows自动更新的最有效方法
将本地时间跳到 N 多年以后，再点击暂停 7 天更新，最后将时间恢复正常，看到暂停更新到 N 多年以后，即大功告成！


## Ping 与 Telnet

telnet和ping结合很好查看监控服务器状态的，很多工具就是依靠这些基本命令来实现监控的 。
### 使用
ping 可以测试到目标机器的连通性。Ping域名还可以得出解析IP。评估网络质量。

1、ping只互相传输协议数据，不传送用户数据

2、ping是第一步，如果ping不通，十有八九是防火墙问题（当然，物理连接要通）

3、ping无法检查系统端口是否开放。

telnet 用于远程管理连接主机。同时也是测试目标机器的TCP端口是否开放。命令格式：telnet IP Port

如果telnet连接失败，

1、可能是防火墙屏蔽了

#ubuntu里查看
sudo ufw status
2、可能是目标机器没有启用相关服务

ps -ef | grep xxx
3、可能是目标机器的TCP端口被占用了

netstat -anlp | grep 8888

### 原理
ping命令工作在OSI参考模型的第三层-网络层。
ping命令会发送一个数据包到目的主机，然后等待从目的主机接收回复数据包，当目的主机接收到这个数据包时，为源主机发送回复数据包，这个测试命令可以帮助网络管理者测试到达目的主机的网络是否连接。

Telnet是位于OSI模型的第7层---应用层上的一种协议，是一个通过创建虚拟终端提供连接到远程主机终端仿真的TCP/IP协议。这一协议需要通过用户名和口令进行认证，是Internet远程登陆服务的标准协议。应用Telnet协议能够把本地用户所使用的计算机变成远程主机系统的一个终端。它提供了三种基本服务：　
1）Telnet定义一个网络虚拟终端为远程系统提供一个标准接口。客户机程序不必详细了解远程系统，他们只需构造使用标准接口的程序；　
2）Telnet包括一个允许客户机和服务器协商选项的机制，而且它还提供一组标准选项；　.　
3）Telnet对称处理连接的两端，即Telnet不强迫客户机从键盘输入，也不强迫客户机在屏幕上显示输出。


## windows 压缩图片

将图片用 windows 自带的 照片 打开，选择调整图像大小，即可压缩图片和设置分辨率。

参考：
> https://mbd.baidu.com/newspage/data/dtlandingsuper?nid=dt_5369255230329836401