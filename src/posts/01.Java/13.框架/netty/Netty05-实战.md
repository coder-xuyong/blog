---
title: Netty05-实战
date: 2025-02-21
lastUpdated: true
isOrigin: true
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
category:
  - java
  - Framework

tag:
  - nio
  - netty

order: 5
star: true
permalinkPattern: :year/:month/:day/:slug.html
---

# 源代码

https://github.com/coder-xuyong/netty

## 基础 Server 
```java
private final ServerBootstrap serverBootstrap = new ServerBootstrap();
private final EventLoopGroup bossGroup = new NioEventLoopGroup(1);
private final EventLoopGroup workerGroup = new NioEventLoopGroup(2);
public NettyServer() {
    serverBootstrap
            .group(bossGroup, workerGroup)
            .channel(NioServerSocketChannel.class)
            .childHandler(new ChannelInitializer<NioSocketChannel>() {
                @Override
                protected void initChannel(NioSocketChannel ch) {
                    ch.pipeline().addLast(new StringDecoder());
                }
            });
}

public void start(int port) {
    ChannelFuture channelFuture = serverBootstrap.bind(port);
    channelFuture.addListener(future -> {
        if (future.isSuccess()) {
            log.info("端口[{}]绑定成功", port);
        } else {
            log.error("端口[{}]绑定异常!", port);
        }
    });
    try {
        // 阻塞在此处，直到绑定端口完成
        channelFuture.sync();
    } catch (InterruptedException e) {
        log.error(e.getMessage());
        e.printStackTrace();
    }
}
```
