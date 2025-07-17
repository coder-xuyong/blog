---
title: redis 学习笔记之实战篇
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
category:
  - redis

tag:
  - java
  - spring
  - springboot
  - redis

---

redis 学习笔记之实战篇
<!-- more -->



# redis 学习笔记之实战篇

标签（空格分隔）： redis

---
## 1.短信登陆
### 1.1实现发送短信验证码功能
1）发送验证码
```java
 public Result sendCode(String phone, HttpSession session) {
        // 1.校验手机号
        if (RegexUtils.isPhoneInvalid(phone)) {
            // 2.如果不符合，返回错误信息
            return Result.fail("手机号格式错误！");
        }
        // 3.符合，生成验证码
        String code = RandomUtil.randomNumbers(6);

        // 4.保存验证码到 session
        session.setAttribute("code",code);
        // 5.发送验证码
        System.out.println("code:"+code);
        // 返回ok
        return Result.ok();
    }
```
使用postman进行测试：http://localhost:10086/student/code
参数：phone 12312XXX

2）登录
```java
public Result login(LoginFormDTO loginForm, HttpSession session) {
        // 1.校验手机号
        String phone = loginForm.getPhone();
        if (RegexUtils.isPhoneInvalid(phone)) {
            // 2.如果不符合，返回错误信息
            return Result.fail("手机号格式错误！");
        }
        // 3.校验验证码
        Object cacheCode = session.getAttribute("code");
        String code = loginForm.getCode();
        if(cacheCode == null || !cacheCode.toString().equals(code)){
            //3.不一致，报错
            return Result.fail("验证码错误");
        }
        //一致，根据手机号查询用户
        Student stu = StudentList.findByPhone(phone);
        //5.判断用户是否存在
        if(stu == null){
            //不存在，则创建
            stu =  createUserWithPhone(phone);
        }
        //7.保存用户信息到session中
        session.setAttribute("stu", BeanUtil.copyProperties(stu, StudentDTO.class));

        return Result.ok();
    }
```
使用postman进行测试：http://localhost:10086/student/login
参数：
```json
{
"phone":"XXXXXXX",
"code":"前面获取的，是后台打印"
}
```

### 1.2.实现登陆拦截功能
使用threadlocal来做到线程隔离，每个线程操作自己的一份数据。

1）拦截器代码
```java
public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //1.获取session
        HttpSession session = request.getSession();
        //2.获取session中的用户
        Object stu = session.getAttribute("stu");
        //3.判断用户是否存在
        if(stu == null){
            //4.不存在，拦截，返回401状态码
            response.setStatus(401);
            return false;
        }
        //5.存在，保存用户信息到Threadlocal
        StudentHolder.saveStudent((StudentDTO) stu);
        //6.放行
        return true;
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        // 移除用户
        StudentHolder.removeStudent();

    }
}
```
2）让拦截器生效
```java
@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 登录拦截器
        registry.addInterceptor(new LoginInterceptor())
                .excludePathPatterns(
                        "/student/code",
                        "/student/login"
                );
    }
}
```
### 1.3.session共享问题
**核心思路分析：**

集群的每个tomcat中都有一份属于自己的session,假设用户第一次访问第一台tomcat，并且把自己的信息存放到第一台服务器的session中，但是第二次这个用户访问到了第二台tomcat，那么在第二台服务器上，肯定没有第一台服务器存放的session，所以此时 整个登录拦截功能就会出现问题，我们能如何解决这个问题呢？早期的方案是session拷贝，就是说虽然每个tomcat上都有不同的session，但是每当任意一台服务器的session修改时，都会同步给其他的Tomcat服务器的session，这样的话，就可以实现session的共享了

但是这种方案具有两个大问题

1、每台服务器中都有完整的一份session数据，服务器压力过大。

2、session拷贝数据时，可能会出现延迟

所以咱们后来采用的方案都是基于redis来完成，我们把session换成redis，redis数据本身就是共享的，就可以避免session共享的问题了

**session共享问题：**多台Tomcat并不共享session存储空间，当请求切换到不同Tomcat服务时，导致数据丢失的问题。
session的替代方案应该满足：

- 数据共享
- 内存存储
- key、value结构

### 1.4.Redis代替session的业务流程
#### 1.4.1.设计key的结构
首先我们要思考一下利用redis来存储数据，那么到底使用哪种结构呢？由于存入的数据比较简单，我们可以考虑使用String，或者是使用哈希，如果使用String，注意他的value，会多占用一点空间，如果使用哈希，则他的value中只会存储他数据本身，如果不是特别在意内存，其实使用String就可以啦。

#### 1.4.2.设计key的具体细节
所以我们可以使用String结构，就是一个简单的key，value键值对的方式，但是关于key的处理，session他是每个用户都有自己的session，但是redis的key是共享的，咱们就不能使用code了

在设计这个key的时候，我们之前讲过需要满足两点

1、key要具有唯一性

2、key要方便携带

如果我们采用phone：手机号这个的数据来存储当然是可以的，但是如果把这样的敏感数据存储到redis中并且从页面中带过来毕竟不太合适，所以我们在后台生成一个随机串token，然后让前端带来这个token就能完成我们的整体逻辑了

#### 1.4.3.整体访问流程
当注册完成后，用户去登录会去校验用户提交的手机号和验证码，是否一致，如果一致，则根据手机号查询用户信息，不存在则新建，最后将用户数据保存到redis，并且生成token作为redis的key，当我们校验用户是否登录时，会去携带着token进行访问，从redis中取出token对应的value，判断是否存在这个数据，如果没有则拦截，如果存在则将其保存到threadLocal中，并且放行。

### 1.5.用Redis代替session存储短信验证码
```java
//session.setAttribute("code",code);
// set key value ex 120
stringRedisTemplate.opsForValue().set("login:code"+phone,code,2,TimeUnit.MINUTES);
```

### 1.6.基于Redis实现短信登陆
```java
public Result login(LoginFormDTO loginForm, HttpSession session) {
        // 1.校验手机号
        String phone = loginForm.getPhone();
        if (RegexUtils.isPhoneInvalid(phone)) {
            // 2.如果不符合，返回错误信息
            return Result.fail("手机号格式错误！");
        }
        // 3.校验验证码,TODO 之后从redis中获取
//        Object cacheCode = session.getAttribute("code");
        String cacheCode = stringRedisTemplate.opsForValue().get(LOGIN_CODE_KEY + phone);
        String code = loginForm.getCode();
        if(cacheCode == null || !cacheCode.toString().equals(code)){
            //3.不一致，报错
            return Result.fail("验证码错误");
        }
        //一致，根据手机号查询用户
        Student stu = StudentList.findByPhone(phone);
        //5.判断用户是否存在
        if(stu == null){
            //不存在，则创建
            stu =  createUserWithPhone(phone);
        }
        //7.保存用户信息到session中，TODO 之后用redis代替
//        session.setAttribute("stu", BeanUtil.copyProperties(stu, StudentDTO.class));
        // TODO 7.1.随机生成token，作为登录令牌
        String token = UUID.randomUUID().toString(true);
        //TODO 7.2.将User对象转为HashMap存储
        StudentDTO stuDTO = BeanUtil.copyProperties(stu, StudentDTO.class);
        Map<String, Object> stuMap = BeanUtil.beanToMap(stuDTO, new HashMap<>(),
                CopyOptions.create() // 数据拷贝是的选项
                        .setIgnoreNullValue(true) //忽略空的值
                        .setFieldValueEditor((fieldName, fieldValue) -> fieldValue.toString()));//修改字段，将long的id转为String
        //TODO 7.3.存储
        String tokenKey = LOGIN_STU_KEY + token;
        stringRedisTemplate.opsForHash().putAll(tokenKey, stuMap);
        // TODO 7.4.设置token有效期
        stringRedisTemplate.expire(tokenKey, LOGIN_STU_TTL, TimeUnit.MINUTES);
//        return Result.ok();
        return Result.ok(token);//TODO 返回token
    }
```
### 1.7.修改优化拦截器
目前位置，上述代码只能在登陆的时候刷新token，其他访问路径不刷新token，因此修改拦截器：
- 保证所有路径都会刷新token
- 判断用户是否存在，且拦截路径访问

