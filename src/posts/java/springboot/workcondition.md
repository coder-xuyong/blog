---
title: springboot 工作中遇到的问题
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
category:
  - java

tag:
  - java
  - spring
  - springboot

---

上帝赋予java生命，spring赋予java生命的延续
<!-- more -->

# springboot work condition

标签（空格分隔）： springboot

---

## pringboot的yml文件没有小叶子

进入project structure ——》

## Failed to configure a DataSource: ‘url‘ attribute is not specified and no embedded datasource

报错信息如下

```shell
***************************
APPLICATION FAILED TO START
***************************
 
Description:
 
Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured.
 
Reason: Failed to determine a suitable driver class
 
 
Action:
 
Consider the following:
    If you want an embedded database (H2, HSQL or Derby), please put it on the classpath.
    If you have database settings to be loaded from a particular profile you may need to activate it (no profiles are currently active).
```

### 解决一：项目不需要连数据库

启动类加上如下注解

```shell
@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
```

### 解决二：项目需要连接数据库

配置yml文件，eg：

```shell
#在application.properties/或者application.yml文件中没有添加数据库配置信息.
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8&useSSL=false
    username: root
    password: 123456
    driver-class-name: com.mysql.jdbc.Driver
```

### 解决三：mysql版本问题

mysql8以下的去除cj，更高版本的加上cj，eg：`driver-class-name: com.mysql.cj.jdbc.Driver`

### 解决四：项目没有加载到yml或者properties文件

特别是自己的pom打包是jar的项目，请查看自己的pom.xml文件中的packaging

```pom
<packaging>jar</packaging>
```

如果pom中指定使用jar，系统不会自动读取到yml或者properties文件的，需要我们手动配置pom.xml。

```xml
<!--build放在</dependencies>标签的后面，主要加入的是resources标签 -->
<!--resources标签可以告诉系统启动的时候能够读取到这些后缀的文件 -->
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
    <resources>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.yml</include>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>false</filtering>
        </resource>
        <resource>
            <directory>src/main/resources</directory>
            <includes>
                <include>**/*.yml</include>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>false</filtering>
        </resource>
        <resource>
            <directory>lib</directory>
            <includes>
                <include>**/*.jar</include>
            </includes>
        </resource>
    </resources>
</build>
```

### 解决五：项目使用了springcloud+nacos系列

需要配置启用了那个配置文件

### test类dao层注册失败

测试类加上如下代码

```shell
@RunWith(SpringRunner.class)
@SpringBootTest(classes = '启动类'.class)
```

### mybatis debug log startup

```shell
#在properties 文件中添加
logging.level.com.example.datatransport.dao=debug
```

### @Autowired 和 @Resources 的区别

```shell
@Autowired
来源：@Autowired 是Spring框架提供的注解。
工作方式：默认情况下，@Autowired 按照类型（byType）来装配。如果存在多个相同类型的bean，那么Spring会抛出异常，除非其中一个被标记为首选（使用@Primary注解）或通过@Qualifier指定具体的bean名称。
使用场景：适用于需要根据类型匹配bean的情况，当有多个相同类型的bean时，可以结合@Qualifier使用以精确指定要装配的bean。
@Resource
来源：@Resource 是Java标准的一部分，由JSR-250规范定义，因此它不仅可以在Spring环境中使用，也可以在其他支持该规范的容器中使用。
工作方式：默认情况下，@Resource 按照名称（byName）来装配。如果指定了名称，则会按照该名称查找bean；如果没有指定名称，那么会使用字段名作为默认名称来查找bean。如果找不到相应名称的bean，那么会退回到按类型装配。
使用场景：适用于需要根据名称匹配bean的情况，或者希望代码更加独立于特定框架（如Spring），因为它是一个Java标准注解。
总结
如果你的项目严格遵循Spring框架，且主要关注类型安全，那么@Autowired可能是一个更好的选择。
如果你需要跨不同Java容器的兼容性，或者更倾向于基于名称的装配，那么@Resource可能更适合你。
在实际开发中，选择哪个注解取决于项目的具体需求和个人偏好。不过，通常推荐在一个项目中保持一致性，避免混合使用不同的注解风格，以减少潜在的混淆和维护成本。
```

