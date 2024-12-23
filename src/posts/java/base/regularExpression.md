---
title: java 使用正则表达式
icon: pen-to-square
date: 2024-12-17
lastUpdated: true
category:
  - java
tag:
  - javabase
---

java 正则表达式的基础使用

<!-- more -->



# 1. 概述

## 1.1 Java 正则表达式使用指南

正则表达式（Regular Expression，简称 regex 或 regexp）是用于匹配字符串中字符模式的工具。在 Java 中，正则表达式的支持主要通过 `java.util.regex` 包来提供。此包包含了三个关键类：`Pattern`、`Matcher` 和 `PatternSyntaxException`。

## 1.2 Pattern 类

`Pattern` 类代表一个编译后的正则表达式，并提供了与该模式相匹配的方法。它是一个线程安全的对象，可以被多个 `Matcher` 实例共享以执行匹配操作。

## 1.3 创建 Pattern 对象

要创建一个 `Pattern` 对象，您需要调用它的静态方法 `compile(String regex)`：

```java
Pattern pattern = Pattern.compile("your_regex_here");
```

# 2. Matcher 类

`Matcher` 类是对输入序列进行匹配操作的引擎。`Matcher` 由 `Pattern` 的 `matcher(CharSequence input)` 方法生成：

```java
Matcher matcher = pattern.matcher("input_string_to_match");
```

## 2.1 常用方法



- **find()**：尝试找到下一个子序列，该序列从先前匹配结束的地方开始匹配模式。如果找到了这样的序列，则返回 `true`。
- **matches()**：尝试将整个区域与模式匹配。只有当整个区域都匹配时才返回 `true`。
- **lookingAt()**：尝试将从区域开头开始的前缀与模式匹配。如果找到了这样的前缀，则返回 `true`。
- **replaceAll(String replacement)**：用给定的替换字符串替换所有匹配的部分。
- **replaceFirst(String replacement)**：只替换第一个匹配的部分。

# 3. 示例代码



下面是一些简单的示例，演示了如何使用正则表达式来进行不同的任务。

## 3.1 检查字符串是否为有效的电子邮件地址



```java
String emailRegex = "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$";
Pattern pattern = Pattern.compile(emailRegex);
Matcher matcher = pattern.matcher("example@example.com");
boolean isValidEmail = matcher.matches();
```

## 3.2 提取所有的数字



```java
String content = "The price is 100 dollars and the tax is 5%";
Pattern pattern = Pattern.compile("\\d+");
Matcher matcher = pattern.matcher(content);

while (matcher.find()) {
    System.out.println(matcher.group());
}
```

## 3.3 替换所有非字母字符为空格

```java
String text = "Hello, world! 123";
String cleanedText = text.replaceAll("[^a-zA-Z]", " ");
System.out.println(cleanedText);
```

## 3.4 特殊字符和转义

某些字符在正则表达式中有特殊含义，例如点号 (`.`)、星号 (`*`) 等。如果您想要匹配这些字符本身，您需要对它们进行转义：

```java
String specialCharRegex = "\\."; // 匹配实际的点号
```

## 3.5 分组和捕获

您可以使用圆括号 `()` 来分组和捕获匹配的部分。每个捕获组都有一个索引，从左到右编号，从 1 开始。整个表达式被视为组 0。

```java
String datePattern = "(\\d{4})-(\\d{2})-(\\d{2})"; // 年-月-日格式
Pattern pattern = Pattern.compile(datePattern);
Matcher matcher = pattern.matcher("2023-04-01");

if (matcher.matches()) {
    String year = matcher.group(1);
    String month = matcher.group(2);
    String day = matcher.group(3);
}
```

## 3.6. 总结

正则表达式是非常强大的文本处理工具，但它们可能看起来复杂且难以理解。练习和熟悉常见的正则表达式模式以及如何在 Java 中使用它们将大大提高您的文本处理能力。

# 4. 正则表达式语法指南

