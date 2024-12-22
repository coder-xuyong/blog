---
title: java8 stream
icon: pen-to-square
date: 2023-06-03
lastUpdated: true
category:
  - java
tag:
  - javabase
---

java8 stream 梳理

<!-- more -->

# stream流

标签（空格分隔）： java

---
## 00.不可变集合

**创建不可变集合的应用场景**

* 如果某个数据不能被修改，把它防御性地拷贝到不可变集合中是很好的实践。
* 当集合对象被不可信的库调用时，不可变形式是安全的。

**简单理解：不想让别人修改集合中的内容。**



创建不可变集合的书写格式。

在List、Set、Map结构中，都存在静态的of方法，可以获取一个不可变的集合。

注意的是，这个集合不能添加，不能删除，不能修改。

```java
// 创建不可变的list集合，只能进行查询操作，这是要jdk9
List.of("1","2","3");
Set.of(……);
//Map的of方法，参数有上限，最多20个，就是10个键值对。
//因为of方法没有可变参数的设置。key不能重复。
//专属ofEntries()方法。超过10个键值对使用。
//更简单的还是 copyOf，要jdk10.
Map.of("key1","val1","key2","val2");
```



创建集合添加元素，完成以下需求:
1.把所有以“张”开头的元素存储到新集合中
2.把“张”开头的，长度为3的元素再存储到新集合中
3.遍历打印最终结果

```java
ArrayListcstring> list1 = new ArrayList<>(];
list1.add("张无忌");
list1.add("周芷若");
list1.add("赵敏");
list1.add("张濒");
listl.add("张三丰");
list1.stream().filter(name->name.startsWith("张")).filter(name->name.length()== 3).forEach(name -> System.out.println(name));

```



## 01.Stream流的思想和获取Stream流

类似工厂加工流水线……加工数据。

利用Stream流中的API操作，其中API可以分为中间方法，和终结方法。

结合了Lambda表达式，简化集合、数组的操作。

| 获取方式     | 方法名                                        | 说明                     |
| ------------ | --------------------------------------------- | ------------------------ |
| 单列集合     | `<code>default Stream<E> stream()            </code>`        | Collection中的默认方法   |
| 双列集合     | 无                                            | 无法直接使用stream流     |
| 数组         | `<code>public static <T> Stream<T> stream(T[] array) </code>`| Arrays工具类中的静态方法 |
| 一堆零散数据 |`<code> public static<T> Stream<T> of(T...values)   </code>`  | Stream接口中的静态方法   |

* 单列集合获取stream流

```java
//1.单列集合获取stream流
ArrayList<String> list = new ArrayList<>();
Collections.addAll(list,  "a","b", "c", "d", "e");//获取到一条流水线，并把集合中的数据放到流水线上
List<String> list = new ArrayList<>();
list.stream().forEach(s-> System.out.println(s));
```

* 双列集合获取stream流 

```java
//1.创建双列集合
HashMap<String, Integer> hm = new HashMap<>();//2.添加数据
hm.put("aaa", 111);
hm.put("b66", 222);
hm.put("ccc", 333);
hm.put("ddd", 444);
//3.第一种获收stream流
//hm.keySet().stream().forEach(s -> System.out.println(s));
//4.第二种获取stream流
hm.entrySet().stream().forEach(s -> System.out.println(s));
```

* 数组获取Stream流

```java
//1.创建数组
int[] arr1 = {1,2,3,4,5,6,7,8,9,103};String[] arr2 = {"a","b","c"};
//2.获取stream流
Arrays.stream(arr1).forEach(s-> System.out.println(s));
System.out.println("=================");
Arrays.stream(arr2).forEach(s-> System.out.println(s));
```

* 一堆零散数据获取Stream流，类型必须相同。

```java
//注意:
//stream接口中静态方法of的细节
//方法的形参是一个可变参数，可以传递一堆零散的数据，也可以传递数组
//但是数组必须是引用数据类型的，如果传递基本数据类型，是会把整个数组当做一个元素，放到Stream当中。
Stream.of(1,2,3,4,5).forEach(s-> System.out.println(s));
Stream.of(" ","b","c","d","e").forEach(s-> System.out.println(s));
```



## 02.Stream流的中间方法