### logback 的使用

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
        <dependency>
            <groupId>org.rxtx</groupId>
            <artifactId>rxtx</artifactId>
            <version>2.1.7</version>
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

### logback-spring 这个只需要 引入lombok的依赖，@Slf4j的注解就能使用
1.引入 lombok 依赖
2.创建logback-spring.xml文件，输入一下内容
```xml
<!-- 级别从高到低 OFF 、 FATAL 、 ERROR 、 WARN 、 INFO 、 DEBUG 、 TRACE 、 ALL -->
<!-- 日志输出规则 根据当前ROOT 级别，日志输出时，级别高于root默认的级别时 会输出 -->
<!-- 以下 每个配置的 filter 是过滤掉输出文件里面，会出现高级别文件，依然出现低级别的日志信息，通过filter 过滤只记录本级别的日志 -->
<!-- scan 当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true。 -->
<!-- scanPeriod 设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒。当scan为true时，此属性生效。默认的时间间隔为1分钟。 -->
<!-- debug 当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。 -->
<configuration scan="true" scanPeriod="60 seconds" debug="false">
    <!-- 动态日志级别 -->
    <!--  <jmxConfigurator/>-->
    <!-- 定义日志文件 输出位置 -->

    <springProperty scope="context" name="logPath" source="logging.file.path" defaultValue="./log"/>
    <property name="log.path" value="${logPath}/log/"/>
    <!-- 日志最大的历史 30天 -->
    <property name="maxHistory" value="10"/>
    <!-- 设置日志输出格式 -->
    <property name="CONSOLE_LOG_PATTERN"
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} [%X{traceId}] %highlight(${LOG_LEVEL_PATTERN:-%5p}) %magenta(${PID:-})  [%yellow(%thread)] [%cyan(%logger{50} - %method:%line)] - %highlight(%msg%n)"/>
    <property name="LOG_PATTERN"
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} [%X{traceId}] ${LOG_LEVEL_PATTERN:-%5p} ${PID:-}  [%thread] [%logger{50} - %method:%line] - %msg%n"/>

    <!-- ConsoleAppender 控制台输出日志 -->
    <appender name="console" class="ch.qos.logback.core.ConsoleAppender">
        <!--此日志appender是为开发使用，只配置最底级别，控制台输出的日志级别是大于或等于此级别的日志信息-->
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>INFO</level>
        </filter>
        <encoder>
            <pattern>${CONSOLE_LOG_PATTERN}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>


    <!-- INFO级别日志 appender -->
    <appender name="INFO" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!--记录的日志文件的路径及文件名-->
        <file>${log.path}/info.log</file>
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>INFO</level>
        </filter>
        <!--日志记录器的滚动策略，按日期，按大小记录-->
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>${log.path}/%d{yyyy-MM,aux}/info.%d{yyyy-MM-dd}.%i.log.zip</fileNamePattern>
            <maxFileSize>100MB</maxFileSize>
            <totalSizeCap>1GB</totalSizeCap>
            <maxHistory>10</maxHistory>
            <cleanHistoryOnStart>true</cleanHistoryOnStart>
        </rollingPolicy>
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!--
      <logger>用来设置某一个包或者具体的某一个类的日志打印级别、
      以及指定<appender>。<logger>仅有一个name属性，
      一个可选的level和一个可选的addtivity属性。
      name:用来指定受此logger约束的某一个包或者具体的某一个类。
      level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF，
            还有一个特俗值INHERITED或者同义词NULL，代表强制执行上级的级别。
            如果未设置此属性，那么当前logger将会继承上级的级别。
      addtivity:是否向上级logger传递打印信息。默认是true。
      <logger name="org.springframework.web" level="info"/>
      <logger name="org.springframework.scheduling.annotation.ScheduledAnnotationBeanPostProcessor" level="INFO"/>
    -->

    <!--
        使用mybatis的时候，sql语句是debug下才会打印，而这里我们只配置了info，所以想要查看sql语句的话，有以下两种操作：
        第一种把<root level="info">改成<root level="DEBUG">这样就会打印sql，不过这样日志那边会出现很多其他消息
        第二种就是单独给dao下目录配置debug模式，代码如下，这样配置sql语句会打印，其他还是正常info级别：
        【logging.level.org.mybatis=debug logging.level.dao=debug】
     -->

    <!--
        root节点是必选节点，用来指定最基础的日志输出级别，只有一个level属性
        level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF，
        不能设置为INHERITED或者同义词NULL。默认是DEBUG
        可以包含零个或多个元素，标识这个appender将会添加到这个logger。
    -->
    <!-- 4  最终的策略：
                     基本策略(root级) + 根据profile在启动时, logger标签中定制化package日志级别(优先级高于上面的root级)-->
    <!-- root级别 DEBUG -->
    <root>
        <!-- 打印debug级别日志及以上级别日志 -->
        <level value="Info"/>
        <!-- 控制台输出 -->
        <appender-ref ref="console"/>
        <!-- 文件输出 -->
        <appender-ref ref="INFO"/>
        <!--    <appender-ref ref="DEBUG"/>-->
        <!--    <appender-ref ref="TRACE"/>-->
    </root>
    <!--  &lt;!&ndash;不同业务打印到指定文件&ndash;&gt;-->
    <!--  <logger name="byte" additivity="false" level="INFO">-->
    <!--    <appender-ref ref="DELETE_INFO"/>-->
    <!--  </logger>-->
    <!--  &lt;!&ndash;  &lt;!&ndash;不同业务打印到指定文件&ndash;&gt;&ndash;&gt;-->
    <!--  &lt;!&ndash; 生产环境, 指定某包日志为warn级 &ndash;&gt;-->
    <!--  <logger name="org.springframework.jdbc.core.JdbcTemplate" level="info"/>-->
    <!-- 特定某个类打印info日志, 比如application启动成功后的提示语 -->
</configuration>
```

