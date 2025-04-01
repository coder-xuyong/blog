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