| API名称                                          | 功能说明                               |
| ------------------------------------------------ | -------------------------------------- |
| `<code>Stream<T> filter(Predicate<? super T> predicate)</code> `| 过滤                                   |
| `<code>Stream<T> map(Function<T,R> mapper)   </code>           `| 转换流中的数据类型                     |
| `<code>Stream<T> limit(long maxSize)         </code>           `| 获取前几个元素                         |
| `<code>Stream<T> skip(long n)            </code>               `| 跳过前几个元素                         |
| `<code>static <T> Stream<T> concat(Stream a,Stream b)</code>   `| 合并a和b两个流为一个流                 |
| `<code>Stream<T> distinct()           </code>                  `| 元素去重，依赖（hashCode和equals方法） |

注意1:中间方法，返回新的Stream流，原来的Stream流只能使用一次，建议使用链式编程

注意2:修改Stream流中的数据，不会影响原来集合或者数组中的数据

* map训练

```java
ArrayList<String> list = new ArrayList<>();
Collections.addAll(list,"水品-15","花养-14","赵镇-13","张-20","张二卡-100","张柴山-40","张良-35","王二嘛子-2");
//需求:只获取里面的年龄并进行打印
//String->int
//第一个类型：流中原本你的数据类型
//第二个类型：要转成之后的类型。

//apply的形参s：依次表示流里面的每一个数据
//返回值：表示转换之后的数据

//当map方法执行完毕之后，流上的数据就变成了整数。
//所以在下面的forEach当中，s一次表示流里面的每一个数据，这个数据现在就是整数了。
list.stream().map(new Function<String, Integer>(){
    @Override
    public Integer apply(String s) {
        String[] arr = s.split("-");
        String ageString = arr[1];
        int age = Integer.parseInt(ageString);
        return age;
    }
}).forEach(s-> System.out.println(s));

//Lambda表达式写法
list.stream().map(s -> Integer.parseInt(s.split("-")[1])).forEach(s -> System.out.println(s));
```





## 03.Stream流的终结方法



| API名称                       | 说明                       |
| ----------------------------- | -------------------------- |
| void forEach(Consumer action) | 遍历                       |
| long count()                  | 统计                       |
| toArray()                     | 收集流中的数据，放到数组中 |
| collect(Collector collector)  | 收集流中的数据，放到集合中 |



* toArray

```java
ArrayList<String> list = new ArrayList<>();
Collections.addAll(list, "水品-15", "花养-14", "赵镇-13", "张-20", "张二卡-100", "张柴山-40", "张良-35", "王二嘛子-2");
// toArray()
// 收集流中的数据，放到数组中
//Object[] arr1 = list.stream().toArray();//system.out.printIn(Arrays .tostring(arr1));
//IntFunction的泛型:具体类型的数组
//apply的形参:流中数据的个数，要跟数组的长度保持一致
//apply的返回值:具体类型的数组
//方法体:就是创建数组
//toArray方法的参数的作用: 负责创建一个指定类型的数组
// toArray方法的底层，会依次得到流里面的每一个数据，并把数据放到数组当中
// toArray方法的返回值: 是一个装着流里面所有数据的致组
String[] arr = list.stream().toArray(new IntFunction<String[]>() {
    @Override
    public String[] apply(int value) {
        return new String[value];
    }
});

//Lambda 表达式写法
String[] arr2 = list.stream().toArray(value -> new String[value]);
System.out.println(Arrays.toString(arr2));
```

* collect

```java
```





## 0.前置