3.实际用例：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- 日志级别从低到高分为TRACE < DEBUG < INFO < WARN < ERROR < FATAL，如果设置为WARN，则低于WARN的信息都不会输出 -->
<!-- scan:当此属性设置为true时，配置文档如果发生改变，将会被重新加载，默认值为true -->
<!-- scanPeriod:设置监测配置文档是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒。
                 当scan为true时，此属性生效。默认的时间间隔为1分钟。 -->
<!-- debug:当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。 -->
<configuration  scan="true" scanPeriod="10 seconds">
    <contextName>logback-spring</contextName>

    <!-- name的值是变量的名称，value的值时变量定义的值。通过定义的值会被插入到logger上下文中。定义后，可以使“${}”来使用变量。 -->
    <property name="logging.path" value="./logs" />

    <!--0. 日志格式和颜色渲染 -->
    <!-- 彩色日志依赖的渲染类 -->
    <conversionRule conversionWord="clr" converterClass="org.springframework.boot.logging.logback.ColorConverter" />
    <conversionRule conversionWord="wex" converterClass="org.springframework.boot.logging.logback.WhitespaceThrowableProxyConverter" />
    <conversionRule conversionWord="wEx" converterClass="org.springframework.boot.logging.logback.ExtendedWhitespaceThrowableProxyConverter" />
    <!-- 彩色日志格式 -->
