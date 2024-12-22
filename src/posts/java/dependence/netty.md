---
title: netty 学习
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
category:
  - dependence

tag:
  - java
  - spring
  - springboot
  - netty

---

netty 学习
<!-- more -->
# netty study


## 基本使用

在使用springboot的情况下，引入依赖

```shell
<dependency>
    <groupId>io.netty</groupId>
    <artifactId>netty-all</artifactId>
</dependency>
```

1.实现 discard 协议。 如 example.netty.discard 中的代码实现。启动它，使用 telnet localhost 8080 连接发送消息。您就可以在服务器看到打印内容。 2.实现 echo 协议。 如
example.netty.echo 中的代码实现（在discard基础上修改）。然后 telnet localhost 8080 连接成功后，发送什么给服务端您都可以在客户端看见 3.实现 time 协议。 如
example.netty.time 中的代码实现（在echo基础上修改）。然后 telnet localhost 8080 连接成功后，控制台有打印，连接立即会断开。

## 不同 handler 的作用

1. LengthFieldBasedFrameDecoder

   作用
    * 解决粘包和拆包问题：
        - 粘包：多个消息被合并成一个大的数据包发送。
        - 拆包：一个完整的消息被拆分成多个小的数据包发送。
    * 基于长度字段解析消息：
        - 通过解析消息中的长度字段，确定每个消息的实际长度，从而正确地分割出一个个完整的消息帧。

2. MessageToMessageCodec<ByteBuf, PacketHeader>

   作用
    * 编码：将 PacketHeader 对象编码为 ByteBuf，以便在网络中传输。
    * 解码：将接收到的 ByteBuf 解码为 PacketHeader 对象，以便应用程序处理。