看题：从给定句子中返回单词长度大于5的单词列表，按长度倒序输出，最多返回3个
不用steam流的写法：
```java
/**
 * 【常规方式】
 * 从给定句子中返回单词长度大于5的单词列表，按长度倒序输出，最多返回3个
 *
 * @param sentence 给定的句子，约定非空，且单词之间仅由一个空格分隔
 * @return 倒序输出符合条件的单词列表
 */
public List<String> sortGetTop3LongWords(@NotNull String sentence) {
    // 先切割句子，获取具体的单词信息
    String[] words = sentence.split(" ");
    List<String> wordList = new ArrayList<>();
    // 循环判断单词的长度，先过滤出符合长度要求的单词
    for (String word : words) {
        if (word.length() > 5) {
            wordList.add(word);
        }
    }
    // 对符合条件的列表按照长度进行排序
    wordList.sort((o1, o2) -> o2.length() - o1.length());
    // 判断list结果长度，如果大于3则截取前三个数据的子list返回
    if (wordList.size() > 3) {
        wordList = wordList.subList(0, 3);
    }
    return wordList;
}
```
借住jdk8之后的steam流会更优雅：
```java

/**
 * 【Stream方式】
 * 从给定句子中返回单词长度大于5的单词列表，按长度倒序输出，最多返回3个
 *
 * @param sentence 给定的句子，约定非空，且单词之间仅由一个空格分隔
 * @return 倒序输出符合条件的单词列表
 */
public List<String> sortGetTop3LongWordsByStream(@NotNull String sentence) {
    return Arrays.stream(sentence.split(" "))
            .filter(word -> word.length() > 5)
            .sorted((o1, o2) -> o2.length() - o1.length())
            .limit(3)
            .collect(Collectors.toList());
}
```
## 1.Stream初相识
概括讲，可以将Stream流操作分为3种类型：

* 创建Stream
* Stream中间处理
* 终止Steam

| 创建Stream        | Stream操作1,2,3……  |  stream操作n  |终止stream  |
| --------   | -----  | :----  |:----:  |
|  `<code>stream()<br>Stream<T>.of(...)<br>paralleleStream()</code>`<br>创建出一个stream管道流对象| `<code>filter()<br>map()<br>flatMap()<br>limit(n)<br>skip(n)<br>concat()<br>dictinct()<br>sorted()<br>peek() </code>`|   每一个环节操作完成之后<br>都是返回一个新的Stream对象，<br>可以基于此新的Stream对象基础上<br>叠加其余的操作     |`<code> count()<br>max()<br>main()<br>findFirst()<br>findAny()<br>anyMatch()<br>allMatch()<br>noneMatch()<br>collect()<br>toArray()<br>Iterator()</code>`<br>foreach()<br>终止stream操作，获取结果或者者执行操作|

每个Stream管道操作类型都包含若干API方法，先列举下各个API方法的功能介绍。

* 开始管道

主要负责新建一个Stream流，或者基于现有的数组、List、Set、Map等集合类型对象创建出新的Stream流。

| API        | 功能说明   | 
| --------   | -----  |
| stream()     | 创建出一个新的steam串行流对象 |  
| parallelStream()        |   创建出一个可并行执行的stream流对象   | 
| Stream.of()        |    通过给定的一系列元素创建一个新的Stream串行流对象    | 


* 中间管道
负责对Stream进行处理操作，并返回一个新的Stream对象，中间管道操作可以进行叠加。

| API        | 功能说明   | 
| --------   | -----  |
|filter()|	按照条件过滤符合要求的元素， 返回新的stream流|
|map()	|将已有元素转换为另一个对象类型，一对一逻辑，返回新的stream流|
|flatMap()|	将已有元素转换为另一个对象类型，一对多逻辑，即原来一个元素对象可能会转换为1个或者多个新类型的元素，返回新的stream流|
|limit()|	仅保留集合前面指定个数的元素，返回新的stream流|
|skip()|	跳过集合前面指定个数的元素，返回新的stream流|
|concat()|	将两个流的数据合并起来为1个新的流，返回新的stream流|
|distinct()|	对Stream中所有元素进行去重，返回新的stream流|
|sorted()|	对stream中所有的元素按照指定规则进行排序，返回新的stream流|
|peek()	|对stream流中的每个元素进行逐个遍历处理，返回处理后的stream流|


* 终止管道
顾名思义，通过终止管道操作之后，Stream流将会结束，最后可能会执行某些逻辑处理，或者是按照要求返回某些执行后的结果数据。

| API        | 功能说明   | 
| --------   | -----  |
|count()|	返回stream处理后最终的元素个数|
|max()|	返回stream处理后的元素最大值|
|min()|	返回stream处理后的元素最小值|
|findFirst()|	找到第一个符合条件的元素时则终止流处理|
|findAny()|	找到任何一个符合条件的元素时则退出流处理，这个对于串行流时与findFirst相同，对于并行流时比较高效，任何分片中找到都会终止后续计算逻辑|
|anyMatch()	|返回一个boolean值，类似于isContains(),用于判断是否有符合条件的元素|
|allMatch()|	返回一个boolean值，用于判断是否所有元素都符合条件|
|noneMatch()|	返回一个boolean值， 用于判断是否所有元素都不符合条件|
|collect()|	将流转换为指定的类型，通过Collectors进行指定|
|toArray()|	将流转换为数组|
|iterator()	|将流转换为Iterator对象|
|foreach()|	无返回值，对元素进行逐个遍历，然后执行给定的处理逻辑|