正则表达式（Regular Expression，简称 regex 或 regexp）是一种用于描述搜索模式的工具。它们可以用来查找、编辑或操作文本，并广泛应用于各种编程语言中。下面将介绍正则表达式的常见语法元素。

## 4.1 基本字符匹配

- **普通字符**：大多数字符，如字母和数字，直接匹配自身。
    - 示例：`hello` 匹配字符串 `"hello"`

- **特殊字符**：一些字符在正则表达式中有特殊含义，必须转义才能匹配这些字符本身。
    - 示例：`.`、`*`、`+`、`?`、`^`、`$` 等等。要匹配这些字符，需使用反斜杠 `\` 进行转义，例如 `\\.` 匹配实际的点号。

## 4.2 定量符（Quantifiers）

定量符用于指定前面的字符或组应该出现多少次：

- `*`：零次或多次
- `+`：一次或多次
- `?`：零次或一次
- `{n}`：恰好 n 次
- `{n,}`：至少 n 次
- `{n,m}`：至少 n 次但不超过 m 次

## 4.3 字符类（Character Classes）

字符类定义了一组字符中的任何一个都可作为匹配条件：

- `[abc]`：匹配 a 或 b 或 c 中的一个字符
- `[a-z]`：匹配任何小写字母
- `[A-Z]`：匹配任何大写字母
- `[0-9]`：匹配任何数字
- `[^abc]`：匹配除 a、b 和 c 之外的任何字符
- `.`：匹配任意单个字符（除了换行符）

## 4.4 预定义字符类

预定义了一些常用的字符类以简化书写：

- `\\d`：匹配一个数字，等价于 `[0-9]`
- `\\D`：匹配一个非数字字符，等价于 `[^0-9]`
- `\\s`：匹配空白字符（包括空格、制表符、换页符等）
- `\\S`：匹配非空白字符
- `\\w`：匹配单词字符（字母、数字和下划线），等价于 `[a-zA-Z_0-9]`
- `\\W`：匹配非单词字符

## 4.5 锚点（Anchors）

锚点并不匹配实际字符，而是匹配位置：

- `^`：匹配输入字符串的开始处
- `$`：匹配输入字符串的结尾处
- `\\b`：匹配一个单词边界
- `\\B`：匹配非单词边界

## 4.6 分组与捕获（Grouping and Capturing）

圆括号 `()` 可用于分组和创建子表达式：

- `(ab)`：作为一个整体匹配 "ab"
- `(?:ab)`：非捕获分组，只进行分组不捕获
- `(ab|cd)`：匹配 "ab" 或 "cd"

## 4.7 替代（Alternation）

竖线 `|` 用于表示“或”的关系：

- `foo|bar`：匹配 "foo" 或 "bar"

## 4.8 向后引用（Backreferences）

使用反斜杠加上数字来引用之前捕获的组：

- `([abc])\\1`：匹配两个连续相同的字符，比如 "aa"、"bb" 或 "cc"

## 4.9 注释

可以在正则表达式中添加注释，提高可读性：

- `(?#comment)`：此形式的注释不会影响匹配行为

## 4.10 标志（Flags/Modifiers）

某些情况下，您可能想要改变正则表达式的默认行为，这可以通过标志实现：

- `i`：忽略大小写
- `m`：多行模式，改变 `^` 和 `$` 的行为
- `s`：使 `.` 匹配所有字符，包括换行符
- `x`：扩展模式，忽略空白字符并允许注释

# 4.11 示例

以下是一些简单的正则表达式及其解释：

- `\\d{3}-\\d{2}-\\d{4}`：匹配形如 `123-45-6789` 的社会安全号码格式
- `^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$`：匹配电子邮件地址
- `\\b(https?://[^\s]+)\\b`：匹配 URL 地址
- `\\b\\w+\\b`：匹配单词

通过以上基础，您可以构建出复杂的正则表达式来满足特定的需求。对于更复杂的应用，请参考相关文档深入学习。希望这份指南能够帮助您理解正则表达式的语法！

