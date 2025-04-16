---
title: tomcat指定jdk路径启动
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
order: 1
star: true
permalinkPattern: :year/:month/:day/:slug.html
---

## tomcat指定jdk路径启动

### Windows 系统

解压下载的 Tomcat。

找到 bin 目录下的 `setclasspath.bat` 文件。

在文件的开头添加以下代码：
```shell
set JAVA_HOME=D:\Program Files\Java\jdk7\jdk1.7.0_51
set JRE_HOME=D:\Program Files\Java\jdk7\jre7
```
### Linux 系统

找到 bin 目录下的 `setclasspath.sh` 文件。

在文件的开头添加以下代码：
```shell
export JAVA_HOME=/home/jdk/Java/jdk7/jdk1.7.0_51
export JRE_HOME=/home/jdk/Java/jdk7/jre7
```
通过修改 setclasspath 文件，Tomcat 在启动时会使用指定的 JDK


**重要提示**

- 注意：修改 `setclasspath.bat` 或 `setclasspath.sh` 文件后，Tomcat 启动时会调用这些文件来获取 JAVA_HOME 和 JRE_HOME 环境变量的值，从而使用指定的 JDK

- 替代方法：可以直接修改 `catalina.bat` 或 `catalina.sh` 文件，增加相同的环境变量设置

## 将 tomcat 注册为 service 
进入D:\apache-tomcat-8.5.100\bin目录，在bin目录下键入“cmd”,按下回车打开cmd窗口

在cmd窗口中键入“service.bat install Tomcat8”,按下回车。出现 the service ‘tocmat8’ has been installed 即成功。

最后去服务里面找到tomcat8 将其设置为自动启动。

## 可能遇到的问题

### Found 'D:\apache-tomcat-8.5.100\jdk\jre\bin\server\jvm.dll' but couldn't load it.
tomcat 指定 jdk启动后，日志报错 `Found 'D:\apache-tomcat-8.5.100\jdk\jre\bin\server\jvm.dll' but couldn't load it.`
在jdk\bin 里面启动cmd，执行 `java` 命令，出现如下错误
```shell
D:widkwbin >java
Error:loading: D:\jdk\jre\bin\cruntime140.dll
Error:loading: D:\jdk\jre\bin\server\jvm.d11
```

结论：缺少 vc库 ，百度下载一个安装即可。如：https://www.xitongzhijia.net/tags/%E5%BE%AE%E8%BD%AF%E5%AE%98%E6%96%B9VC%E8%BF%90%E8%A1%8C%E5%BA%93