<!--    <property name="CONSOLE_LOG_PATTERN" value="${CONSOLE_LOG_PATTERN:-%clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){faint} %clr(${LOG_LEVEL_PATTERN:-%5p}) %clr(${PID:- }){magenta} %clr(-&#45;&#45;){faint} %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n${LOG_EXCEPTION_CONVERSION_WORD:-%wEx}}"/>-->
    <property name="CONSOLE_LOG_PATTERN"
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} [%X{traceId}] %highlight(${LOG_LEVEL_PATTERN:-%5p}) %magenta(${PID:-})  [%yellow(%thread)] [%cyan(%logger{50} - %method:%line)] - %highlight(%msg%n)"/>
    <property name="LOG_PATTERN"
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} [%X{traceId}] ${LOG_LEVEL_PATTERN:-%5p} ${PID:-}  [%thread] [%logger{50} - %method:%line] - %msg%n"/>

    <!--1. 输出到控制台-->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <!--此日志appender是为开发使用，只配置最底级别，控制台输出的日志级别是大于或等于此级别的日志信息-->
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>debug</level>
        </filter>
        <encoder>
            <Pattern>${CONSOLE_LOG_PATTERN}</Pattern>
            <!-- 设置字符集 -->
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!--2. 输出到文档-->
    <!-- 2.1 level为 DEBUG 日志，时间滚动输出  -->
    <appender name="DEBUG_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文档的路径及文档名 -->
        <file>${logging.path}/web_debug.log</file>
        <!--日志文档输出格式-->
        <encoder>
            <Pattern>${CONSOLE_LOG_PATTERN}</Pattern>
            <charset>UTF-8</charset> <!-- 设置字符集 -->
        </encoder>
        <!-- 日志记录器的滚动策略，按日期，按大小记录 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 日志归档 -->
            <fileNamePattern>${logging.path}/web-debug-%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>100MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <!--日志文档保留天数-->
            <maxHistory>15</maxHistory>
        </rollingPolicy>
        <!-- 此日志文档只记录debug级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>debug</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

    <!-- 2.2 level为 INFO 日志，时间滚动输出  -->
    <appender name="INFO_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文档的路径及文档名 -->
        <file>${logging.path}/web_info.log</file>
        <!--日志文档输出格式-->
        <encoder>
            <Pattern>${LOG_PATTERN}</Pattern>
            <charset>UTF-8</charset>
        </encoder>
        <!-- 日志记录器的滚动策略，按日期，按大小记录 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 每天日志归档路径以及格式 -->
            <fileNamePattern>${logging.path}/web-info-%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>100MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <!--日志文档保留天数-->
            <maxHistory>15</maxHistory>
        </rollingPolicy>
        <!-- 此日志文档只记录info级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>info</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

    <!-- 2.3 level为 WARN 日志，时间滚动输出  -->
    <appender name="WARN_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文档的路径及文档名 -->
        <file>${logging.path}/web_warn.log</file>
        <!--日志文档输出格式-->
        <encoder>
            <Pattern>${LOG_PATTERN}</Pattern>
            <charset>UTF-8</charset> <!-- 此处设置字符集 -->
        </encoder>
        <!-- 日志记录器的滚动策略，按日期，按大小记录 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${logging.path}/web-warn-%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>100MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <!--日志文档保留天数-->
            <maxHistory>15</maxHistory>
        </rollingPolicy>
        <!-- 此日志文档只记录warn级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>warn</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

    <!-- 2.4 level为 ERROR 日志，时间滚动输出  -->
    <appender name="ERROR_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文档的路径及文档名 -->
        <file>${logging.path}/web_error.log</file>
        <!--日志文档输出格式-->
        <encoder>
            <Pattern>${LOG_PATTERN}</Pattern>
            <charset>UTF-8</charset> <!-- 此处设置字符集 -->
        </encoder>
        <!-- 日志记录器的滚动策略，按日期，按大小记录 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${logging.path}/web-error-%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>100MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <!--日志文档保留天数-->
            <maxHistory>15</maxHistory>
        </rollingPolicy>
        <!-- 此日志文档只记录ERROR级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>ERROR</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

    <!--
        <logger>用来设置某一个包或者具体的某一个类的日志打印级别、
        以及指定<appender>。<logger>仅有一个name属性，
        一个可选的level和一个可选的addtivity属性。
        name:用来指定受此logger约束的某一个包或者具体的某一个类。
        level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF，
              还有一个特俗值INHERITED或者同义词NULL，代表强制执行上级的级别。
              如果未设置此属性，那么当前logger将会继承上级的级别。
        addtivity:是否向上级logger传递打印信息。默认是true。
        <logger name="org.springframework.web" level="info"/>
        <logger name="org.springframework.scheduling.annotation.ScheduledAnnotationBeanPostProcessor" level="INFO"/>
    -->

    <!--
        使用mybatis的时候，sql语句是debug下才会打印，而这里我们只配置了info，所以想要查看sql语句的话，有以下两种操作：
        第一种把<root level="info">改成<root level="DEBUG">这样就会打印sql，不过这样日志那边会出现很多其他消息
        第二种就是单独给dao下目录配置debug模式，代码如下，这样配置sql语句会打印，其他还是正常info级别：
        【logging.level.org.mybatis=debug logging.level.dao=debug】
     -->

    <!--
        root节点是必选节点，用来指定最基础的日志输出级别，只有一个level属性
        level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF，
        不能设置为INHERITED或者同义词NULL。默认是DEBUG
        可以包含零个或多个元素，标识这个appender将会添加到这个logger。
    -->
    <!--过滤掉spring和mybatis的一些无用的DEBUG信息-->
    <logger name="org.springframework" level="INFO"></logger>
    <logger name="org.mybatis" level="INFO"></logger>
    <logger name="org.apache.zookeeper" level="INFO"></logger>

    <!-- 4. 最终的策略 -->
    <!-- 4.1 开发环境:打印控制台-->
    <springProfile name="dev">
        <logger name="com.example.datatransport" level="debug"/><!-- 修改此处扫描包名 -->
    </springProfile>

    <root level="info">
        <appender-ref ref="CONSOLE" />
        <appender-ref ref="DEBUG_FILE" />
        <appender-ref ref="INFO_FILE" />
        <appender-ref ref="WARN_FILE" />
        <appender-ref ref="ERROR_FILE" />
    </root>

