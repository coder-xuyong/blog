---
title: 日志
icon: pen-to-square
# cover: https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/4c4b8babc68ffedce9bd5766b60e1ae5_8781849729625946129.png
date: 2023-02-24
lastUpdated: true
order: 1
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
    - name: itheima
      url: https://space.bilibili.com/37974444?spm_id_from=333.337.search-card.all.click
category:
  - java
tag:
  - java-basic
---

logback 的使用

<!-- more -->
# 日志

## 1.1 作用：

​	跟输出语句一样，可以把程序在运行过程中的详细信息都打印在控制台上。

​	利用log日志还可以把这些详细信息保存到文件和数据库中。


## 1.2 日志级别

```
TRACE, DEBUG, INFO, WARN, ERROR
```

还有两个特殊的：

​	ALL：输出所有日志

​	OFF：关闭所有日志

日志级别从小到大的关系：

​	TRACE < DEBUG < INFO < WARN < ERROR



## 1.3 logback 的使用

1.导入依赖：

```shell
 <!-- Logback Core -->
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-core</artifactId>
            <version>1.2.11</version> <!-- 选择合适的版本 -->
        </dependency>

        <!-- Logback Classic (用于替代 SLF4J 的实现) -->
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>1.2.11</version>
        </dependency>
```

2.配置xml文件:logback.xml 放置在 resources 下

```xml

<configuration>


    <!-- 控制台日志输出 -->
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} %highlight(%-5level) %white(-) %-15(%yellow([%10.20thread]))
                %-55(%cyan(%.32logger{30}:%L)) %highlight(- %msg%n)
            </pattern>
        </encoder>
    </appender>

    <!-- 普通应用日志文件输出 -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/app.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 按日期滚动日志文件 -->
            <fileNamePattern>logs/app.%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory> <!-- 保留30天的日志 -->
            <totalSizeCap>1GB</totalSizeCap>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} %highlight(%-5level) %white(-) %-15(%yellow([%10.20thread]))
                %-55(%cyan(%.32logger{30}:%L)) %highlight(- %msg%n)
            </pattern>
        </encoder>
    </appender>


    <!-- 定义全局的日志级别 -->
    <root level="INFO">
        <appender-ref ref="STDOUT"/>
        <appender-ref ref="FILE"/>
    </root>

</configuration>

```

3.调用
```shell
// 注意依赖引入错误会没有效果
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
private static final Logger log = LoggerFactory.getLogger(XXX.class);
```

