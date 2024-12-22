---
title: 工作中遇到的 shell
icon: pen-to-square
date: 2024-05-13
lastUpdated: true
category:
  - windows
tag:
  - script
  - shell
---

工作中遇到有关 shell 脚本的情景和处理记录

<!-- more -->

## 1、脚本启动停止jar包，并生成日志文件
start.bat
```shell
@echo off
%1 mshta vbscript:CreateObject("WScript.Shell").Run("%~s0 ::",0,FALSE)(window.close)&&exit
java -jar 包名.jar >StartupLog.log  2>&1 &
exit
```
其中，StartupLog.log 是日志文件

stop.bat
```shell
@echo off
set port=程序端口号
for /f "tokens=1-5" %%i in ('netstat -ano^|findstr ":%port%"') do taskkill /f /pid %%m
```

原文链接：https://blog.csdn.net/weixin_47148475/article/details/126747188

## 2、上面的变种

start2.bat
```shell
set JAVA_HOME=./jdk
 
set CLASSPATH=.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
 
set Path=%JAVA_HOME%\bin;
 
java -jar DMS_DEMO-1.0-SNAPSHOT.jar
```

stop2.bat
```shell
@echo off
# 项目启动后，会占用的端口
set port=9021
for /f "tokens=1-5" %%i in ('netstat -ano^|findstr ":%port%"') do (
    echo kill the process %%m who use the port %port%
    # 根据 进程id pid 信息，杀掉进程
    taskkill /f /pid %%m
)

```

