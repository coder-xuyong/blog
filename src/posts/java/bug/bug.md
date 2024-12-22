---
title: java bug 合集
icon: pen-to-square
date: 2023-06-05
lastUpdated: true
category:
  - java
tag:
  - bug
---

记录遇见的 Java 相关疑难杂症的 bug

<!-- more -->



## 解決BufferedReader读取中文乱码问题
```java
InputStream in=new FileInputStream("D:\\temp\\user2.txt");
System.out.println(stream2String(in));

//stream2String方法的主要代码:

sb = new StringBuffer();
//bfReader = new BufferedReader(new InputStreamReader(in));  //会出乱码
bfReader = new BufferedReader(new InputStreamReader(in, "UTF-8"));

String line = bfReader.readLine();
```
