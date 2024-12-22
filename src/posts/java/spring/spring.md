---
title: spring 学习笔记
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
category:
  - spring

tag:
  - java
  - spring
  - springboot


---

上帝赋予java生命，spring赋予java生命的延续
<!-- more -->
# spring

标签（空格分隔）： spring

---

上帝赋予java生命，spring赋予java生命的延续

## 1.javaWeb的弊端
有两个困惑：

困惑一：层与层之间紧密耦合在了一起， 接口与具体实现紧密耦合在了一起；eg：调用其他类中的方法总是要new一个
困惑二：通用的事务功能耦合在业务代码中，通用的日志功能耦合在业务代码中；eg：说白了也是对象，要new

## 2.IOC思想
IoC思想： Inversion of Control，翻译为“控制反转”或“反转控制”，强调的是原来在程序中创建Bean的权利反转给第三方。

例如：原来在程序中手动的去 new UserServiceImpl()，手动的去new UserDaoImpl()，而根据IoC思想的指导，
寻求一个第三方去创建UserServiceImpl对象和UserDaoImpl对象。这样程序与具体对象就失去的直接联系。

谁去充当第三方角色呢？——>工厂设计模式，BeanFactory来充当第三方的角色，来产生Bean实例

BeanFactory怎么知道产生哪些Bean实例呢？——>可以使用配置文件配置Bean的基本信息，BeanFactory根据配置文件来生产Bean实例

```text
程序 -> BeanFactory -> 配置文件 -> UserServiceImpl 和 UserDaoImpl
```

```java
public static void main(String[]args){
    BeanFactory beanFactory = new BeanFactory("beans.xml");//获取配置文件
    UserServie userService = (UserService)beanFactory.getBean("userService");//获取userService的对象实例    
}
```
## 3.DI思想
IOC的全称为（Inversion of Control），即“控制反转”；DI注入全称（Dependency Injection）依赖注入，二者是同一个事物的不同叫法，两者不是什么技术，而是一种设计思想。

上面使用BeanFactory的方式已经实现的"控制反转"，将Bean的创建权交给了BeanFactory，如果我们想将
UserDao的创建权也反转给BeanFactory，与此同时UserService内部还需要用到UserDao实例对象，那应该怎
样操作呢？

* 1.在程序中，通过BeanFactory获得UserService
* 2.在程序中，通过BeanFactory获得UserDao
* 3.在程序中，将UserDao设置给UserService

xml配置文件如下：

```xml
<!-- UserService配置 -->
<bean id="userService" class="com.study.UserServiceImpl"></bean>
<!-- UserDao配置 -->
<bean id="userDao" class="com.study.UserDaoImpl"></bean>
```


代码如下：

```java
public static void main(String[]args){
        //获取配置文件,创建工厂
        BeanFactory beanFactory = new BeanFactory("beans.xml");
        //获取userService的实例对象
        UserServie userService = (UserService)beanFactory.getBean("userService");
        //获得UserDao实例对象
        UserDao userDao = (UserDao)beanFactroy.getBean("userDao");
        //将UserDao设置给UserService
        userService.setUserDao(userDao);
}
```

但是上述UserService存在于BeanFactory中， UserDao也存在于BeanFactory中，可以在BeanFactory内部进行结合。

这样的话要修改一下xml文件；
```xml
<!-- UserDao配置 -->
<bean id="userDao" class="com.study.UserDaoImpl"></bean>
<!-- UserService配置 -->
<bean id="userService" class="com.study.UserServiceImpl">
    <property name="userDao" ref="userDao"></property>
</bean>
```
将UserDao在BeanFactory内部设置给UserService的过程叫做“注入”，而UserService需要依赖UserDao的注入才能正常工作，这个过程叫做“依赖注入”。


解决困惑一：程序代码中不要手动new对象，第三方根据要求为程序提供需要的Bean对象。

## 4.AOP 思想
IoC和DI思想主要是解决前面我们的困惑一，困惑二还没有解决

困惑二的解决方案是，借助于IoC思想，将Bean的创建权反转给BeanFactory，而BeanFactory生产的Bean是目标Bean的代理对象，这样就可以在代理对象中对目标对象方法进行相应的增强。

