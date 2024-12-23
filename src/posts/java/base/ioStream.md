---
title: io 流的基本使用
icon: pen-to-square
date: 2023-06-05
lastUpdated: true
category:
  - java
tag:
  - java-basic
---

IO 流的一些基本使用，后续记得完善

<!-- more -->

程序 通过 ByteArrayInputStream 读取 ByteArray
程序 通过 ByteArrayOutputStream 写入 ByteArray

```java
byte[] bb = new byte[]{49,50,51};
InputStream in = new ByteArrayInputStream(bb);
DataInputStream dis = new DataInputStream(in);
```
## InputStream ,ByteArrayInputStream

## DataInputStream