所以使用两个拦截器：
1）所有路劲刷新token
```java
public class RefreshTokenInterceptor implements HandlerInterceptor {
        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
            // 1.获取请求头中的token
            String token = request.getHeader("authorization");
            if (StrUtil.isBlank(token)) {
                return true;
            }
            // 2.基于TOKEN获取redis中的用户
            String key  = LOGIN_STU_KEY + token;
            Map<Object, Object> stuMap = stringRedisTemplate.opsForHash().entries(key);
            // 3.判断用户是否存在
            if (stuMap.isEmpty()) {
                return true;
            }
            // 5.将查询到的hash数据转为stuDTO
            StudentDTO studentDTO = BeanUtil.fillBeanWithMap(stuMap, new StudentDTO(), false);
            // 6.存在，保存用户信息到 ThreadLocal
            StudentHolder.saveStudent(studentDTO);
            // 7.刷新token有效期
            stringRedisTemplate.expire(key, LOGIN_STU_TTL, TimeUnit.MINUTES);
            // 8.放行
            return true;
        }

        @Override
        public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
            // 移除用户
            StudentHolder.removeStudent();
        }
    }
```
2）判断用户是否存在，且拦截路径访问
```java
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 1.判断是否需要拦截（ThreadLocal中是否有用户）
        if (StudentHolder.getStudent() == null) {
            // 没有，需要拦截，设置状态码
            response.setStatus(401);
            // 拦截
            return false;
        }
        // 有用户，则放行
        return true;
    }
```
3）配置拦截器生效
```java
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 登录拦截器
        registry.addInterceptor(new LoginInterceptor())
                .excludePathPatterns(
                        "/student/code",
                        "/student/login"
                ).order(1);// order(1) 后执行，值越小，执行等级越高
        // token刷新的拦截器
        registry.addInterceptor(new RefreshTokenInterceptor(stringRedisTemplate)).addPathPatterns("/**").order(0);// order(0) 先执行
    }
```
然后可以测试一下，查看登陆之后的信息：http://localhost:10086/student/me
需要带上`authorization`
## 2.商户查询缓存
### 2.1.什么是缓存
**缓存**(Cache),就是数据交换的**缓冲区**,俗称的缓存就是**缓冲区内的数据**,一般从数据库中获取,存储于本地代码(例如:

```java
例1:Static final ConcurrentHashMap<K,V> map = new ConcurrentHashMap<>(); 本地用于高并发

例2:static final Cache<K,V> USER_CACHE = CacheBuilder.newBuilder().build(); 用于redis等缓存

例3:Static final Map<K,V> map =  new HashMap(); 本地缓存
```

由于其被**Static**修饰,所以随着类的加载而被加载到**内存之中**,作为本地缓存,由于其又被**final**修饰,所以其引用(例3:map)和对象(例3:new HashMap())之间的关系是固定的,不能改变,因此不用担心赋值(=)导致缓存失效;

#### 2.1.1为什么要使用缓存
一句话:因为**速度快,好用**
缓存数据存储于代码中,而代码运行在内存中,内存的读写性能远高于磁盘,缓存可以大大降低**用户访问并发量带来的**服务器读写压力

#### 2.1.2如何使用缓存
实际开发中,会构筑多级缓存来使系统运行速度进一步提升,例如:本地缓存与redis中的缓存并发使用

**浏览器缓存**：主要是存在于浏览器端的缓存

**应用层缓存：**可以分为tomcat本地缓存，比如之前提到的map，或者是使用redis作为缓存

**数据库缓存：**在数据库中有一片空间是 buffer pool，增改查数据都会先加载到mysql的缓存中

**CPU缓存：**当代计算机最大的问题是 cpu性能提升了，但内存读写速度没有跟上，所以为了适应当下的情况，增加了cpu的L1，L2，L3级的缓存

### 2.2.添加商户缓存
在我们查询商户信息时，我们是直接操作从数据库中去进行查询的，大致逻辑是这样，直接查询数据库那肯定慢咯，所以我们需要增加缓存
```java
@GetMapping("/{id}")
public Result queryShopById(@PathVariable("id") Long id) {
    //这里是直接查询数据库
    return shopService.queryById(id);
}
```
#### 2.2.1.缓存模型和思路
标准的操作方式就是查询数据库之前先查询缓存，如果缓存数据存在，则直接从缓存中返回，如果缓存数据不存在，再查询数据库，然后将数据存入redis。

#### 2.2.2.代码如下
代码思路：如果缓存有，则直接返回，如果缓存不存在，则查询数据库，然后存入redis。

```java
    public Result queryById(Long id) {

        String key = "cache:shop:" + id;
        // 1. Mredis查询商铺缓存
         String shopJson  = stringRedisTemplate.opsForValue().get(key);
        // 2.判断是否存在
        if (StrUtil.isNotBlank(shopJson)) {
//            3.存在，直接返回
            Shop shop = JSONUtil.toBean(shopJson, Shop.class);
            return Result.ok(shop);

        }
        //4.不存在，根据id查询数据库
        Shop shop = getById(id);
        //5.不存在，返回错误
        if (shop == null) {
            return Result.fail("店铺不存在!");
        }
        //6.存在，写入
        stringRedisTemplate.opsForValue().set(key, JSONUtil.toJsonStr(shop));
        //7.返回
        return Result.ok(shop);
        }
```
测试查询：http://localhost:10086/shop/2

### 2.3.缓存更新策略
缓存更新是redis为了节约内存而设计出来的一个东西，主要是因为内存数据宝贵，当我们向redis插入太多数据，此时就可能会导致缓存中的数据过多，所以redis会对部分数据进行更新，或者把他叫为淘汰更合适。
**内存淘汰：**redis自动进行，当redis内存达到咱们设定的max-memery的时候，会自动触发淘汰机制，淘汰掉一些不重要的数据(可以自己设置策略方式)

**超时剔除：**当我们给redis设置了过期时间ttl之后，redis会将超时的数据进行删除，方便咱们继续使用缓存

**主动更新：**我们可以手动调用方法把缓存删掉，通常用于解决缓存和数据库不一致问题

| ///     | 内存淘汰   |  超时剔除  |主动更新  |
| :--------:   | :-----:  | :----:  |:----:  |
| 说明     | 不用自己维护，利用Redis的内存淘汰机制，当内存不足时，自动淘汰部分数据。下次查询时更新缓存 |   给缓存数据添加TTL时间，到期后自动删除缓存。下次查询时更新缓存     |编写业务逻辑，在修改数据库的同时，更新缓存     |
| 一致性        |   差   |   一般   |好     |
| 维护成本        |    无    |  低  |高     |

业务场景：

- 低一致性需求：使用内存淘汰机制。eg：店铺类型的存缓查询
- 高一致性需求：主动更新，并以超时剔除作为兜底方案。eg：店铺详情查询的缓存

#### 2.3.1.数据库缓存不一致方案：（主动更新）
由于我们的**缓存的数据源来自于数据库**,而数据库的**数据是会发生变化的**,因此,如果当数据库中**数据发生变化,而缓存却没有同步**,此时就会有**一致性问题存在**,其后果是:
用户使用缓存中的过时数据,就会产生类似多线程数据安全问题,从而影响业务,产品口碑等;怎么解决呢？有如下几种方案

>* Cache Aside Pattern 人工编码方式：缓存调用者在更新完数据库后再去更新缓存，也称之为双写方案

>* Read/Write Through Pattern : 由系统本身完成，数据库与缓存的问题交由系统本身去处理

>* Write Behind Caching Pattern ：调用者只操作缓存，其他线程去异步处理数据库，实现最终一致

#### 2.3.2.数据库和缓存不一致采用什么方案（主动更新之Cache Aside Pattern ）
综合考虑使用方案一，但是方案一调用者如何处理呢？这里有几个问题

操作缓存和数据库时有三个问题需要考虑：



如果采用第一个方案，那么假设我们每次操作数据库后，都操作缓存，但是中间如果没有人查询，那么这个更新动作实际上只有最后一次生效，中间的更新动作意义并不大，我们可以把缓存删除，等待再次查询时，将缓存中的数据加载出来

* 删除缓存还是更新缓存？
  * 更新缓存：每次更新数据库都更新缓存，无效写操作较多
  * 删除缓存：更新数据库时让缓存失效，查询时再更新缓存

* 如何保证缓存与数据库的操作的同时成功或失败？
  * 单体系统，将缓存与数据库操作放在一个事务
  * 分布式系统，利用TCC等分布式事务方案

应该具体操作缓存还是操作数据库，我们应当是先操作数据库，再删除缓存，原因在于，如果你选择第一种方案，在两个线程并发来访问时，假设线程1先来，他先把缓存删了，此时线程2过来，他查询缓存数据并不存在，此时他写入缓存，当他写入缓存后，线程1再执行更新动作时，实际上写入的就是旧的数据，新的数据被旧数据覆盖了。

* 先操作缓存还是先操作数据库？
  * 先删除缓存，再操作数据库
  * 先操作数据库，再删除缓存(**这个好**）

### 2.4.实现商铺和缓存与数据库双写一致
核心思路如下：

修改ShopController中的业务逻辑，满足下面的需求：

根据id查询店铺时，如果缓存未命中，则查询数据库，将数据库结果写入缓存，并设置超时时间

根据id修改店铺时，先修改数据库，再删除缓存

**修改重点代码1**：修改**ShopService**的queryById方法

**设置redis缓存时添加过期时间**
```java
stringRedisTemplate.opsForValue().set(key, JSONUtil.toJsonStr(shop),30L, TimeUnit.MINUTES);
```
  
  **修改重点代码2**

代码分析：通过之前的淘汰，我们确定了采用删除策略，来解决双写问题，当我们修改了数据之后，然后把缓存中的数据进行删除，查询时发现缓存中没有数据，则会从mysql中加载最新的数据，从而避免数据库和缓存不一致的问题
```java
 @Transactional
    public Result updateById(Shop shop){
        Long id = shop.getId();
        if(id == null){
            return Result.fail("店铺id不能为空");
        }
        // 1.更新数据库
        ShopList.updateById(shop);
        // 2.删除缓存
        stringRedisTemplate.delete(CACHE_SHOP_KEY + id);
        return Result.ok();
    }
```
测试更新 http://localhost:10086/shop
参数：
```json
{
"id":2,
"name":"你看我名字变了吧",
"address":"你看我地址也变了吧"
}
```
### 2.5.缓存穿透问题的解决思路
缓存穿透 ：缓存穿透是指客户端请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。

常见的解决方案有两种：

* 缓存空对象
  * 优点：实现简单，维护方便
  * 缺点：
      * 额外的内存消耗
      * 可能造成短期的不一致
* 布隆过滤
  * 优点：内存占用较少，没有多余key
  * 缺点：
        * 实现复杂
        * 存在误判可能



**缓存空对象思路分析：**当我们客户端访问不存在的数据时，先请求redis，但是此时redis中没有数据，此时会访问到数据库，但是数据库中也没有数据，这个数据穿透了缓存，直击数据库，我们都知道数据库能够承载的并发不如redis这么高，如果大量的请求同时过来访问这种不存在的数据，这些请求就都会访问到数据库，简单的解决方案就是哪怕这个数据在数据库中也不存在，我们也把这个数据存入到redis中去，这样，下次用户过来访问这个不存在的数据，那么在redis中也能找到这个数据就不会进入到缓存了



**布隆过滤：**布隆过滤器其实采用的是哈希思想来解决这个问题，通过一个庞大的二进制数组，走哈希思想去判断当前这个要查询的这个数据是否存在，如果布隆过滤器判断存在，则放行，这个请求会去访问redis，哪怕此时redis中的数据过期了，但是数据库中一定存在这个数据，在数据库中查询出来这个数据后，再将其放入到redis中，

假设布隆过滤器判断这个数据不存在，则直接返回

这种方式优点在于节约内存空间，存在误判，误判原因在于：布隆过滤器走的是哈希思想，只要哈希思想，就可能存在哈希冲突

### 2.6.编码解决商品查询的缓存穿透问题：
核心思路如下：

在原来的逻辑中，我们如果发现这个数据在mysql中不存在，直接就返回404了，这样是会存在缓存穿透问题的

现在的逻辑中：如果这个数据不存在，我们不会返回404 ，还是会把这个数据写入到Redis中，并且将value设置为空，当再次发起查询时，我们如果发现命中之后，判断这个value是否是null，如果是null，则是之前写入的数据，证明是缓存穿透数据，如果不是，则直接返回数据。


**小总结：**

缓存穿透产生的原因是什么？

* 用户请求的数据在缓存中和数据库中都不存在，不断发起这样的请求，给数据库带来巨大压力

缓存穿透的解决方案有哪些？

* 缓存null值
* 布隆过滤
* 增强id的复杂度，避免被猜测id规律
* 做好数据的基础格式校验
* 加强用户权限校验
* 做好热点参数的限流


### 2.7.缓存雪崩问题及解决思路
缓存雪崩：是指在同一时段大量的缓存key同时失效或者Redis服务宕机，导致大量请求到达数据库，带来巨大压力。
解决方案：

* 给不同的Key的TTL添加随机值
* 利用Redis集群提高服务的可用性
* 给缓存业务添加降级限流策略
* 给业务添加多级缓存

### 2.8.缓存击穿问题及解决思路
缓存击穿问题也叫热点Key问题，就是一个被高并发访问并且缓存重建业务较复杂的key突然失效了，无数的请求访问会在瞬间给数据库带来巨大的冲击。

常见的解决方案有两种：

* 互斥锁
* 逻辑过期

逻辑分析：假设线程1在查询缓存之后，本来应该去查询数据库，然后把这个数据重新加载到缓存的，此时只要线程1走完这个逻辑，其他线程就都能从缓存中加载这些数据了，但是假设在线程1没有走完的时候，后续的线程2，线程3，线程4同时过来访问当前这个方法， 那么这些线程都不能从缓存中查询到数据，那么他们就会同一时刻来访问查询缓存，都没查到，接着同一时间去访问数据库，同时的去执行数据库代码，对数据库访问压力过大

**解决方案一**、使用锁来解决：

因为锁能实现互斥性。假设线程过来，只能一个人一个人的来访问数据库，从而避免对于数据库访问压力过大，但这也会影响查询的性能，因为此时会让查询的性能从并行变成了串行，我们可以采用tryLock方法 + double check来解决这样的问题。

假设现在线程1过来访问，他查询缓存没有命中，但是此时他获得到了锁的资源，那么线程1就会一个人去执行逻辑，假设现在线程2过来，线程2在执行过程中，并没有获得到锁，那么线程2就可以进行到休眠，直到线程1把锁释放后，线程2获得到锁，然后再来执行逻辑，此时就能够从缓存中拿到数据了。

解决方案二、逻辑过期方案

方案分析：我们之所以会出现这个缓存击穿问题，主要原因是在于我们对key设置了过期时间，假设我们不设置过期时间，其实就不会有缓存击穿的问题，但是不设置过期时间，这样数据不就一直占用我们内存了吗，我们可以采用逻辑过期方案。

我们把过期时间设置在 redis的value中，注意：这个过期时间并不会直接作用于redis，而是我们后续通过逻辑去处理。假设线程1去查询缓存，然后从value中判断出来当前的数据已经过期了，此时线程1去获得互斥锁，那么其他线程会进行阻塞，获得了锁的线程他会开启一个 线程去进行 以前的重构数据的逻辑，直到新开的线程完成这个逻辑后，才释放锁， 而线程1直接进行返回，假设现在线程3过来访问，由于线程线程2持有着锁，所以线程3无法获得锁，线程3也直接返回数据，只有等到新开的线程2把重建数据构建完后，其他线程才能走返回正确的数据。

这种方案巧妙在于，异步的构建缓存，缺点在于在构建完缓存之前，返回的都是脏数据。


进行对比

**互斥锁方案：**由于保证了互斥性，所以数据一致，且实现简单，因为仅仅只需要加一把锁而已，也没其他的事情需要操心，所以没有额外的内存消耗，缺点在于有锁就有死锁问题的发生，且只能串行执行性能肯定受到影响

**逻辑过期方案：** 线程读取过程中不需要等待，性能好，有一个额外的线程持有锁去进行重构数据，但是在重构数据完成前，其他的线程只能返回之前的数据，且实现起来麻烦


| 解决方案        | 优点   |  缺点  |
| --------   | :----- | :----  |
| 互斥锁     | 1）没有额外的内存消耗<br>2）保证一致性<br>3）实现简单|    1）线程需要等待，性能受影响<br>2）可能有死锁风险  |
| 逻辑过期        |   线程无需等待，性能较好   |   1）不保证一致性<br>2）有额外内存消耗<br>3）实现复杂   |


#### 2.8.1.利用互斥锁解决缓存击穿问题
核心思路：相较于原来从缓存中查询不到数据后直接查询数据库而言，现在的方案是 进行查询之后，如果从缓存没有查询到数据，则进行互斥锁的获取，获取互斥锁后，判断是否获得到了锁，如果没有获得到，则休眠，过一会再进行尝试，直到获取到锁为止，才能进行查询

如果获取到了锁的线程，再去进行查询，查询后将数据写入redis，再释放锁，返回数据，利用互斥锁就能保证只有一个线程去执行操作数据库的逻辑，防止缓存击穿

**操作锁的代码：**
**setnx**:第一次赋值之后，不能被覆盖，相当于获取锁。释放锁就是删掉就好了。
核心思路就是利用redis的setnx方法来表示获取锁，该方法含义是redis中如果没有这个key，则插入成功，返回1，在stringRedisTemplate中返回true，  如果有这个key则插入失败，则返回0，在stringRedisTemplate返回false，我们可以通过true，或者是false，来表示是否有线程成功插入key，成功插入的key的线程我们认为他就是获得到锁的线程。

```java
    private boolean tryLock(String key) {
        Boolean flag = stringRedisTemplate.opsForValue().setIfAbsent(key, "1", 10, TimeUnit.SECONDS);//setnx
        return BooleanUtil.isTrue(flag);//帮助拆箱，如果封装类是null会包空指针异常
    }

    private void unlock(String key) {
        stringRedisTemplate.delete(key);
    }
```

**操作代码：**
```java
 public Shop queryWithMutex(Long id){
        String key = CACHE_SHOP_KEY + id;
        // 1. Mredis查询商铺缓存
        String shopJson  = stringRedisTemplate.opsForValue().get(key);
        // 2.判断是否存在
        if (StrUtil.isNotBlank(shopJson)) {
//            3.存在，直接返回
            return JSONUtil.toBean(shopJson, Shop.class);

        }
        //判断命中的是不是空值，缓存空对象，解决缓存穿透的策略
        if(shopJson != null){
            //返回一个错误信息
            return null;
        }
        //4.实现缓存重建
        //4.1获取互斥锁
        String lockKey = "lock:shop:" + id;
        Shop shop = null;
        try {
            boolean isLock = tryLock(lockKey);
            //4.2判断是否获取成功
            if (!isLock){
                //4.3失败，则休眠或者重试
                Thread.sleep(50);
                return queryWithMutex(id);
            }
            //4.4成功，根据id查询数据库

            //4.不存在，根据id查询数据库
            shop = ShopList.findById(id);
            // 模拟重建的延迟
            Thread.sleep(200);
            //5.不存在，返回错误
            if (shop == null) {
                //缓存空对象，解决缓存穿透
                stringRedisTemplate.opsForValue().set(key, "",CACHE_NULL_TTL, TimeUnit.MINUTES);
                return null;
            }
            //6.存在，写入
            stringRedisTemplate.opsForValue().set(key, JSONUtil.toJsonStr(shop),CACHE_SHOP_TTL, TimeUnit.MINUTES);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }finally {
            //7.释放锁
            unlock(lockKey);
        }
        //8.返回
        return shop;
    }
```

#### 2.8.2.利用逻辑过期解决缓存击穿问题

**需求：修改根据id查询商铺的业务，基于逻辑过期方式来解决缓存击穿问题**

思路分析：当用户开始查询redis时，判断是否命中，如果没有命中则直接返回空数据，不查询数据库，而一旦命中后，将value取出，判断value中的过期时间是否满足，如果没有过期，则直接返回redis中的数据，如果过期，则在开启独立线程后直接返回之前的数据，独立线程去重构数据，重构完成后释放互斥锁。

如果封装数据：因为现在redis中存储的数据的value需要带上过期时间，此时要么你去修改原来的实体类，要么你

**步骤一、**

新建一个实体类，我们采用第二个方案，这个方案，对原来代码没有侵入性。

```
@Data
public class RedisData {
    private LocalDateTime expireTime;
    private Object data;
}
```

**步骤二、**

在**ShopService** 新增此方法，利用单元测试进行缓存预热
```java
    public void saveShop2Redis(Long id,Long expireSeconds) throws InterruptedException {
        Thread.sleep(200);
        //1.查询店铺数据
        Shop shop = ShopList.findById(id);
        //2.封装逻辑过期时间
        RedisData redisData = new RedisData();
        redisData.setData(shop);
        redisData.setExpireTime(LocalDateTime.now().plusSeconds(expireSeconds));
        //3.写入redis
        stringRedisTemplate.opsForValue().set(CACHE_SHOP_KEY + id ,JSONUtil.toJsonStr(redisData));
    }
```

**在测试类中**

```java
@Test
    public void testSaveShop() throws InterruptedException {
        shopService.saveShop2Redis(2l,10l);
    }
```

步骤三：正式代码
**ShopService**
```java
// 创建一个线程池
    private static final ExecutorService CACHE_REBUILD_EXECUTOR = Executors.newFixedThreadPool(10);
    public Shop queryWithLogicalExpire(Long id){
        String key = CACHE_SHOP_KEY + id;
        // 1. Mredis查询商铺缓存
        String shopJson  = stringRedisTemplate.opsForValue().get(key);
        // 2.判断是否存在
        if (StrUtil.isNotBlank(shopJson)) {
//            3.存在，直接返回
            return null;

        }
        //4.命中，需要先把JSON序列化为对象
        RedisData redisData = JSONUtil.toBean(shopJson, RedisData.class);
        Shop shop = JSONUtil.toBean((JSONObject) redisData.getData(), Shop.class);
        LocalDateTime expireTime = redisData.getExpireTime();
        //5.判断是否过期
        if(expireTime.isAfter(LocalDateTime.now())) {
            // 5.1.未过期，直接返回店铺信息
            return shop;
        }
        // 5.2.已过期，需要缓存重建
        // 6.缓存重建
        // 6.1.获取互斥锁
        String lockKey = LOCK_SHOP_KEY + id;
        boolean isLock = tryLock(lockKey);
        // 6.2.判断是否获取锁成功
        if (isLock){
            CACHE_REBUILD_EXECUTOR.submit( ()->{

                try{
                    //重建缓存
                    this.saveShop2Redis(id,20L);
                }catch (Exception e){
                    throw new RuntimeException(e);
                }finally {
                    unlock(lockKey);
                }
            });
        }
        //7.返回
        return shop;


    }
```

### 2.9.封装Redis工具类
基于StringRedisTemplate封装一个缓存工具类，满足下列需求：

* 方法1：将任意Java对象序列化为json并存储在string类型的key中，并且可以设置TTL过期时间
* 方法2：将任意Java对象序列化为json并存储在string类型的key中，并且可以设置逻辑过期时间，用于处理缓

存击穿问题

* 方法3：根据指定的key查询缓存，并反序列化为指定类型，利用缓存空值的方式解决缓存穿透问题
* 方法4：根据指定的key查询缓存，并反序列化为指定类型，需要利用逻辑过期解决缓存击穿问题

将逻辑进行封装
```java

@Slf4j
@Component
public class CacheClient {

    private final StringRedisTemplate stringRedisTemplate;

    private static final ExecutorService CACHE_REBUILD_EXECUTOR = Executors.newFixedThreadPool(10);//创建线程池

    public CacheClient(StringRedisTemplate stringRedisTemplate) {
        this.stringRedisTemplate = stringRedisTemplate;
    }

    /**
     * 序列化java对象
     * @param key 键
     * @param value 被序列化的对象
     * @param time 过期时间
     * @param unit 时间单位
     * @return void
     * @author xuy
     * @date 2022/12/27 17:20
     */
    public void set(String key, Object value, Long time, TimeUnit unit) {
        stringRedisTemplate.opsForValue().set(key, JSONUtil.toJsonStr(value), time, unit);
    }

    /**
     * 逻辑过期 缓存重建
     * @param key 键
     * @param value java 对象
     * @param time 过期时间
     * @param unit 时间单位
     * @return void
     * @author xuy
     * @date 2022/12/27 17:19
     */
    public void setWithLogicalExpire(String key, Object value, Long time, TimeUnit unit) {
        // 设置逻辑过期
        RedisData redisData = new RedisData();
        redisData.setData(value);
        redisData.setExpireTime(LocalDateTime.now().plusSeconds(unit.toSeconds(time)));
        // 写入Redis
        stringRedisTemplate.opsForValue().set(key, JSONUtil.toJsonStr(redisData));
    }

    /**
     * 缓存穿透 用缓存空对象解决
     * @param keyPrefix key的前缀
     * @param id 查询的id
     * @param type 返回值类型
     * @param dbFallback 有参有返回值的函数
     * @param time 过期时间
     * @param unit 时间单位
     * @return R
     * @author xuy
     * @date 2022/12/27 17:24
     */
    public <R,ID> R queryWithPassThrough(
            String keyPrefix, ID id, Class<R> type, Function<ID, R> dbFallback, Long time, TimeUnit unit){
        String key = keyPrefix + id;
        // 1.从redis查询商铺缓存
        String json = stringRedisTemplate.opsForValue().get(key);
        // 2.判断是否存在
        if (StrUtil.isNotBlank(json)) {
            // 3.存在，直接返回
            return JSONUtil.toBean(json, type);
        }
        // 判断命中的是否是空值
        if (json != null) {
            // 返回一个错误信息
            return null;
        }

        // 4.不存在，根据id查询数据库
        R r = dbFallback.apply(id);
        // 5.不存在，返回错误
        if (r == null) {
            // 将空值写入redis
            stringRedisTemplate.opsForValue().set(key, "", CACHE_NULL_TTL, TimeUnit.MINUTES);
            // 返回错误信息
            return null;
        }
        // 6.存在，写入redis
        this.set(key, r, time, unit);
        return r;
    }

    /**
     * 缓存击穿 逻辑过期解决
     * @param keyPrefix key的前缀
     * @param id 查询的id
     * @param type 返回值类型
     * @param dbFallback 有参有返回值的函数
     * @param time 过期时间
     * @param unit 时间单位
     * @return R
     * @author xuy
     * @date 2022/12/27 17:27
     */
    public <R, ID> R queryWithLogicalExpire(
            String keyPrefix, ID id, Class<R> type, Function<ID, R> dbFallback, Long time, TimeUnit unit) {
        String key = keyPrefix + id;
        // 1.从redis查询商铺缓存
        String json = stringRedisTemplate.opsForValue().get(key);
        // 2.判断是否存在
        if (StrUtil.isBlank(json)) {
            // 3.存在，直接返回
            return null;
        }
        // 4.命中，需要先把json反序列化为对象
        RedisData redisData = JSONUtil.toBean(json, RedisData.class);
        R r = JSONUtil.toBean((JSONObject) redisData.getData(), type);
        LocalDateTime expireTime = redisData.getExpireTime();
        // 5.判断是否过期
        if(expireTime.isAfter(LocalDateTime.now())) {
            // 5.1.未过期，直接返回店铺信息
            return r;
        }
        // 5.2.已过期，需要缓存重建
        // 6.缓存重建
        // 6.1.获取互斥锁
        String lockKey = LOCK_SHOP_KEY + id;
        boolean isLock = tryLock(lockKey);
        // 6.2.判断是否获取锁成功
        if (isLock){
            // 6.3.成功，开启独立线程，实现缓存重建
            CACHE_REBUILD_EXECUTOR.submit(() -> {
                try {
                    // 查询数据库
                    R newR = dbFallback.apply(id);
                    // 重建缓存
                    this.setWithLogicalExpire(key, newR, time, unit);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }finally {
                    // 释放锁
                    unlock(lockKey);
                }
            });
        }
        // 6.4.返回过期的商铺信息
        return r;
    }

    /**
     * 缓存击穿 互斥锁解决
     * @param keyPrefix key的前缀
     * @param id 查询的id
     * @param type 返回值类型
     * @param dbFallback 有参有返回值的函数
     * @param time 过期时间
     * @param unit 时间单位
     * @return R
     * @author xuy
     * @date 2022/12/27 17:38
     */
    public <R, ID> R queryWithMutex(
            String keyPrefix, ID id, Class<R> type, Function<ID, R> dbFallback, Long time, TimeUnit unit) {
        String key = keyPrefix + id;
        // 1.从redis查询商铺缓存
        String shopJson = stringRedisTemplate.opsForValue().get(key);
        // 2.判断是否存在
        if (StrUtil.isNotBlank(shopJson)) {
            // 3.存在，直接返回
            return JSONUtil.toBean(shopJson, type);
        }
        // 判断命中的是否是空值
        if (shopJson != null) {
            // 返回一个错误信息
            return null;
        }

        // 4.实现缓存重建
        // 4.1.获取互斥锁
        String lockKey = LOCK_SHOP_KEY + id;
        R r = null;
        try {
            boolean isLock = tryLock(lockKey);
            // 4.2.判断是否获取成功
            if (!isLock) {
                // 4.3.获取锁失败，休眠并重试
                Thread.sleep(50);
                return queryWithMutex(keyPrefix, id, type, dbFallback, time, unit);
            }
            // 4.4.获取锁成功，根据id查询数据库
            r = dbFallback.apply(id);
            // 5.不存在，返回错误
            if (r == null) {
                // 将空值写入redis
                stringRedisTemplate.opsForValue().set(key, "", CACHE_NULL_TTL, TimeUnit.MINUTES);
                // 返回错误信息
                return null;
            }
            // 6.存在，写入redis
            this.set(key, r, time, unit);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }finally {
            // 7.释放锁
            unlock(lockKey);
        }
        // 8.返回
        return r;
    }

    private boolean tryLock(String key) {
        Boolean flag = stringRedisTemplate.opsForValue().setIfAbsent(key, "1", 10, TimeUnit.SECONDS);//setnx
        return BooleanUtil.isTrue(flag);//帮助拆箱，如果封装类是null会包空指针异常
    }

    private void unlock(String key) {
        stringRedisTemplate.delete(key);
    }
}
```

在ShopService中：
```java
  @Resource
    private CacheClient cacheClient;//封装之后的工具类

    public Result queryById(Long id) {
        //解决缓存穿透
        //Shop shop = queryWithPassThrough(id);
        Shop shop = cacheClient.queryWithPassThrough(CACHE_SHOP_KEY, id, Shop.class, shopId -> ShopList.findById(shopId), CACHE_SHOP_TTL, TimeUnit.MINUTES);//封装之后的写法
        //互斥锁解决缓存击穿
        // Shop shop = queryWithMutex(id);
//        Shop shop = cacheClient.queryWithMutex(CACHE_SHOP_KEY, id, Shop.class, shopId -> ShopList.findById(shopId), CACHE_SHOP_TTL, TimeUnit.MINUTES);//封装之后的写法
        //逻辑过期解决缓存击穿
        // Shop shop = queryWithLogicalExpire(id);
//        Shop shop = cacheClient.queryWithLogicalExpire(CACHE_SHOP_KEY, id, Shop.class, shopId -> ShopList.findById(shopId), CACHE_SHOP_TTL, TimeUnit.MINUTES);//封装之后的写法
        if (shop == null) {
            return Result.fail("店铺不存在！");
        }
        return Result.ok(shop);
```

## 3.优惠券秒杀
### 3.1.全局唯一ID
每个店铺都可以发布优惠券：

当用户抢购时，就会生成订单并保存到订单表中，而订单表如果使用数据库自增ID就存在一些问题：

* id的规律性太明显
* 受单表数据量的限制

场景分析：如果我们的id具有太明显的规则，用户或者说商业对手很容易猜测出来我们的一些敏感信息，比如商城在一天时间内，卖出了多少单，这明显不合适。

场景分析二：随着我们商城规模越来越大，mysql的单表的容量不宜超过500W，数据量过大之后，我们要进行拆库拆表，但拆分表了之后，他们从逻辑上讲他们是同一张表，所以他们的id是不能一样的， 于是乎我们需要保证id的唯一性。

**全局ID生成器**，是一种在分布式系统下用来生成全局唯一ID的工具，一般要满足下列特性：
>* 唯一性
>* 高可用
>* 高性能
>* 递增性
>* 安全性

为了增加ID的安全性，我们可以不直接使用Redis自增的数值，而是拼接一些其它信息：
`符号位（0）+时间戳（32bit）+ 序列号（32bit）`

ID的组成部分：

* 符号位：1bit，永远为零
* 时间戳：31bit，以秒为单位，可以使用69年
* 序列号：32bit，秒内的计数器，支持每秒产生2^32个不同ID

### 3.2.Redis实现全局唯一Id

```java
@Component
public class RedisIdWorker {
    /**
     * 开始时间戳
     */
    private static final long BEGIN_TIMESTAMP = 1640995200L;
    /**
     * 序列号的位数
     */
    private static final int COUNT_BITS = 32;

    private StringRedisTemplate stringRedisTemplate;

    public RedisIdWorker(StringRedisTemplate stringRedisTemplate) {
        this.stringRedisTemplate = stringRedisTemplate;
    }

    public long nextId(String keyPrefix) {
        // 1.生成时间戳
        LocalDateTime now = LocalDateTime.now();
        long nowSecond = now.toEpochSecond(ZoneOffset.UTC);
        long timestamp = nowSecond - BEGIN_TIMESTAMP;

        // 2.生成序列号
        // 2.1.获取当前日期，精确到天
        String date = now.format(DateTimeFormatter.ofPattern("yyyy:MM:dd"));
        // 2.2.自增长
        long count = stringRedisTemplate.opsForValue().increment("icr:" + keyPrefix + ":" + date);

        // 3.拼接并返回
        return timestamp << COUNT_BITS | count;//时间戳左移32位。或运算填充序列号
    }
}
```
测试类：
```java
 @Test
    public void testRedisIdWorker() throws InterruptedException {
        CountDownLatch latch = new CountDownLatch(300);
        Runnable task = ()->{
            for (int i = 0; i < 100; i++) {
                System.out.println("id:"+redisIdWorker.nextId("order"));
            }
            latch.countDown();
        };
        long begin = System.currentTimeMillis();
        for (int i = 0; i < 300; i++) {
            es.submit(task);//线程池是异步的，得借助CountDownLatch
        }
        latch.await();//等待所有countdown结束
        long end = System.currentTimeMillis();
        System.out.println("time:"+(end - begin));
    }
```
知识小贴士：关于countdownlatch

countdownlatch名为信号枪：主要的作用是同步协调在多线程的等待于唤醒问题

我们如果没有CountDownLatch ，那么由于程序是异步的，当异步程序没有执行完时，主线程就已经执行完了，然后我们期望的是分线程全部走完之后，主线程再走，所以我们此时需要使用到CountDownLatch

CountDownLatch 中有两个最重要的方法

1、countDown

2、await

await 方法 是阻塞方法，我们担心分线程没有执行完时，main线程就先执行，所以使用await可以让main线程阻塞，那么什么时候main线程不再阻塞呢？当CountDownLatch  内部维护的 变量变为0时，就不再阻塞，直接放行，那么什么时候CountDownLatch   维护的变量变为0 呢，我们只需要调用一次countDown ，内部变量就减少1，我们让分线程和变量绑定， 执行完一个分线程就减少一个变量，当分线程全部走完，CountDownLatch 维护的变量就是0，此时await就不再阻塞，统计出来的时间也就是所有分线程执行完后的时间。


### 3.3.添加优惠券
每个店铺都可以发布优惠券，分为平价券和特价券。平价券可以任意购买，而特价券需要秒杀抢购：
平价优惠券表：优惠券的基本信息，优惠金额、使用规则等。
特价优惠券表：优惠券的库存、开始抢购时间，结束抢购时间。特价优惠券才需要填写这些信息

平价卷由于优惠力度并不是很大，所以是可以任意领取

而代金券由于优惠力度大，所以像第二种卷，就得限制数量，从表结构上也能看出，特价卷除了具有优惠卷的基本信息以外，还具有库存，抢购时间，结束时间等等字段
**新增普通卷代码：  **
**VoucherController**
```java
 @PostMapping
    public Result addVoucher(@RequestBody Voucher voucher) {
        VoucherList.add(voucher);
        return Result.ok(voucher.getId());
    }
```

**新增秒杀卷代码：**

**VoucherController**
```java
@PostMapping("seckill")
    public Result addSeckillVoucher(@RequestBody Voucher voucher) {
        voucherService.addSeckillVoucher(voucher);
        return Result.ok(voucher.getId());
    }
```

**VoucherService**
```java
    //@Transactional
    public void addSeckillVoucher(Voucher voucher) {
        // 保存优惠券
        VoucherList.add(voucher);
        // 保存秒杀信息
        SeckillVoucher seckillVoucher = new SeckillVoucher();
        seckillVoucher.setVoucherId(voucher.getId());
        seckillVoucher.setStock(voucher.getStock());
        seckillVoucher.setBeginTime(voucher.getBeginTime());
        seckillVoucher.setEndTime(voucher.getEndTime());
        SeckillVoucherList.add(seckillVoucher);
        // 保存秒杀库存到Redis中
        stringRedisTemplate.opsForValue().set(SECKILL_STOCK_KEY + voucher.getId(), voucher.getStock().toString());
    }
```
测试：http://localhost:10086/voucher/seckill
参数：
```json
{
"id": 2,
"shopId": 2,
"titile": "一百元代金券",
"subTitle": "周一至周日均可以使用",
"rules": "全场通用\\n无需预约\\n可无限叠加",
"payValue": 8000,
"actualValue": 10000,
"type": 1,
"stock": 100,
"beginTime": "2022-12-26T10:09:17",
"endTime": "2023-12-26T10:09:17"
}
```
### 3.4.实现秒杀下单(基础逻辑）

秒杀下单应该思考的内容：

下单时需要判断两点：

* 秒杀是否开始或结束，如果尚未开始或已经结束则无法下单
* 库存是否充足，不足则无法下单

下单核心逻辑分析：

当用户开始进行下单，我们应当去查询优惠卷信息，查询到优惠卷信息，判断是否满足秒杀条件

比如时间是否充足，如果时间充足，则进一步判断库存是否足够，如果两者都满足，则扣减库存，创建订单，然后返回订单id，如果有一个条件不满足则直接结束。

VoucherOrderService

```java
 public Result seckillVoucher(Long voucherId) {
        // 1.查询优惠券
        SeckillVoucher voucher = SeckillVoucherList.findById(voucherId);
        // 2.判断秒杀是否开始
        if (voucher.getBeginTime().isAfter(LocalDateTime.now())) {
            // 尚未开始
            return Result.fail("秒杀尚未开始！");
        }
        // 3.判断秒杀是否已经结束
        if (voucher.getEndTime().isBefore(LocalDateTime.now())) {
            // 尚未开始
            return Result.fail("秒杀已经结束！");
        }
        // 4.判断库存是否充足
        if (voucher.getStock() < 1) {
            // 库存不足
            return Result.fail("库存不足！");
        }
        //5，扣减库存
        voucher.setStock(voucher.getStock()-1);
        Boolean success = SeckillVoucherList.updateById(voucher);
        if (!success) {
            //扣减库存
            return Result.fail("库存不足！");
        }
        //6.创建订单
        VoucherOrder voucherOrder = new VoucherOrder();
        // 6.1.订单id
        long orderId = redisIdWorker.nextId("order");
        voucherOrder.setId(orderId);
        // 6.2.用户id
        Long stuId = StudentHolder.getStudent().getId();
        voucherOrder.setUserId(stuId);
        // 6.3.代金券id
        voucherOrder.setVoucherId(voucherId);
        //        创建优惠券订单
        VoucherOrderList.add(voucherOrder);
        return Result.ok(orderId);
    }
```
测试：http://localhost:10086/voucher-order/seckill/2
### 3.5.库存超卖问题分析
有关超卖问题分析：在我们原有代码中是这么写的
```java
 // 4.判断库存是否充足
        if (voucher.getStock() < 1) {
            // 库存不足
            return Result.fail("库存不足！");
        }
        //5，扣减库存
        voucher.setStock(voucher.getStock()-1);
        Boolean success = SeckillVoucherList.updateById(voucher);
        if (!success) {
            //扣减库存
            return Result.fail("库存不足！");
        }
```
假设线程1过来查询库存，判断出来库存大于1，正准备去扣减库存，但是还没有来得及去扣减，此时线程2过来，线程2也去查询库存，发现这个数量一定也大于1，那么这两个线程都会去扣减库存，最终多个线程相当于一起去扣减库存，此时就会出现库存的超卖问题。

超卖问题是典型的多线程安全问题，针对这一问题的常见解决方案就是加锁：而对于加锁，我们通常有两种解决方案：

**悲观锁：**

 悲观锁可以实现对于数据的串行化执行，比如syn，和lock都是悲观锁的代表，同时，悲观锁中又可以再细分为公平锁，非公平锁，可重入锁，等等

**乐观锁：**

  乐观锁：会有一个版本号，每次操作数据会对版本号+1，再提交回数据时，会去校验是否比之前的版本大1 ，如果大1 ，则进行操作成功，这套机制的核心逻辑在于，如果在操作过程中，版本号只比原来大1 ，那么就意味着操作过程中没有人对他进行过修改，他的操作就是安全的，如果不大1，则数据被修改过，当然乐观锁还有一些变种的处理方式比如cas

  乐观锁的典型代表：就是cas，利用cas进行无锁化机制加锁，var5 是操作前读取的内存值，while中的var1+var2 是预估值，如果预估值 == 内存值，则代表中间没有被人修改过，此时就将新值去替换 内存值

  其中do while 是为了在操作失败时，再次进行自旋操作，即把之前的逻辑再操作一次。
  
```java
int var5;
do {
    var5 = this.getIntVolatile(var1, var2);
} while(!this.compareAndSwapInt(var1, var2, var5, var5 + var4));

return var5;
```

**课程中的使用方式：**

课程中的使用方式是没有像cas一样带自旋的操作，也没有对version的版本号+1 ，他的操作逻辑是在操作时，对版本号进行+1 操作，然后要求version 如果是1 的情况下，才能操作，那么第一个线程在操作后，数据库中的version变成了2，但是他自己满足version=1 ，所以没有问题，此时线程2执行，线程2 最后也需要加上条件version =1 ，但是现在由于线程1已经操作过了，所以线程2，操作时就不满足version=1 的条件了，所以线程2无法执行成功


### 3.6.乐观锁解决超卖问题
**修改代码方案一、**

VoucherOrderService 在扣减库存时，改为下面SQL语句的意思：

```sql
update table set stock = stock -1 where id = ？ and stock = ?
```

核心含义是：只要我扣减库存时的库存和之前我查询到的库存是一样的，就意味着没有人在中间修改过库存，那么此时就是安全的，但是以上这种方式通过测试发现会有很多失败的情况，失败的原因在于：在使用乐观锁过程中假设100个线程同时都拿到了100的库存，然后大家一起去进行扣减，但是100个人中只有1个人能扣减成功，其他的人在处理时，他们在扣减时，库存已经被修改过了，所以此时其他线程都会失败

**修改代码方案二、**

之前的方式要修改前后都保持一致，但是这样我们分析过，成功的概率太低，所以我们的乐观锁需要变一下，改成下面SQL语句的意思

```sql
update table set stock = stock -1 where id = ？ and stock > 0
```

**知识小扩展：**（暂时看不懂）
针对cas中的自旋压力过大，我们可以使用Longaddr这个类去解决

Java8 提供的一个对AtomicLong改进后的一个类，LongAdder

大量线程并发更新一个原子性的时候，天然的问题就是自旋，会导致并发性问题，当然这也比我们直接使用syn来的好

所以利用这么一个类，LongAdder来进行优化

如果获取某个值，则会对cell和base的值进行递增，最后返回一个完整的值


### 3.7.优惠券秒杀-一人一单
需求：修改秒杀业务，要求同一个优惠券，一个用户只能下一单

**现在的问题在于：**

优惠卷是为了引流，但是目前的情况是，一个人可以无限制的抢这个优惠卷，所以我们应当增加一层逻辑，让一个用户只能下一个单，而不是让一个用户下多个单

具体操作逻辑如下：比如时间是否充足，如果时间充足，则进一步判断库存是否足够，然后再根据优惠卷id和用户id查询是否已经下过这个订单，如果下过这个订单，则不再下单，否则进行下单

**初步代码**
```java
    @Transactional
public Result seckillVoucher(Long voucherId) {
        // 1.查询优惠券
        SeckillVoucher voucher = SeckillVoucherList.findById(voucherId);
        // 2.判断秒杀是否开始
        if (voucher.getBeginTime().isAfter(LocalDateTime.now())) {
            // 尚未开始
            return Result.fail("秒杀尚未开始！");
        }
        // 3.判断秒杀是否已经结束
        if (voucher.getEndTime().isBefore(LocalDateTime.now())) {
            // 尚未开始
            return Result.fail("秒杀已经结束！");
        }
        // 4.判断库存是否充足
        if (voucher.getStock() < 1) {
            // 库存不足
            return Result.fail("库存不足！");
        }
        Long stuId = StudentHolder.getStudent().getId();
        // TODO 判断用户是否获取过优惠券
        VoucherOrder order = VoucherOrderList.findById(voucherId, stuId);
        if (order != null){
            // 用户已经购买过了
            return Result.fail("用户已经购买过一次！");
        }
        //5，扣减库存
        if(voucher.getStock() > 0){
            voucher.setStock(voucher.getStock()-1);
            Boolean success = SeckillVoucherList.updateById(voucher);
            if (!success) {
                //扣减库存
                return Result.fail("库存不足！");
            }
        }
        //6.创建订单
        VoucherOrder voucherOrder = new VoucherOrder();
        // 6.1.订单id
        long orderId = redisIdWorker.nextId("order");
        voucherOrder.setId(orderId);
        // 6.2.用户id
        voucherOrder.setUserId(stuId);
        // 6.3.代金券id
        voucherOrder.setVoucherId(voucherId);
//        创建优惠券订单
        VoucherOrderList.add(voucherOrder);
        System.out.println(SeckillVoucherList.findById(voucherId));//剩下的订单
        return Result.ok(orderId);
    }
```
**存在问题：**现在的问题还是和之前一样，并发过来，查询数据库，都不存在订单，所以我们还是需要加锁，但是乐观锁比较适合更新数据，而现在是插入数据，所以我们需要使用悲观锁操作

**注意：**在这里提到了非常多的问题，我们需要慢慢的来思考，首先我们的初始方案是封装了一个createVoucherOrder方法，同时为了确保他线程安全，在方法上添加了一把synchronized 锁

```java
    @Transactional
public synchronized Result createVoucherOrder(Long voucherId) {
        // 5.1.查询订单
        Long stuId = StudentHolder.getStudent().getId();
        VoucherOrder order = VoucherOrderList.findById(voucherId, stuId);
        // 5.2.判断是否存在
        if (order != null ) {
            // 用户已经购买过了
            return Result.fail("用户已经购买过一次！");
        }
        // 6.扣减库存
        SeckillVoucher voucher = SeckillVoucherList.findById(voucherId);
        if(voucher.getStock() > 0){
            voucher.setStock(voucher.getStock()-1);
            Boolean success = SeckillVoucherList.updateById(voucher);
            if (!success) {
                // 扣减失败
                return Result.fail("库存不足！");
            }
        }
        // 7.创建订单
        VoucherOrder voucherOrder = new VoucherOrder();
        // 7.1.订单id
        long orderId = redisIdWorker.nextId("order");
        voucherOrder.setId(orderId);
        // 7.2.用户id
        voucherOrder.setUserId(stuId);
        // 7.3.代金券id
        voucherOrder.setVoucherId(voucherId);
        VoucherOrderList.add(voucherOrder);
        // 7.返回订单id
        return Result.ok(orderId);
    }
```
，但是这样添加锁，锁的粒度太粗了，在使用锁过程中，控制**锁粒度** 是一个非常重要的事情，因为如果锁的粒度太大，会导致每个线程进来都会锁住，所以我们需要去控制锁的粒度，以下这段代码需要修改为：
intern() 这个方法是从常量池中拿到数据，如果我们直接使用stuId.toString() 他拿到的对象实际上是不同的对象，new出来的对象，我们使用锁必须保证锁必须是同一把，所以我们需要使用intern()方法

```java
    @Transactional
    public Result createVoucherOrder(Long voucherId) {
        Long stuId = StudentHolder.getStudent().getId();
        synchronized (stuId.toString().intern()){
            // 5.1.查询订单
            VoucherOrder order = VoucherOrderList.findById(voucherId, stuId);
            // 5.2.判断是否存在
            if (order != null ) {
                // 用户已经购买过了
                return Result.fail("用户已经购买过一次！");
            }
            // 6.扣减库存
            SeckillVoucher voucher = SeckillVoucherList.findById(voucherId);
            if(voucher.getStock() > 0){
                voucher.setStock(voucher.getStock()-1);
                Boolean success = SeckillVoucherList.updateById(voucher);
                if (!success) {
                    // 扣减失败
                    return Result.fail("库存不足！");
                }
            }
            // 7.创建订单
            VoucherOrder voucherOrder = new VoucherOrder();
            // 7.1.订单id
            long orderId = redisIdWorker.nextId("order");
            voucherOrder.setId(orderId);
            // 7.2.用户id
            voucherOrder.setUserId(stuId);
            // 7.3.代金券id
            voucherOrder.setVoucherId(voucherId);
            VoucherOrderList.add(voucherOrder);
            // 7.返回订单id
            return Result.ok(orderId);
        }
    }
```

但是以上代码还是存在问题，问题的原因在于当前方法被spring的事务控制，如果你在方法内部加锁，可能会导致当前方法事务还没有提交，但是锁已经释放也会导致问题，所以我们选择将当前方法整体包裹起来，确保事务不会出现问题：如下：

在seckillVoucher 方法中，添加以下逻辑，这样就能保证事务的特性，同时也控制了锁的粒度
```java
synchronized (stuId.toString().intern()) {
            return this.createVoucherOrder(voucherId);
        }
```

但是以上做法依然有问题，因为你调用的方法，其实是this.的方式调用的，事务想要生效，还得利用代理来生效，所以这个地方，我们需要获得原始的事务对象， 来操作事务
```java
        synchronized (stuId.toString().intern()) {
            //获取代理对象(事务)
            VoucherOrderService proxy = (VoucherOrderService) AopContext.currentProxy();
            return proxy.createVoucherOrder(voucherId);
        }
```

### 3.8.集群环境下的并发问题
通过加锁可以解决在单机情况下的一人一单安全问题，但是在集群模式下就不行了。

**有关锁失效原因分析**

由于现在我们部署了多个tomcat，每个tomcat都有一个属于自己的jvm，那么假设在服务器A的tomcat内部，有两个线程，这两个线程由于使用的是同一份代码，那么他们的锁对象是同一个，是可以实现互斥的，但是如果现在是服务器B的tomcat内部，又有两个线程，但是他们的锁对象写的虽然和服务器A一样，但是锁对象却不是同一个，所以线程3和线程4可以实现互斥，但是却无法和线程1和线程2实现互斥，这就是 集群环境下，syn锁失效的原因，在这种情况下，我们就需要使用分布式锁来解决这个问题。

## 4.分布式锁
### 4.1.基本原理和实现方式对比

分布式锁：满足分布式系统或集群模式下多进程可见并且互斥的锁。

分布式锁的核心思想就是让大家都使用同一把锁，只要大家使用的是同一把锁，那么我们就能锁住线程，不让线程进行，让程序串行执行，这就是分布式锁的核心思路

那么分布式锁他应该满足一些什么样的条件呢？

可见性：多个线程都能看到相同的结果，注意：这个地方说的可见性并不是并发编程中指的内存可见性，只是说多个进程之间都能感知到变化的意思

互斥：互斥是分布式锁的最基本的条件，使得程序串行执行

高可用：程序不易崩溃，时时刻刻都保证较高的可用性

高性能：由于加锁本身就让性能降低，所有对于分布式锁本身需要他就较高的加锁性能和释放锁性能

安全性：安全也是程序中必不可少的一环

常见的分布式锁有三种

Mysql：mysql本身就带有锁机制，但是由于mysql性能本身一般，所以采用分布式锁的情况下，其实使用mysql作为分布式锁比较少见

Redis：redis作为分布式锁是非常常见的一种使用方式，现在企业级开发中基本都使用redis或者zookeeper作为分布式锁，利用setnx这个方法，如果插入key成功，则表示获得到了锁，如果有人插入成功，其他人插入失败则表示无法获得到锁，利用这套逻辑来实现分布式锁

Zookeeper：zookeeper也是企业级开发中较好的一个实现分布式锁的方案
| \        | MySQL   | Redis |Zookeeper|
| --------   | -----:  | :----:  |----:|
| 互斥     | 利用mysql本身的互斥锁机制 |   利用setnx这样的互斥命令     |利用节点的唯一性和有序性实现互斥|
| 高可用        |   好   |   好   |好|
| 高性能        |    一般    |  好  |一般|
| 安全性        |    断开连接，自动释放锁    | 利用锁超时时间，到期释放  |临时节点，断开连接自动释放|

### 4.2.Redis分布式锁的实现核心思路
实现分布式锁时需要实现的两个基本方法：

* 获取锁：

  * 互斥：确保只能有一个线程获取锁
  * 非阻塞：尝试一次，成功返回true，失败返回false

* 释放锁：

  * 手动释放
  * 超时释放：获取锁时添加一个超时时间
  * `DEL key`释放锁，删除即可


核心思路：
我们利用redis 的setNx方法，当有多个线程进入时，我们就利用该方法，第一个线程进入时，redis 中就有这个key了，返回了1，如果结果是1，则表示他抢到了锁，那么他去执行业务，然后再删除锁，退出锁逻辑，没有抢到锁的哥们，等待一定时间后重试即可。
  
### 4.3.实现分布式锁版本一

* 加锁逻辑

```java
public interface ILock {
    /**
     * 尝试获取锁
     * @param timeoutSec 锁持有的超时时间，过期后自动释放
     * @return true代表获取锁成功; false代表获取锁失败
     */
    boolean tryLock(long timeoutSec);

    /**
     * 释放锁
     */
    void unlock();
}
```

**SimpleRedisLock**

利用setnx方法进行加锁，同时增加过期时间，防止死锁，此方法可以保证加锁和增加过期时间具有原子性。
```java
private static final String KEY_PREFIX="lock:";
@Override
public boolean tryLock(long timeoutSec) {
    // 获取线程标示
    String threadId = Thread.currentThread().getId();
    // 获取锁
    Boolean success = stringRedisTemplate.opsForValue()
            .setIfAbsent(KEY_PREFIX + name, threadId + "", timeoutSec, TimeUnit.SECONDS);
    return Boolean.TRUE.equals(success);
}
```
* 释放锁逻辑

SimpleRedisLock

释放锁，防止删除别人的锁
```java
public void unlock() {
    //通过del删除锁
    stringRedisTemplate.delete(KEY_PREFIX + name);
}
```
* 修改业务代码
```java
  @Override
    public Result seckillVoucher(Long voucherId) {
        // 1.查询优惠券
        SeckillVoucher voucher = seckillVoucherService.getById(voucherId);
        // 2.判断秒杀是否开始
        if (voucher.getBeginTime().isAfter(LocalDateTime.now())) {
            // 尚未开始
            return Result.fail("秒杀尚未开始！");
        }
        // 3.判断秒杀是否已经结束
        if (voucher.getEndTime().isBefore(LocalDateTime.now())) {
            // 尚未开始
            return Result.fail("秒杀已经结束！");
        }
        // 4.判断库存是否充足
        if (voucher.getStock() < 1) {
            // 库存不足
            return Result.fail("库存不足！");
        }
        Long userId = UserHolder.getUser().getId();
        //创建锁对象(新增代码)
        SimpleRedisLock lock = new SimpleRedisLock("order:" + userId, stringRedisTemplate);
        //获取锁对象
        boolean isLock = lock.tryLock(1200);
		//加锁失败
        if (!isLock) {
            return Result.fail("不允许重复下单");
        }
        try {
            //获取代理对象(事务)
            VoucherOrderService proxy = (VoucherOrderService) AopContext.currentProxy();
            return proxy.createVoucherOrder(voucherId);
        } finally {
            //释放锁
            lock.unlock();
        }
    }
```
  