AOP，Aspect Oriented Programming，切面编程思想，是对面向对象编程OOP的升华。OOP是纵向对一个
事物的抽象，一个对象包括静态的属性信息，包括动态的方法信息等。而AOP是横向的对不同事物的抽象，属
性与属性、方法与方法、对象与对象都可以组成一个切面，而用这种思维去设计编程的方式叫做面向切面编程。

可以理解一下，公共类或者动态代理。

**三种思想的总结:**
* IoC控制反转，是将程序创建Bean的权利反转给第三方；
* DI依赖注入，某个完整Bean需要依赖于其他Bean（或属性）的注入；
* AOP面向切面编程，用横向抽取方法（属性、对象等）思想，组装成一个功能性切面。


困惑二解决：程序代码中不要手动new对象，第三方根据要求为程序提供需要的Bean对象的代理对象，代理对象内部动态结合业务和通用功能。

## 5.spring框架的诞生
以上思想落地框架：
Spring框架的历史
* Jsp 默默扛下所有；
* MVC+三层架构分工明确，但开发成本及其高；
* EJB 重量级框架出现，走出一个困境，有进入另一个困境；
* Spring 春天来到，随之，SSH风生水起、称霸武林；
* Spring 稳住江湖大哥位置，SSM开始上位；
* Spring 本着“拿来主义”的思维快速发展，生态不断健全；
* SpringBoot 又一里程碑崛起，把“约定大于配置“思想玩儿的炉火纯青；
* SpringCloud 打包了微服务众多解决方案，应对互联网项目更加easy！

### 5.1.ApplicationContext快速入门
ApplicationContext 称为Spring容器，内部封装了BeanFactory，比BeanFactory功能更丰富更强大，使用
ApplicationContext 进行开发时，xml配置文件的名称习惯写成applicationContext.xml

```java
//创建ApplicationContext,加载配置文件，实例化容器
ApplicationContext applicationContext = new ClassPathxmlApplicationContext(“applicationContext.xml");
//根据beanName获得容器中的Bean实例
UserService userService = (UserService) applicationContext.getBean("userService");
System.out.println(userService);
```

### 5.2.BeanFactory与ApplicationContext的关系

* BeanFactory是Spring的早期接口，称为Spring的Bean工厂，ApplicationContext是后期更高级接口，称之为 Spring 容器；
* ApplicationContext在BeanFactory基础上对功能进行了扩展，例如：监听功能、国际化功能等。BeanFactory的API更偏向底层，ApplicationContext的API大多数是对这些底层API的封装；
* Bean创建的主要逻辑和功能都被封装在BeanFactory中，ApplicationContext不仅继承了BeanFactory，而且ApplicationContext内部还维护着BeanFactory的引用，所以，ApplicationContext与BeanFactory既有继承关系，又有融合关系。
* Bean的初始化时机不同，原始BeanFactory是在首次调用getBean时才进行Bean的创建，而ApplicationContext则是配置文件加载，容器一创建就将Bean都实例化并初始化好。
* ApplicationContext除了继承了BeanFactory外，还继承了ApplicationEventPublisher（事件发布器）、 ResouresPatternResolver（资源解析器）、MessageSource（消息资源）等。但是ApplicationContext的核心功能还是BeanFactory。

提现他们的继承关系：BeanFactory是核心接口，项目运行过程中肯定有具体实现参与，这个具体实现就是DefaultListableBeanFactory，而ApplicationContext内部维护的Beanfactory的实现类也是它

**只在Spring基础环境下，常用的三个ApplicationContext作用如下：**

| 实现类                             | 功能描述                                    |
| ---------------------------------- | ------------------------------------------- |
| ClassPathXmlApplicationContext     | 加载类路径下的xml配置的ApplicationContext   |
| FileSystemXmlApplicationContext    | 加载磁盘路径下的xml配置的ApplicationContext |
| AnnotationConfigApplicationContext | 加载注解配置类的ApplicationContext          |

**在Spring的web环境下，常用的两个ApplicationContext作用如下：**

| 实现类                             | 功能描述                                    |
| ---------------------------------- | ------------------------------------------- |
| XmlWebApplicationContext     | web环境下，加载类路径下的xml配置的ApplicationContext   |
| AnnotationConfigWebApplicationContext    | web环境下，加载磁盘路径下的xml配置的ApplicationContext |

