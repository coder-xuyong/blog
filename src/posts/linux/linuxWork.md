---
title: 在工作中遇到的有关Linux的问题
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
category:
  - linux
tag:
  - linux
  - tomcat
  - shell
---
在工作中遇到的有关Linux的问题

<!-- more -->

# 设置tomcat 开机自启

```shell
crontab -e
# 在其中添加 下面这行代码（startup.sh 自行更好，只有一行时 & 不要） 保存
reboot sudo -u root /home/debian/tomcat9/bin/startup.sh start &
```

# 设置 jar 开机自启
编写脚本文件
start.sh
```shell
#!/bin/bash
nohup java -server -jar XXX.jar > /dev/null 2>&1 &
#nohup 确保即使用户退出登录，Java进程也会继续运行。
#java -server -jar XXX.jar 启动指定的JAR文件。
#-server 是一个JVM选项，表示以服务器模式运行JVM。服务器模式下的JVM通常会进行更多的优化，适合长时间运行的应用程序。
#> /dev/null 将标准输出（控制台输出）丢弃。
#2>&1 将标准错误（错误信息）也丢弃。
#& 将整个命令放在后台执行。
```
进入 rc.d目录
```shell
cd /etc/rc.d
cat rc.local
```
执行命令：vim rc.local  , 修改rc.local 。按【i】键进入编辑模式，在最后添加代码：
```shell
sleep 60
cd /myApp/test
sh /myApp/test/startup.sh
 
#第一句为进入你项目所在的目录，我这里把项目放在/myApp/test下
#第二句执行该目录下的sh文件
 
##说明
#如果不提前进入所在目录，直接执行第二句，也会开机自启动，但是日志文件会在根目录下的log文件中。只有先进入，再执行，项目的日志文件才会在test文件夹下
 
##test文件中有jar包、startup.sh、以及jar包的日志文件logs
```
设置权限：
```shell
chmod +x /etc/rc.d/rc.local
chmod +x /myApp/test/startup.sh
```

## linux 查找文件
1.使用 `find` 命令

`find` 是一个非常强大的命令行工具，用于在文件系统中搜索文件和目录。它可以在指定的路径下递归查找，并支持复杂的条件匹配。

2.基本用法

```bash
find /path/to/search -name "filename"
```