## 2.Stream方法使用

### 2.1.map与flatMap
map与flatMap都是用于转换已有的元素为其它元素，区别点在于：

* map 必须是一对一的，即每个元素都只能转换为1个新的元素
* flatMap 可以是一对多的，即每个元素都可以转换为1个或者多个新的元素

#### 2.1.1.map
比如：**有一个字符串ID列表，现在需要将其转为User对象列表**。可以使用map来实现：
```java
/**
 * 演示map的用途：一对一转换
 */
public void stringToIntMap() {
    List<String> ids = Arrays.asList("205", "105", "308", "469", "627", "193", "111");
    // 使用流操作
    List<User> results = ids.stream()
            .map(id -> {
                User user = new User();
                user.setId(id);
                return user;
            })
            .collect(Collectors.toList());
    System.out.println(results);
}
```
执行之后，会发现每一个元素都被转换为对应新的元素，但是**前后总元素个数是一致的**：

```java
[User{id='205'}, 
 User{id='105'},
 User{id='308'}, 
 User{id='469'}, 
 User{id='627'}, 
 User{id='193'}, 
 User{id='111'}]
```
#### 2.1.2.flatMap
再比如：现有一个句子列表，需要将句子中每个单词都提取出来得到一个所有单词列表。这种情况用map就搞不定了，需要flatMap上场了：
```java

public void stringToIntFlatmap() {
    List<String> sentences = Arrays.asList("hello world","Jia Gou Wu Dao");
    // 使用流操作
    List<String> results = sentences.stream()
            .flatMap(sentence -> Arrays.stream(sentence.split(" ")))
            .collect(Collectors.toList());
    System.out.println(results);
}
```
执行结果如下，可以看到结果列表中元素个数是比原始列表元素个数要多的：
```java
[hello, world, Jia, Gou, Wu, Dao]
```
这里需要补充一句，flatMap操作的时候其实是先每个元素处理并返回一个新的Stream，然后将多个Stream展开合并为了一个完整的新的Stream。

### 2.2.peek和foreach
peek和foreach，都可以用于对元素进行遍历然后逐个的进行处理。

但根据前面的介绍，peek属于中间方法，而foreach属于终止方法。这也就意味着peek只能作为管道中途的一个处理步骤，而没法直接执行得到结果，其后面必须还要有其它终止操作的时候才会被执行；而foreach作为无返回值的终止方法，则可以直接执行相关操作。
```java
public void testPeekAndforeach() {
    List<String> sentences = Arrays.asList("hello world","Jia Gou Wu Dao");
    // 演示点1： 仅peek操作，最终不会执行
    System.out.println("----before peek----");
    sentences.stream().peek(sentence -> System.out.println(sentence));
    System.out.println("----after peek----");
    // 演示点2： 仅foreach操作，最终会执行
    System.out.println("----before foreach----");
    sentences.stream().forEach(sentence -> System.out.println(sentence));
    System.out.println("----after foreach----");
    // 演示点3： peek操作后面增加终止操作，peek会执行
    System.out.println("----before peek and count----");
    sentences.stream().peek(sentence -> System.out.println(sentence)).count();
    System.out.println("----after peek and count----");
}
```

输出结果可以看出，peek独自调用时并没有被执行、但peek后面加上终止操作之后便可以被执行，而foreach可以直接被执行：
```java
----before peek----
----after peek----
----before foreach----
hello world
Jia Gou Wu Dao
----after foreach----
----before peek and count----
hello world
Jia Gou Wu Dao
----after peek and count----
```