<!--    4.2 生产环境:输出到文档-->
    <springProfile name="pro">
        <root level="info">
            <appender-ref ref="CONSOLE" />
            <appender-ref ref="DEBUG_FILE" />
<!--            <appender-ref ref="INFO_FILE" />-->
            <appender-ref ref="ERROR_FILE" />
            <appender-ref ref="WARN_FILE" />
        </root>
    </springProfile>
</configuration>

```
### springboot 启动后 立即执行
1.必须的spring托管，没有则添加@Component，然后 implements CommandLineRunner 接口 重写 run 方法既可

2.在 Spring Boot 应用程序中，ApplicationRunner 是一个接口，用于在应用程序启动完成后执行一些初始化任务。它提供了一个 run 方法，该方法在 SpringApplication.run 方法执行完毕后被调用。ApplicationRunner 接口的主要作用是在应用程序启动时执行一些自定义的逻辑。

上述两个的区别为：
ApplicationRunner：提供了 ApplicationArguments 对象，可以更方便地访问命令行参数。
CommandLineRunner：提供了 String[] 数组，包含所有的命令行参数。


## 注解 @ConditionalOnProperty

作用 @ConditionalOnProperty 注解的主要作用是：

* 根据配置属性的存在与否：如果配置属性存在，则加载相应的 Bean 或配置类。
* 根据配置属性的值：如果配置属性的值符合预期，则加载相应的 Bean 或配置类。

eg:@ConditionalOnProperty(name = "cs2290.version", havingValue = "1")



## springboot jar端口号指定失效
原因：没有引入springboot的web依赖

eg：
```xml
 <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
 </dependency>
```

## @ConfigurationProperties 注解
mark from : https://cloud.tencent.com/developer/article/2443870
### 前言
在Spring Boot框架中，@ConfigurationProperties注解提供了一种将外部配置（如application.properties或application.yml文件中的属性）绑定到Java对象的便捷方式。这种机制简化了配置管理，使得配置的变更更加灵活和动态。
### 概述
@ConfigurationProperties注解用于将配置文件中的属性绑定到一个组件的Bean上。它通常与@Component、@Service或@Configuration注解一起使用，以创建一个持有配置属性的Bean。
### 源码解析
@ConfigurationProperties注解的实现依赖于Spring Boot的ConfigurationPropertiesBindingPostProcessor后处理器。该后处理器在容器启动时扫描带有@ConfigurationProperties注解的Bean，并自动将配置属性绑定到Bean的字段上。
### 案例分析
假设我们的应用需要连接到数据库，我们可以在application.properties中设置数据库连接属性，并使用@ConfigurationProperties注解将这些属性绑定到一个配置类：
application.properties
```properties
# application.properties
database.url=jdbc:mysql://localhost:3306/mydb
database.username=root
database.password=secret
```
DatabaseProperties类
```java
@Component
@ConfigurationProperties(prefix = "database")
public class DatabaseProperties {
    private String url;
    private String username;
    private String password;

