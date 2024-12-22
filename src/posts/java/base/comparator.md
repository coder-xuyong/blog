---
title: comparator 基本使用
icon: pen-to-square
date: 2024-12-17
lastUpdated: true
category:
  - java
tag:
  - javabase
---

Comparator 的一些基本使用

<!-- more -->

# 1. Java Comparator 使用指南

`Comparator` 是 Java 中用于定义对象比较规则的接口，它允许您根据自定义逻辑对对象进行排序。这对于实现复杂或特定的排序需求非常有用。下面将详细介绍 `Comparator` 的使用方法。

# 2. Comparator 接口概述

`Comparator` 接口包含以下两个主要方法：

- **`int compare(T o1, T o2)`**：比较两个对象 `o1` 和 `o2`。如果 `o1` 小于 `o2` 返回负数；如果 `o1` 等于 `o2` 返回 0；如果 `o1` 大于 `o2` 返回正数。
- **`boolean equals(Object obj)`**：指示某个其他对象是否等于此 `Comparator`。通常情况下不需要重写此方法，除非有特殊需求。

# 3. 创建和使用 Comparator

## 3.1 实现 Comparator 接口

您可以创建一个实现了 `Comparator` 接口的类，并在其中定义 `compare` 方法来指定排序逻辑。

```java
import java.util.Comparator;

class AgeComparator implements Comparator<Person> {
    @Override
    public int compare(Person p1, Person p2) {
        return Integer.compare(p1.getAge(), p2.getAge());
    }
}
```

## 3.2 匿名内部类

如果您只需要一次性的比较器，可以使用匿名内部类。

```java
List<Person> people = Arrays.asList(new Person("Alice", 30), new Person("Bob", 25));
people.sort(new Comparator<Person>() {
    @Override
    public int compare(Person p1, Person p2) {
        return p1.getName().compareTo(p2.getName());
    }
});
```

## 3.3 Lambda 表达式

从 Java 8 开始，由于 `Comparator` 是一个函数式接口，因此可以直接使用 Lambda 表达式简化代码。

```java
people.sort((p1, p2) -> p1.getName().compareTo(p2.getName()));
// 或者更简洁的形式
people.sort(Comparator.comparing(Person::getName));
```

## 3.4 链接多个 Comparator

有时候需要根据多个属性进行排序，这时可以链接多个 `Comparator`。

```java
people.sort(Comparator.comparing(Person::getAge).thenComparing(Person::getName));
```

## 3.5 Comparator 工具方法

Java 8 引入了多个静态方法，使 `Comparator` 更加易用：

- **`Comparator.comparing(Function<? super T, ? extends U> keyExtractor)`**：基于提供的键提取函数创建比较器。
- **`Comparator.thenComparing()`**：链接另一个比较器以处理当主比较器结果相等时的情况。
- **`Comparator.reversed()`**：返回当前比较器的反转版本。
- **`Comparator.nullsFirst(Comparator<? super T> comparator)` 和 `Comparator.nullsLast(Comparator<? super T> comparator)`**：控制 `null` 值的排序位置。

# 4. 示例代码

假设我们有一个 `Person` 类，想要根据年龄和名字对 `Person` 对象列表进行排序。

```java
import java.util.*;

class Person {
    private String name;
    private int age;

    // 构造函数、getter 和 setter 方法省略

    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Alice", 30),
            new Person("Bob", 25),
            new Person("Charlie", 35)
        );

        // 按年龄升序排序，若年龄相同则按名字排序
        people.sort(Comparator.comparingInt(Person::getAge).thenComparing(Person::getName));

        // 输出排序后的列表
        people.forEach(person -> System.out.println(person.getName() + " (" + person.getAge() + ")"));
    }
}
```

# 5. 总结

`Comparator` 接口提供了极大的灵活性，使得我们可以按照自己的业务逻辑对对象进行排序。通过结合 Java 8 引入的新特性如 Lambda 表达式和流 API，编写简洁且高效的排序逻辑变得轻而易举。

希望这份简短的指南能够帮助您开始使用 Java 中的 `Comparator`。对于更复杂的案例或特定需求，请参考官方文档和其他资源深入学习。