### 2.3.filter、sorted、distinct、limit
这几个都是常用的Stream的中间操作方法，具体的方法的含义在上面的表格里面有说明。具体使用的时候，可以根据需要选择一个或者多个进行组合使用，或者同时使用多个相同方法的组合：
```java
public void testGetTargetUsers() {
    List<String> ids = Arrays.asList("205","10","308","49","627","193","111", "193");
    // 使用流操作
    List<Dept> results = ids.stream()
            .filter(s -> s.length() > 2)
            .distinct()
            .map(Integer::valueOf)
            .sorted(Comparator.comparingInt(o -> o))
            .limit(3)
            .map(id -> new Dept(id))
            .collect(Collectors.toList());
    System.out.println(results);
}
```
上面的代码片段的处理逻辑很清晰：

1、使用filter过滤掉不符合条件的数据
2、通过distinct对存量元素进行去重操作
3、通过map操作将字符串转成整数类型
4、借助sorted指定按照数字大小正序排列
5、使用limit截取排在前3位的元素
6、又一次使用map将id转为Dept对象类型
7、使用collect终止操作将最终处理后的数据收集到list中
输出结果：
```java
[Dept{id=111},  Dept{id=193},  Dept{id=205}]
```

### 2.4.简单结果终止方法
按照前面介绍的，终止方法里面像count、max、min、findAny、findFirst、anyMatch、allMatch、nonneMatch等方法，均属于这里说的简单结果终止方法。所谓简单，指的是其结果形式是数字、布尔值或者Optional对象值等。
```java
public void testSimpleStopOptions() {
    List<String> ids = Arrays.asList("205", "10", "308", "49", "627", "193", "111", "193");
    // 统计stream操作后剩余的元素个数
    System.out.println(ids.stream().filter(s -> s.length() > 2).count());
    // 判断是否有元素值等于205
    System.out.println(ids.stream().filter(s -> s.length() > 2).anyMatch("205"::equals));
    // findFirst操作
    ids.stream().filter(s -> s.length() > 2)
            .findFirst()
            .ifPresent(s -> System.out.println("findFirst:" + s));
}
```
其执行后的结果为：
```java
6
true
findFirst:205
```
## 3.避坑提醒

这里需要补充提醒下，一旦一个Stream被执行了终止操作之后，后续便不可以再读这个流执行其他的操作了，否则会报错，看下面示例：
```java
public void testHandleStreamAfterClosed() {
    List<String> ids = Arrays.asList("205", "10", "308", "49", "627", "193", "111", "193");
    Stream<String> stream = ids.stream().filter(s -> s.length() > 2);
    // 统计stream操作后剩余的元素个数
    System.out.println(stream.count());
    System.out.println("-----下面会报错-----");
    // 判断是否有元素值等于205
    try {
        System.out.println(stream.anyMatch("205"::equals));
    } catch (Exception e) {
        e.printStackTrace();
    }
    System.out.println("-----上面会报错-----");
}
```
执行的时候结果如下：
```java

6
-----下面会报错-----
java.lang.IllegalStateException: stream has already been operated upon or closed
	at java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:229)
	at java.util.stream.ReferencePipeline.anyMatch(ReferencePipeline.java:449)
	at com.veezean.skills.stream.StreamService.testHandleStreamAfterClosed(StreamService.java:153)
	at com.veezean.skills.stream.StreamService.main(StreamService.java:176)
-----上面会报错-----
```
因为stream已经被执行count()终止方法了，所以对stream再执行anyMatch方法的时候，就会报错stream has already been operated upon or closed，这一点在使用的时候需要特别注意。

## 4.结果收集终止方法
因为Stream主要用于对集合数据的处理场景，所以除了上面几种获取简单结果的终止方法之外，更多的场景是获取一个集合类的结果对象，比如List、Set或者HashMap等。

这里就需要collect方法出场了，它可以支持生成如下类型的结果数据：

* 一个集合类，比如List、Set或者HashMap等
* StringBuilder对象，支持将多个字符串进行拼接处理并输出拼接后结果
* 一个可以记录个数或者计算总和的对象（数据批量运算统计）