PS：web环境下的这两个ApplicationContext，在学习Spring集成web时在进行讲解

## 6.spring的配置详解

| Xml配置方式                               | **功能描述**                                                 |
| ----------------------------------------- | ------------------------------------------------------------ |
| `<bean id="" class="">`                     | Bean的id和全限定名配置                                       |
| `<bean name=""> `                    | 通过name设置Bean的别名，通过别名也能直接获取到Bean实例       |
| `<bean scope="">`                   | Bean的作用范围，BeanFactory作为容器时取值singleton和prototype |
| `<bean lazy-init="">`                  | Bean的实例化时机，是否延迟加载。BeanFactory作为容器时无效    |
| `<bean init-method="">`                 | Bean实例化后自动执行的初始化方法，method指定方法名           |
| `<bean destroy-method="">`                | Bean实例销毁前的方法，method指定方法名                       |
| `<bean autowire="byType">`               | 设置自动注入模式，常用的有按照类型byType，按照名字byName     |
| `<bean factory-bean="" factory-method=""/>` | 指定哪个工厂Bean的哪个方法完成Bean的创建                     |





### 6.1.Bean的基础配置

1）Bean的基础配置

例如：配置UserDaoImpl由Spring容器负责管理

```xml
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl"/>
```

此时存储到Spring容器（singleObjects单例池）中的Bean的beanName是userDao，值是UserDaoImpl对象，可以根据beanName获取Bean实例。

```java
applicationContext.getBean("userDao");
```

如果不配置id，则Spring会把当前Bean实例的全限定名作为beanName

```java
applicationContext.getBean("com.itheima.dao.impl.UserDaoImpl");
```

2）Bean的别名配置

可以为当前Bean指定多个别名，根据别名也可以获得Bean对象

```xml
<bean id="userDao" name="aaa,bbb" class="com.itheima.dao.impl.UserDaoImpl"/>
```

此时多个名称都可以获得UserDaoImpl实例对象

```java
applicationContext.getBean("userDao");
applicationContext.getBean("aaa");
applicationContext.getBean("bbb");
```

3）Bean的范围配置

默认情况下，单纯的Spring环境Bean的作用范围有两个：Singleton和Prototype

* **singleton**：单例，默认值，Spring容器创建的时候，就会进行Bean的实例化，并存储到容器内部的单例池中，每次getBean时都是从单例池中获取相同的Bean实例；

* **prototype**：原型，Spring容器初始化时不会创建Bean实例，当调用getBean时才会实例化Bean，每次getBean都会创建一个新的Bean实例。



3）Bean的范围配置

当scope设置为**singleton**时，获得两次对象打印结果是一样的

```xml
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl" scope="singleton"/>
```

```java
Object userDao = applicationContext.getBean("userDao");
Object userDao2 = applicationContext.getBean("userDao");
System.out.println(userDao); //com.itheima.dao.impl.UserDaoImpl@631330c
System.out.println(userDao2); //com.itheima.dao.impl.UserDaoImpl@631330c
```

通过断点调试，观察可以发现单例池中存在 userDao 实例

当scope设置为**prototype**时，获得两次对象打印结果是不一样的

```xml
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl" scope="prototype"/>
```

```java
Object userDao = applicationContext.getBean("userDao");
Object userDao2 = applicationContext.getBean("userDao");
System.out.println(userDao); //com.itheima.dao.impl.UserDaoImpl@4d50efb8
System.out.println(userDao2); //com.itheima.dao.impl.UserDaoImpl@7e2d773b
```

通过断点调试，观察可以发现单例池中不存在 userDao 实例，但是 userDao的信息已经被存储到

beanDefinitionMap中了

4）Bean的延迟加载

当lazy-init设置为true时为延迟加载，也就是当Spring容器创建的时候，不会立即创建Bean实例，等待用到时在创

建Bean实例并存储到单例池中去，后续在使用该Bean直接从单例池获取即可，本质上该Bean还是单例的

```xml
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl" lazy-init="true"/>
```



## web层解决方案-SpringMVC