    // getters and setters
}
```
1.@Component注解：DatabaseProperties类通过@Component注解被标记为一个Spring管理的组件，这意味着Spring容器会将其作为一个Bean进行管理。
2.@ConfigurationProperties注解：@ConfigurationProperties注解用于将外部配置文件中的属性绑定到这个类的字段上。prefix = "database"属性指定了配置文件中相关属性的前缀，这样Spring就会自动查找以database开头的属性，并将它们映射到这个类的相应字段。
3.字段定义：类中定义了三个私有字段url、username和password，这些字段将被用于存储配置文件中的值。
4.Getters和Setters：虽然代码中没有显示，但是通常这些字段会有对应的公共getter和setter方法。这是JavaBean的标准实践，使得字段可以通过getter方法读取和通过setter方法修改。
绑定过程
当Spring容器启动时，它会查找带有@ConfigurationProperties注解的Bean，并尝试将配置文件中定义的属性绑定到这些Bean的字段上。在这个例子中，database.url、database.username和database.password将分别绑定到DatabaseProperties类的url、username和password字段。

注意：
1.java里面的大小写对应properties里面的“-”，eg：orderId -> order-id

### 使用DatabaseProperties
一旦DatabaseProperties Bean被创建并填充了配置值，你可以在应用程序的其他部分通过依赖注入使用这个Bean，例如在数据访问对象（DAO）或服务层中使用数据库连接信息。
eg:
```java
@Service
public class MyService {
    private final DatabaseProperties databaseProperties;

    @Autowired
    public MyService(DatabaseProperties databaseProperties) {
        this.databaseProperties = databaseProperties;
    }

    public void performDatabaseOperation() {
        // 使用 databaseProperties.getUrl(), databaseProperties.getUsername(), databaseProperties.getPassword()
    }
}
```
在这个服务层的例子中，MyService通过构造函数注入了DatabaseProperties Bean，并可以在其方法中使用数据库连接信息。

注意事项
* 确保application.properties文件位于Spring Boot应用程序的src/main/resources目录下，或者Spring应用程序的类路径下的/config包中。
* 属性名称必须遵循Spring的绑定规则，即字段名称和属性名称之间需要保持一致性（考虑下划线和驼峰命名的转换）。
* 使用@ConfigurationProperties注解的类应该被标记为@Component，以便Spring容器可以自动检测并注册它。
### 应用场景案例
在微服务架构中，服务间的配置可能需要动态调整，如服务的端口号、连接的数据库等。使用@ConfigurationProperties可以轻松实现这些配置的动态绑定和更新。

优缺点分析
优点：

* 解耦：将配置属性与业务逻辑解耦，提高代码的可维护性。
* 灵活性：支持配置的动态更新，便于适应不同的部署环境。
缺点：

* 复杂性：对于复杂的配置结构，可能需要额外的处理逻辑。
* 性能考虑：在某些情况下，频繁的配置更新可能会带来性能开销。

### 核心类方法介绍
@ConfigurationProperties注解的核心属性是prefix，它定义了配置文件中相关属性的前缀。此外，@PropertySource注解可以用于指定配置文件的位置。

### 测试用例
以下是一个简单的测试用例，演示如何使用@ConfigurationProperties注解：
```java
public class ConfigPropertiesDemo {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
        context.register(ConfigApp.class);
        context.refresh();

