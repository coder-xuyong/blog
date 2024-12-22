---
title: spring面试题
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
# spring面试题

标签（空格分隔）： spring

---

## IoC 和 DI 的关系？
首先，先回答IoC和DI的是什么：
* IoC： Inversion of Control，控制反转，将Bean的创建权由原来程序反转给第三方
* DI：Dependency Injection，依赖注入，某个Bean的完整创建依赖于其他Bean（或普通参数）的注入

其次，在回答IoC和DI的关系：
* 第一种观点：IoC强调的是Bean创建权的反转，而DI强调的是Bean的依赖关系，认为不是一回事
* 第二种观点：IoC强调的是Bean创建权的反转，而DI强调的是通过注入的方式反转Bean的创建权，认为DI是IoC的其中一种实现方式


