import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as a,o as t}from"./app-CUXwiXlL.js";const n={};function l(o,e){return t(),r("div",null,e[0]||(e[0]=[a('<h1 id="spring-应用上下文生命周期" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文生命周期"><span>Spring 应用上下文生命周期</span></a></h1><h2 id="spring-应用上下文启动准备阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文启动准备阶段"><span>Spring 应用上下文启动准备阶段</span></a></h2><p>AbstractApplicationContext#prepareRefresh() 方法</p><ul><li>启动时间 - startupDate</li><li>状态标识 - closed(false)、active(true)</li><li>初始化 PropertySources - initPropertySources()</li><li>检验 Environment 中必须属性</li><li>初始化事件监听器集合</li><li>初始化早期 Spring 事件集合</li></ul><h2 id="beanfactory-创建阶段" tabindex="-1"><a class="header-anchor" href="#beanfactory-创建阶段"><span>BeanFactory 创建阶段</span></a></h2><p>AbstractApplicationContext#obtainFreshBeanFactory() 方法</p><ul><li>刷新 Spring 应用上下文底层 BeanFactory - refreshBeanFactory() <ul><li>销毁或关闭 BeanFactory，如果已存在的话</li><li>创建 BeanFactory - createBeanFactory()</li><li>设置 BeanFactory Id</li><li>设置“是否允许 BeanDefinition 重复定义” - customizeBeanFactory(DefaultListableBeanFactory)</li><li>设置“是否允许循环引用（依赖）” - customizeBeanFactory(DefaultListableBeanFactory)</li><li>加载 BeanDefinition - loadBeanDefinitions(DefaultListableBeanFactory) 方法</li><li>关联新建 BeanFactory 到 Spring 应用上下文</li></ul></li><li>返回 Spring 应用上下文底层 BeanFactory - getBeanFactory()</li></ul><h2 id="beanfactory-准备阶段" tabindex="-1"><a class="header-anchor" href="#beanfactory-准备阶段"><span>BeanFactory 准备阶段</span></a></h2><p>AbstractApplicationContext#prepareBeanFactory(ConfigurableListableBeanFactory) 方法</p><ul><li>关联 ClassLoader</li><li>设置 Bean 表达式处理器</li><li>添加 PropertyEditorRegistrar 实现 - ResourceEditorRegistrar</li><li>添加 Aware 回调接口 BeanPostProcessor 实现 - ApplicationContextAwareProcessor</li><li>忽略 Aware 回调接口作为依赖注入接口</li><li>注册 ResolvableDependency 对象 - BeanFactory、ResourceLoader、ApplicationEventPublisher 以及 ApplicationContext</li><li>注册 ApplicationListenerDetector 对象</li><li>注册 LoadTimeWeaverAwareProcessor 对象</li><li>注册单例对象 - Environment、Java System Properties 以及 OS 环境变量</li></ul><h2 id="beanfactory-后置处理阶段" tabindex="-1"><a class="header-anchor" href="#beanfactory-后置处理阶段"><span>BeanFactory 后置处理阶段</span></a></h2><ul><li>AbstractApplicationContext#postProcessBeanFactory(ConfigurableListableBeanFactory) 方法 <ul><li>由子类覆盖该方法</li></ul></li><li>AbstractApplicationContext#invokeBeanFactoryPostProcessors(ConfigurableListableBeanFactory 方法 <ul><li>调用 BeanFactoryPostProcessor 或 BeanDefinitionRegistry 后置处理方法</li><li>注册 LoadTimeWeaverAwareProcessor 对象</li></ul></li></ul><h2 id="beanfactory-注册-beanpostprocessor-阶段" tabindex="-1"><a class="header-anchor" href="#beanfactory-注册-beanpostprocessor-阶段"><span>BeanFactory 注册 BeanPostProcessor 阶段</span></a></h2><p>AbstractApplicationContext#registerBeanPostProcessors(ConfigurableListableBeanFactory) 方法</p><ul><li>注册 PriorityOrdered 类型的 BeanPostProcessor Beans</li><li>注册 Ordered 类型的 BeanPostProcessor Beans</li><li>注册普通 BeanPostProcessor Beans</li><li>注册 MergedBeanDefinitionPostProcessor Beans</li><li>注册 ApplicationListenerDetector 对象</li></ul><h2 id="初始化內建-bean-messagesource" tabindex="-1"><a class="header-anchor" href="#初始化內建-bean-messagesource"><span>初始化內建 Bean：MessageSource</span></a></h2><p>AbstractApplicationContext#initMessageSource() 方法</p><h2 id="初始化內建-bean-spring-事件广播器" tabindex="-1"><a class="header-anchor" href="#初始化內建-bean-spring-事件广播器"><span>初始化內建 Bean：Spring 事件广播器</span></a></h2><p>AbstractApplicationContext#initApplicationEventMulticaster() 方法</p><h2 id="spring-应用上下文刷新阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文刷新阶段"><span>Spring 应用上下文刷新阶段</span></a></h2><p>AbstractApplicationContext#onRefresh() 方法</p><p>子类覆盖该方法</p><ul><li>org.springframework.web.context.support.AbstractRefreshableWebApplicationContext#onRefresh()</li><li>org.springframework.web.context.support.GenericWebApplicationContext#onRefresh()</li><li>org.springframework.boot.web.reactive.context.ReactiveWebServerApplicationContext#onRefresh()</li><li>org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#onRefresh()</li><li>org.springframework.web.context.support.StaticWebApplicationContext#onRefresh()</li></ul><h2 id="spring-事件监听器注册阶段" tabindex="-1"><a class="header-anchor" href="#spring-事件监听器注册阶段"><span>Spring 事件监听器注册阶段</span></a></h2><p>AbstractApplicationContext#registerListeners() 方法</p><ul><li>添加当前应用上下文所关联的 ApplicationListener 对象（集合）</li><li>添加 BeanFactory 所注册 ApplicationListener Beans</li><li>广播早期 Spring 事件</li></ul><h2 id="beanfactory-初始化完成阶段" tabindex="-1"><a class="header-anchor" href="#beanfactory-初始化完成阶段"><span>BeanFactory 初始化完成阶段</span></a></h2><p>AbstractApplicationContext#finishBeanFactoryInitialization(ConfigurableListableBeanFactory) 方法</p><ul><li>BeanFactory 关联 ConversionService Bean，如果存在</li><li>添加 StringValueResolver 对象</li><li>依赖查找 LoadTimeWeaverAware Bean</li><li>BeanFactory 临时 ClassLoader 置为 null</li><li>BeanFactory 冻结配置</li><li>BeanFactory 初始化非延迟单例 Beans</li></ul><h2 id="spring-应用上下刷新完成阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下刷新完成阶段"><span>Spring 应用上下刷新完成阶段</span></a></h2><p>AbstractApplicationContext#finishRefresh() 方法</p><ul><li>清除 ResourceLoader 缓存 - clearResourceCaches() @since 5.0</li><li>初始化 LifecycleProcessor 对象 - initLifecycleProcessor()</li><li>调用 LifecycleProcessor#onRefresh() 方法</li><li>发布 Spring 应用上下文已刷新事件 - ContextRefreshedEvent</li><li>向 MBeanServer 托管 Live Beans</li></ul><h2 id="spring-应用上下文启动阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文启动阶段"><span>Spring 应用上下文启动阶段</span></a></h2><p>AbstractApplicationContext#start() 方法</p><ul><li>启动 LifecycleProcessor <ul><li>依赖查找 Lifecycle Beans</li><li>启动 Lifecycle Beans</li></ul></li><li>发布 Spring 应用上下文已启动事件 - ContextStartedEvent</li></ul><h2 id="spring-应用上下文停止阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文停止阶段"><span>Spring 应用上下文停止阶段</span></a></h2><p>AbstractApplicationContext#stop() 方法</p><ul><li>停止 LifecycleProcessor <ul><li>依赖查找 Lifecycle Beans</li><li>停止 Lifecycle Beans</li></ul></li><li>发布 Spring 应用上下文已停止事件 - ContextStoppedEvent</li></ul><h2 id="spring-应用上下文关闭阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文关闭阶段"><span>Spring 应用上下文关闭阶段</span></a></h2><p>AbstractApplicationContext#close() 方法</p><ul><li>状态标识：active(false)、closed(true)</li><li>Live Beans JMX 撤销托管 <ul><li>LiveBeansView.unregisterApplicationContext(ConfigurableApplicationContext)</li></ul></li><li>发布 Spring 应用上下文已关闭事件 - ContextClosedEvent</li><li>关闭 LifecycleProcessor <ul><li>依赖查找 Lifecycle Beans</li><li>停止 Lifecycle Beans</li></ul></li><li>销毁 Spring Beans</li><li>关闭 BeanFactory</li><li>回调 onClose()</li><li>注册 Shutdown Hook 线程（如果曾注册）</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p><strong>Spring 应用上下文生命周期有哪些阶段</strong>？</p><ul><li>刷新阶段 - ConfigurableApplicationContext#refresh()</li><li>启动阶段 - ConfigurableApplicationContext#start()</li><li>停止阶段 - ConfigurableApplicationContext#stop()</li><li>关闭阶段 - ConfigurableApplicationContext#close()</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans" target="_blank" rel="noopener noreferrer">Spring 官方文档之 Core Technologies</a></li><li><a href="https://time.geekbang.org/course/intro/265" target="_blank" rel="noopener noreferrer">《小马哥讲 Spring 核心编程思想》</a></li></ul>',46)]))}const c=i(n,[["render",l],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/pages/ad472e/","title":"Spring 应用上下文生命周期","lang":"zh-CN","frontmatter":{"title":"Spring 应用上下文生命周期","date":"2022-12-23T09:58:09.000Z","order":"09","categories":["Java","框架","Spring","Spring核心"],"tags":["Java","框架","Spring"],"permalink":"/pages/ad472e/","description":"Spring 应用上下文生命周期 Spring 应用上下文启动准备阶段 AbstractApplicationContext#prepareRefresh() 方法 启动时间 - startupDate 状态标识 - closed(false)、active(true) 初始化 PropertySources - initPropertySources...","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/pages/ad472e/"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"Spring 应用上下文生命周期"}],["meta",{"property":"og:description","content":"Spring 应用上下文生命周期 Spring 应用上下文启动准备阶段 AbstractApplicationContext#prepareRefresh() 方法 启动时间 - startupDate 状态标识 - closed(false)、active(true) 初始化 PropertySources - initPropertySources..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-30T15:51:18.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2022-12-23T09:58:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-30T15:51:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 应用上下文生命周期\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-23T09:58:09.000Z\\",\\"dateModified\\":\\"2024-12-30T15:51:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"Spring 应用上下文启动准备阶段","slug":"spring-应用上下文启动准备阶段","link":"#spring-应用上下文启动准备阶段","children":[]},{"level":2,"title":"BeanFactory 创建阶段","slug":"beanfactory-创建阶段","link":"#beanfactory-创建阶段","children":[]},{"level":2,"title":"BeanFactory 准备阶段","slug":"beanfactory-准备阶段","link":"#beanfactory-准备阶段","children":[]},{"level":2,"title":"BeanFactory 后置处理阶段","slug":"beanfactory-后置处理阶段","link":"#beanfactory-后置处理阶段","children":[]},{"level":2,"title":"BeanFactory 注册 BeanPostProcessor 阶段","slug":"beanfactory-注册-beanpostprocessor-阶段","link":"#beanfactory-注册-beanpostprocessor-阶段","children":[]},{"level":2,"title":"初始化內建 Bean：MessageSource","slug":"初始化內建-bean-messagesource","link":"#初始化內建-bean-messagesource","children":[]},{"level":2,"title":"初始化內建 Bean：Spring 事件广播器","slug":"初始化內建-bean-spring-事件广播器","link":"#初始化內建-bean-spring-事件广播器","children":[]},{"level":2,"title":"Spring 应用上下文刷新阶段","slug":"spring-应用上下文刷新阶段","link":"#spring-应用上下文刷新阶段","children":[]},{"level":2,"title":"Spring 事件监听器注册阶段","slug":"spring-事件监听器注册阶段","link":"#spring-事件监听器注册阶段","children":[]},{"level":2,"title":"BeanFactory 初始化完成阶段","slug":"beanfactory-初始化完成阶段","link":"#beanfactory-初始化完成阶段","children":[]},{"level":2,"title":"Spring 应用上下刷新完成阶段","slug":"spring-应用上下刷新完成阶段","link":"#spring-应用上下刷新完成阶段","children":[]},{"level":2,"title":"Spring 应用上下文启动阶段","slug":"spring-应用上下文启动阶段","link":"#spring-应用上下文启动阶段","children":[]},{"level":2,"title":"Spring 应用上下文停止阶段","slug":"spring-应用上下文停止阶段","link":"#spring-应用上下文停止阶段","children":[]},{"level":2,"title":"Spring 应用上下文关闭阶段","slug":"spring-应用上下文关闭阶段","link":"#spring-应用上下文关闭阶段","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1735573878000,"updatedTime":1735573878000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":2.77,"words":831},"filePathRelative":"posts/java/spring/01-Spring核心/09.Spring应用上下文生命周期.md","localizedDate":"2022年12月23日","excerpt":"\\n<h2>Spring 应用上下文启动准备阶段</h2>\\n<p>AbstractApplicationContext#prepareRefresh() 方法</p>\\n<ul>\\n<li>启动时间 - startupDate</li>\\n<li>状态标识 - closed(false)、active(true)</li>\\n<li>初始化 PropertySources - initPropertySources()</li>\\n<li>检验 Environment 中必须属性</li>\\n<li>初始化事件监听器集合</li>\\n<li>初始化早期 Spring 事件集合</li>\\n</ul>\\n<h2>BeanFactory 创建阶段</h2>","autoDesc":true}');export{c as comp,g as data};