        DatabaseProperties dbProps = context.getBean(DatabaseProperties.class);
        System.out.println("Database URL: " + dbProps.getUrl());
    }
}

@Configuration
@PropertySource("classpath:db.properties")
public class ConfigApp {
    @Bean
    @ConfigurationProperties(prefix = "database")
    public DatabaseProperties databaseProperties() {
        return new DatabaseProperties();
    }
}

@Component
@ConfigurationProperties(prefix = "database")
public class DatabaseProperties {
    private String url;
    private String username;
    private String password;

    // getters and setters
}
```

针对如上示例代码，这里我给大家详细的代码剖析下，以便于帮助大家理解的更为透彻，帮助大家早日掌握。

这段代码演示了如何在Spring应用程序中使用@ConfigurationProperties注解和@PropertySource注解来加载外部配置文件，并将其属性绑定到一个组件的字段上。以下是对代码的详细解释和分析：

### ConfigPropertiesDemo类
1.创建AnnotationConfigApplicationContext实例：创建了一个AnnotationConfigApplicationContext实例，它将被用来管理Spring的Bean。

2.注册ConfigApp配置类：通过context.register(ConfigApp.class)将ConfigApp类注册到Spring容器中。ConfigApp类使用@Configuration注解标记，表明它是一个配置类。

3.刷新容器：调用context.refresh()方法初始化Spring容器，这会触发Bean的创建、依赖注入、执行@PostConstruct注解的方法等。

4.获取DatabaseProperties Bean：通过context.getBean(DatabaseProperties.class)获取DatabaseProperties类型的Bean，并打印其URL属性。

### ConfigApp类
1.@Configuration注解：ConfigApp类通过@Configuration注解标记，表明它是一个配置类，可以定义Bean和导入其他配置。

2.@PropertySource注解：@PropertySource("classpath:db.properties")注解指定了外部配置文件的路径。这里假设db.properties文件位于类路径下。

3.数据库属性Bean：定义了一个databaseProperties Bean，使用@ConfigurationProperties(prefix = "database")注解，将外部配置文件中以database为前缀的属性绑定到DatabaseProperties类的字段上。

### DatabaseProperties类
1.@Component注解：DatabaseProperties类通过@Component注解标记，表明它是一个Spring管理的组件。

2.@ConfigurationProperties注解：@ConfigurationProperties(prefix = "database")注解用于将外部配置文件中的属性绑定到这个类的字段上。prefix = "database"属性指定了配置文件中相关属性的前缀。

3.字段定义：类中定义了三个私有字段url、username和password，这些字段将被用于存储配置文件中的值。

4.Getters和Setters：虽然代码中没有显示，但通常这些字段会有对应的公共getter和setter方法，这是JavaBean的标准实践。

### 注意事项
确保db.properties文件位于类路径下，例如src/main/resources目录。
属性名称必须遵循Spring的绑定规则，即字段名称和属性名称之间需要保持一致性（考虑下划线和驼峰命名的转换）。
使用@ConfigurationProperties注解的类应该被标记为@Component，以便Spring容器可以自动检测并注册它。

### 扩展
在实际开发中，你可能还需要添加异常处理逻辑，以处理配置文件加载或属性绑定过程中可能出现的任何问题。此外，对于更复杂的应用程序，可能需要配置更多的Spring组件，如数据源、事务管理器等。

通过这种方式，开发者可以清晰地组织代码，提高代码的可维护性和可测试性。

### 小结
@ConfigurationProperties注解是Spring Boot中用于简化配置管理的强大工具。通过本文的学习，我们了解到如何使用@ConfigurationProperties注解来绑定配置文件中的属性到Java对象，并探讨了其在实际开发中的应用。

### 总结
@ConfigurationProperties注解是Spring Boot配置管理的关键工具之一。它通过提供一种声明式的方式来绑定配置属性，极大地简化了配置的管理和使用。开发者在使用时需要注意配置结构的复杂性，并根据实际需求合理使用。通过本文的深入分析和实践，我们希望能够帮助开发者更好地利用@ConfigurationProperties，构建灵活、可维护的Spring Boot应用程序。