### 4.1.生成集合
应该算是collect最常被使用到的一个场景了：
```java
public void testCollectStopOptions() {
    List<Dept> ids = Arrays.asList(new Dept(17), new Dept(22), new Dept(23));
    // collect成list
    List<Dept> collectList = ids.stream().filter(dept -> dept.getId() > 20)
            .collect(Collectors.toList());
    System.out.println("collectList:" + collectList);
    // collect成Set
    Set<Dept> collectSet = ids.stream().filter(dept -> dept.getId() > 20)
            .collect(Collectors.toSet());
    System.out.println("collectSet:" + collectSet);
    // collect成HashMap，key为id，value为Dept对象
    Map<Integer, Dept> collectMap = ids.stream().filter(dept -> dept.getId() > 20)
            .collect(Collectors.toMap(Dept::getId, dept -> dept));
    System.out.println("collectMap:" + collectMap);
}
```
结果如下：
```java
collectList:[Dept{id=22}, Dept{id=23}]
collectSet:[Dept{id=23}, Dept{id=22}]
collectMap:{22=Dept{id=22}, 23=Dept{id=23}}
```
### 4.2.生成拼接字符串
将一个List或者数组中的值拼接到一个字符串里并以逗号分隔开，这个场景相信大家都不陌生吧？

如果通过for循环和StringBuilder去循环拼接，还得考虑下最后一个逗号如何处理的问题，很繁琐:
```java
public void testForJoinStrings() {
    List<String> ids = Arrays.asList("205", "10", "308", "49", "627", "193", "111", "193");
    StringBuilder builder = new StringBuilder();
    for (String id : ids) {
        builder.append(id).append(',');
    }
    // 去掉末尾多拼接的逗号
    builder.deleteCharAt(builder.length() - 1);
    System.out.println("拼接后：" + builder.toString());
}
```
但是现在有了Stream，使用collect可以轻而易举的实现：
```java
public void testCollectJoinStrings() {
    List<String> ids = Arrays.asList("205", "10", "308", "49", "627", "193", "111", "193");
    String joinResult = ids.stream().collect(Collectors.joining(","));
    System.out.println("拼接后：" + joinResult);
}
```
两种方式都可以得到完全相同的结果，但Stream的方式更优雅：
```java
拼接后：205,10,308,49,627,193,111,193
```
### 4.3.数据批量数学运算
还有一种场景，实际使用的时候可能会比较少，就是使用collect生成数字数据的总和信息，也可以了解下实现方式：
```java
public void testNumberCalculate() {
    List<Integer> ids = Arrays.asList(10, 20, 30, 40, 50);
    // 计算平均值
    Double average = ids.stream().collect(Collectors.averagingInt(value -> value));
    System.out.println("平均值：" + average);
    // 数据统计信息
    IntSummaryStatistics summary = ids.stream().collect(Collectors.summarizingInt(value -> value));
    System.out.println("数据统计信息： " + summary);
}
```
上面的例子中，使用collect方法来对list中元素值进行数学运算，结果如下：

```java
平均值：30.0
总和： IntSummaryStatistics{count=5, sum=150, min=10, average=30.000000, max=50}
```
## 5.并行Stream
### 5.1.机制说明
使用并行流，可以有效利用计算机的多CPU硬件，提升逻辑的执行速度。并行流通过将一整个stream划分为多个片段，然后对各个分片流并行执行处理逻辑，最后将各个分片流的执行结果汇总为一个整体流。
### 5.2.约束与限制
并行流类似于多线程在并行处理，所以与多线程场景相关的一些问题同样会存在，比如死锁等问题，所以在并行流终止执行的函数逻辑，必须要保证线程安全。

## 6.回答最初的问题
到这里，关于JAVA Stream的相关概念与用法介绍，基本就讲完了。我们再把焦点切回本文刚开始时提及的一个问题：

Stream相较于传统的foreach的方式处理stream，到底有啥优势？

根据前面的介绍，我们应该可以得出如下几点答案：

* 代码更简洁、偏声明式的编码风格，更容易体现出代码的逻辑意图
* 逻辑间解耦，一个stream中间处理逻辑，无需关注上游与下游的内容，只需要按约定实现自身逻辑即可
* 并行流场景效率会比迭代器逐个循环更高
* 函数式接口，延迟执行的特性，中间管道操作不管有多少步骤都不会立即执行，只有遇到终止操作的时候才会开始执行，可以避免一些中间不必要的操作消耗
当然了，Stream也不全是优点，在有些方面也有其弊端：

* 代码调测debug不便
* 程序员从历史写法切换到Stream时，需要一定的适应时间