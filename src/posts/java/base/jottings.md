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
一个byte由8个二进制位构成1个字节,即1Byte=8Bit
其中左边是高位，右边是低位。
high_four = (byte & 0xf0) >> 4;  (0xf0=11110000)
low_four = byte & 0x0f;   (0x0f=00001111)
0&1=0,1&1=1。所以byte&0x0f就是byte&00001111。不管byte的高四位是多少，&上0x0f的高四位(0000)之后，都是0。不管
byte的低四位是多少，&上0x0f的低四位(1111)之后，都会保存原值。

比如byte是11010111。byte的高四位是1101。&上0x0f的高四位0000之后，得到的值是0000。因为1&0=0,0&0也等于0。
byte的低四位是0111。&上0x0f的低四位1111之后，得到的值是0111。也就是原来的值。所以11010111&0x0f就是00000111。也就是把byte
的高四位变成0，低四位保持原值。所以取低四位的值就是byte&0x0f。
要取得byte的高四位。就是byte & 0xf0也就是11010111&11110000=11010000。然后再右移四位。变成1101。