---
title: java 零碎知识点
icon: pen-to-square
date: 2023-06-04
lastUpdated: true
order: 1
category:
  - java
tag:
  - javabase
---

java 零碎知识点记录

<!-- more -->

## 去除科学计数法
将其转为大精度直接输出
首先，需要将科学计数法转换成一下：
例如：
BigDecimal bd = new BigDecimal("3.40256010353E11");
然后转换成字符串：
String str = bd.toPlainString();
如果这个数字的长度是在int的范围内的话，是可以转换成int类型：
int a = Integer.parsInt(str);
如果这个数字的长度不是在Int范围内的话，得到的就不是你想要的数字了！换其他类型

```java
BigDecimal bg=new BigDecimal(val+"");//去除科学计数法
```

## 时间戳转为日期格式

```java
 public static String timeStamp2Date(String time) {
        Long timeLong = Long.parseLong(time);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//要转换的时间格式
        Date date;
        try {
        date = sdf.parse(sdf.format(timeLong));
        return sdf.format(date);
        } catch (ParseException e) {
        e.printStackTrace();
        return null;
        }
}
```



## 判断一个字符串是否能转为数字
isNumeric方法

## Byte 高位/低位（大端格式/小端格式）
高位/低位（大端格式/小端格式）指的是多字节数据类型在计算机内存中的存储顺序。不同的计算机架构可能采用不同的字节序，这主要取决于硬件设计和所使用的处理器类型。

### 大端格式（Big-Endian）

在大端格式中，最高位字节（最左边的字节或最重要的字节）存储在最低地址处，而最低位字节（最右边的字节或最不重要的字节）存储在最高地址处。这种排序与人类阅读多位数的习惯相同，从左到右依次是最高位到最低位。例如：

如果有一个16位的整数0x1234，在大端格式机器上它会被存储为：
```
Memory Address:  0x00    0x01
Contents:        0x12    0x34
```

### 小端格式（Little-Endian）

在小端格式中，最低位字节存储在最低地址处，而最高位字节存储在最高地址处。也就是说，字节被“倒置”地存储。这种格式对于某些处理器架构来说更高效。例如：

同样的16位整数0x1234，在小端格式机器上它会被存储为：
```
Memory Address:  0x00    0x01
Contents:        0x34    0x12
```

### 网络字节序

网络上的通信通常使用大端格式作为标准，称为网络字节序。这意味着在网络编程中，发送方需要将本地的小端格式转换为大端格式，接收方则需要将接收到的大端格式转换回自己的本地格式。为此，许多编程语言提供了专门的函数来处理这样的转换，比如C语言中的`htonl()`、`htons()`、`ntohl()`和`ntohs()`等。

了解你的系统是大端还是小端很重要，特别是在进行跨平台开发或者直接操作二进制数据时。如果你不确定系统的字节序，可以通过编写一个简单的程序来检测，例如创建一个多字节数并检查其内存表示。
