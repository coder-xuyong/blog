import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as r,e as t,h as n,d as a,o as d,r as p}from"./app-ByFpwlZ2.js";const s={};function g(h,e){const i=p("bean");return d(),o("div",null,[e[9]||(e[9]=r('<h1 id="spring-配置元数据" tabindex="-1"><a class="header-anchor" href="#spring-配置元数据"><span>Spring 配置元数据</span></a></h1><h2 id="spring-配置元信息" tabindex="-1"><a class="header-anchor" href="#spring-配置元信息"><span>Spring 配置元信息</span></a></h2><ul><li>Spring Bean 配置元信息 - BeanDefinition</li><li>Spring Bean 属性元信息 - PropertyValues</li><li>Spring 容器配置元信息</li><li>Spring 外部化配置元信息 - PropertySource</li><li>Spring Profile 元信息 - @Profile</li></ul><h2 id="spring-bean-配置元信息" tabindex="-1"><a class="header-anchor" href="#spring-bean-配置元信息"><span>Spring Bean 配置元信息</span></a></h2><p>Bean 配置元信息 - BeanDefinition</p><ul><li>GenericBeanDefinition：通用型 BeanDefinition</li><li>RootBeanDefinition：无 Parent 的 BeanDefinition 或者合并后 BeanDefinition</li><li>AnnotatedBeanDefinition：注解标注的 BeanDefinition</li></ul><h2 id="spring-bean-属性元信息" tabindex="-1"><a class="header-anchor" href="#spring-bean-属性元信息"><span>Spring Bean 属性元信息</span></a></h2><ul><li>Bean 属性元信息 - PropertyValues <ul><li>可修改实现 - MutablePropertyValues</li><li>元素成员 - PropertyValue</li></ul></li><li>Bean 属性上下文存储 - AttributeAccessor</li><li>Bean 元信息元素 - BeanMetadataElement</li></ul><h2 id="spring-容器配置元信息" tabindex="-1"><a class="header-anchor" href="#spring-容器配置元信息"><span>Spring 容器配置元信息</span></a></h2><p>Spring XML 配置元信息 - beans 元素相关</p><table><thead><tr><th>beans 元素属性</th><th>默认值</th><th>使用场景</th></tr></thead><tbody><tr><td>profile</td><td>null（留空）</td><td>Spring Profiles 配置值</td></tr><tr><td>default-lazy-init</td><td>default</td><td>当 outter beans “default-lazy-init” 属性存在时，继承该值，否则为“false”</td></tr><tr><td>default-merge</td><td>default</td><td>当 outter beans “default-merge” 属性存在时，继承该值，否则为“false”</td></tr><tr><td>default-autowire</td><td>default</td><td>当 outter beans “default-autowire” 属性存在时，继承该值，否则为“no”</td></tr><tr><td>default-autowire-candidates</td><td>null（留空）</td><td>默认 Spring Beans 名称 pattern</td></tr><tr><td>default-init-method</td><td>null（留空）</td><td>默认 Spring Beans 自定义初始化方法</td></tr><tr><td>default-destroy-method</td><td>null（留空）</td><td>默认 Spring Beans 自定义销毁方法</td></tr></tbody></table><p>Spring XML 配置元信息 - 应用上下文相关</p><table><thead><tr><th>XML 元素</th><th>使用场景</th></tr></thead><tbody><tr><td><code>&lt;context:annotation-config /&gt;</code></td><td>激活 Spring 注解驱动</td></tr><tr><td><code>&lt;context:component-scan /&gt;</code></td><td>Spring @Component 以及自定义注解扫描</td></tr><tr><td><code>&lt;context:load-time-weaver /&gt;</code></td><td>激活 Spring LoadTimeWeaver</td></tr><tr><td><code>&lt;context:mbean-export /&gt;</code></td><td>暴露 Spring Beans 作为 JMX Beans</td></tr><tr><td><code>&lt;context:mbean-server /&gt;</code></td><td>将当前平台作为 MBeanServer</td></tr><tr><td><code>&lt;context:property-placeholder /&gt;</code></td><td>加载外部化配置资源作为 Spring 属性配</td></tr><tr><td><code>&lt;context:property-override /&gt;</code></td><td>利用外部化配置资源覆盖 Spring 属</td></tr></tbody></table><h2 id="基于-xml-文件装载-spring-bean-配置元信息" tabindex="-1"><a class="header-anchor" href="#基于-xml-文件装载-spring-bean-配置元信息"><span>基于 XML 文件装载 Spring Bean 配置元信息</span></a></h2><p>底层实现 - XmlBeanDefinitionReader</p><table><thead><tr><th>XML 元素</th><th>使用场景</th></tr></thead><tbody><tr><td><code>&lt;beans:beans /&gt;</code></td><td>单 XML 资源下的多个 Spring Beans 配置</td></tr><tr><td><code>&lt;beans:bean /&gt;</code></td><td>单个 Spring Bean 定义（BeanDefinition）配置</td></tr><tr><td><code>&lt;beans:alias /&gt;</code></td><td>为 Spring Bean 定义（BeanDefinition）映射别名</td></tr><tr><td><code>&lt;beans:import /&gt;</code></td><td>加载外部 Spring XML 配置资源</td></tr></tbody></table><h2 id="基于-properties-文件装载-spring-bean-配置元信息" tabindex="-1"><a class="header-anchor" href="#基于-properties-文件装载-spring-bean-配置元信息"><span>基于 Properties 文件装载 Spring Bean 配置元信息</span></a></h2><p>底层实现 - PropertiesBeanDefinitionReader</p>',18)),e[10]||(e[10]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Properties 属性名"),t("th",null,"使用场景")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"class")]),t("td",null,"Bean 类全称限定名")]),t("tr",null,[t("td",null,[t("code",null,"abstract")]),t("td",null,"是否为抽象的 BeanDefinition")]),t("tr",null,[t("td",null,[t("code",null,"parent")]),t("td",null,"指定 parent BeanDefinition 名称")]),t("tr",null,[t("td",null,[t("code",null,"lazy-init")]),t("td",null,"是否为延迟初始化")]),t("tr",null,[t("td",null,[t("code",null,"ref")]),t("td",null,"引用其他 Bean 的名称")]),t("tr",null,[t("td",null,[t("code",null,"scope")]),t("td",null,"设置 Bean 的 scope 属性")]),t("tr",null,[t("td",{n:""},"$"),t("td",null,"n 表示第 n+1 个构造器参数")])])],-1)),e[11]||(e[11]=r('<h2 id="基于-java-注解装载-spring-bean-配置元信息" tabindex="-1"><a class="header-anchor" href="#基于-java-注解装载-spring-bean-配置元信息"><span>基于 Java 注解装载 Spring Bean 配置元信息</span></a></h2><p>Spring 模式注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td><code>@Repository</code></td><td>数据仓储模式注解</td><td>2.0</td></tr><tr><td><code>@Component</code></td><td>通用组件模式注解</td><td>2.5</td></tr><tr><td><code>@Service</code></td><td>服务模式注解</td><td>2.5</td></tr><tr><td><code>@Controller</code></td><td>Web 控制器模式注解</td><td>2.5</td></tr><tr><td><code>@Configuration</code></td><td>配置类模式注解</td><td>3.0</td></tr></tbody></table><p>Spring Bean 定义注解</p><p>| Spring 注解 | 场景说明 | 起始版本 |<br> | ------------ | ------------------------------------------ | ----------- | --- |<br> | <code>@Bean</code> | 替换 XML 元素 <code>&lt;bean&gt;</code> | 3.0 |<br> | <code>@DependsOn</code> | 替代 XML 属性 <code>&lt;bean depends-on=&quot;...&quot;/&gt;</code> | 3.0 |<br> | <code>@Lazy</code> | 替代 XML 属性 <code>&lt;bean lazy-init=&quot;true | falses&quot; /&gt;</code> | 3.0 |<br> | <code>@Primary</code> | 替换 XML 元素 <code>&lt;bean primary=&quot;true | false&quot; /&gt;</code> | 3.0 |<br> | <code>@Role</code> | 替换 XML 元素 <code>&lt;bean role=&quot;...&quot; /&gt;</code> | 3.1 |<br> | <code>@Lookup</code> | 替代 XML 属性 <code>&lt;bean lookup-method=&quot;...&quot;&gt;</code> | 4.1 |</p><p>Spring Bean 依赖注入注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td><code>@Autowired</code></td><td>Bean 依赖注入，支持多种依赖查找方式</td><td>2.5</td></tr><tr><td><code>@Qualifier</code></td><td>细粒度的 @Autowired 依赖查找</td><td>2.5</td></tr></tbody></table><table><thead><tr><th>Java 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@Resource</td><td>类似于 @Autowired</td><td>2.5</td></tr><tr><td>@Inject</td><td>类似于 @Autowired</td><td>2.5</td></tr></tbody></table><p>Spring Bean 条件装配注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@Profile</td><td>配置化条件装配</td><td>3.1</td></tr><tr><td>@Conditional</td><td>编程条件装配</td><td>4.0</td></tr></tbody></table><p>Spring Bean 生命周期回调注解</p>',11)),t("table",null,[e[8]||(e[8]=t("thead",null,[t("tr",null,[t("th",null,"Spring 注解"),t("th",null,"场景说明"),t("th",null,"起始版本")])],-1)),t("tbody",null,[t("tr",null,[e[2]||(e[2]=t("td",null,"@PostConstruct",-1)),t("td",null,[e[0]||(e[0]=n("替换 XML 元素 ")),a(i,{"init-method":"..."}),e[1]||(e[1]=n(" 或 InitializingBean"))]),e[3]||(e[3]=t("td",null,"2.5",-1))]),t("tr",null,[e[6]||(e[6]=t("td",null,"@PreDestroy",-1)),t("td",null,[e[4]||(e[4]=n("替换 XML 元素 ")),a(i,{"destroy-method":"..."}),e[5]||(e[5]=n(" 或 DisposableBean"))]),e[7]||(e[7]=t("td",null,"2.5",-1))])])]),e[12]||(e[12]=r('<p>Spring BeanDefinition 解析与注册</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>XML 资源</td><td>XmlBeanDefinitionReader</td><td>1.0</td></tr><tr><td>Properties 资源</td><td>PropertiesBeanDefinitionReader</td><td>1.0</td></tr><tr><td>Java 注解</td><td>AnnotatedBeanDefinitionReader</td><td>3.0</td></tr></tbody></table><h2 id="spring-bean-配置元信息底层实现" tabindex="-1"><a class="header-anchor" href="#spring-bean-配置元信息底层实现"><span>Spring Bean 配置元信息底层实现</span></a></h2><h3 id="spring-xml-资源-beandefinition-解析与注册" tabindex="-1"><a class="header-anchor" href="#spring-xml-资源-beandefinition-解析与注册"><span>Spring XML 资源 BeanDefinition 解析与注册</span></a></h3><p>核心 API - XmlBeanDefinitionReader</p><ul><li>资源 - Resource</li><li>底层 - BeanDefinitionDocumentReader <ul><li>XML 解析 - Java DOM Level 3 API</li><li>BeanDefinition 解析 - BeanDefinitionParserDelegate</li><li>BeanDefinition 注册 - BeanDefinitionRegistry</li></ul></li></ul><h3 id="spring-properties-资源-beandefinition-解析与注册" tabindex="-1"><a class="header-anchor" href="#spring-properties-资源-beandefinition-解析与注册"><span>Spring Properties 资源 BeanDefinition 解析与注册</span></a></h3><p>核心 API - PropertiesBeanDefinitionReader</p><ul><li>资源 <ul><li>字节流 - Resource</li><li>字符流 - EncodedResouce</li></ul></li><li>底层 <ul><li>存储 - java.util.Properties</li><li>BeanDefinition 解析 - API 内部实现</li><li>BeanDefinition 注册 - BeanDefinitionRegistry</li></ul></li></ul><h3 id="spring-java-注册-beandefinition-解析与注册" tabindex="-1"><a class="header-anchor" href="#spring-java-注册-beandefinition-解析与注册"><span>Spring Java 注册 BeanDefinition 解析与注册</span></a></h3><p>核心 API - AnnotatedBeanDefinitionReader</p><ul><li>资源 <ul><li>类对象 - java.lang.Class</li></ul></li><li>底层 <ul><li>条件评估 - ConditionEvaluator</li><li>Bean 范围解析 - ScopeMetadataResolver</li><li>BeanDefinition 解析 - 内部 API 实现</li><li>BeanDefinition 处理 - AnnotationConfigUtils.processCommonDefinitionAnnotations</li><li>BeanDefinition 注册 - BeanDefinitionRegistry</li></ul></li></ul><h2 id="基于-xml-文件装载-spring-ioc-容器配置元信息" tabindex="-1"><a class="header-anchor" href="#基于-xml-文件装载-spring-ioc-容器配置元信息"><span>基于 XML 文件装载 Spring IoC 容器配置元信息</span></a></h2><p>Spring IoC 容器相关 XML 配置</p><table><thead><tr><th>命名空间</th><th>所属模块</th><th>Schema 资源 URL</th></tr></thead><tbody><tr><td>beans</td><td>spring-beans</td><td><a href="https://www.springframework.org/schema/beans/spring-beans.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/beans/spring-beans.xsd</a></td></tr><tr><td>context</td><td>spring-context</td><td><a href="https://www.springframework.org/schema/context/spring-context.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/context/spring-context.xsd</a></td></tr><tr><td>aop</td><td>spring-aop</td><td><a href="https://www.springframework.org/schema/aop/spring-aop.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/aop/spring-aop.xsd</a></td></tr><tr><td>tx</td><td>spring-tx</td><td><a href="https://www.springframework.org/schema/tx/spring-tx.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/tx/spring-tx.xsd</a></td></tr><tr><td>util</td><td>spring-beans</td><td>beans <a href="https://www.springframework.org/schema/util/spring-util.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/util/spring-util.xsd</a></td></tr><tr><td>tool</td><td>spring-beans</td><td><a href="https://www.springframework.org/schema/tool/spring-tool.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/tool/spring-tool.xsd</a></td></tr></tbody></table><h2 id="基于-java-注解装载-spring-ioc-容器配置元信息" tabindex="-1"><a class="header-anchor" href="#基于-java-注解装载-spring-ioc-容器配置元信息"><span>基于 Java 注解装载 Spring IoC 容器配置元信息</span></a></h2><p>Spring IoC 容器装配注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@ImportResource</td><td>替换 XML 元素 <code>&lt;import&gt;</code></td><td>3.0</td></tr><tr><td>@Import</td><td>导入 Configuration Class</td><td>3.0</td></tr><tr><td>@ComponentScan</td><td>扫描指定 package 下标注 Spring 模式注解的类</td><td>3.1</td></tr></tbody></table><p>Spring IoC 配属属性注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@PropertySource</td><td>配置属性抽象 PropertySource 注解</td><td>3.1</td></tr><tr><td>@PropertySources</td><td>@PropertySource 集合注解</td><td>4.0</td></tr></tbody></table><h2 id="基于-extensible-xml-authoring-扩展-springxml-元素" tabindex="-1"><a class="header-anchor" href="#基于-extensible-xml-authoring-扩展-springxml-元素"><span>基于 Extensible XML authoring 扩展 SpringXML 元素</span></a></h2><p>Spring XML 扩展</p><ul><li>编写 XML Schema 文件：定义 XML 结构</li><li>自定义 NamespaceHandler 实现：命名空间绑定</li><li>自定义 BeanDefinitionParser 实现：XML 元素与 BeanDefinition 解析</li><li>注册 XML 扩展：命名空间与 XML Schema 映射</li></ul><h2 id="extensible-xml-authoring-扩展原理" tabindex="-1"><a class="header-anchor" href="#extensible-xml-authoring-扩展原理"><span>Extensible XML authoring 扩展原理</span></a></h2><h3 id="触发时机" tabindex="-1"><a class="header-anchor" href="#触发时机"><span>触发时机</span></a></h3><ul><li>AbstractApplicationContext#obtainFreshBeanFactory <ul><li>AbstractRefreshableApplicationContext#refreshBeanFactory <ul><li>AbstractXmlApplicationContext#loadBeanDefinitions <ul><li>... <ul><li>XmlBeanDefinitionReader#doLoadBeanDefinitions <ul><li>... <ul><li>BeanDefinitionParserDelegate#parseCustomElement</li></ul></li></ul></li></ul></li></ul></li></ul></li></ul></li></ul><h3 id="核心流程" tabindex="-1"><a class="header-anchor" href="#核心流程"><span>核心流程</span></a></h3><p>BeanDefinitionParserDelegate#parseCustomElement(org.w3c.dom.Element, BeanDefinition)</p><ul><li>获取 namespace</li><li>通过 namespace 解析 NamespaceHandler</li><li>构造 ParserContext</li><li>解析元素，获取 BeanDefinintion</li></ul><h2 id="基于-properties-文件装载外部化配置" tabindex="-1"><a class="header-anchor" href="#基于-properties-文件装载外部化配置"><span>基于 Properties 文件装载外部化配置</span></a></h2><p>注解驱动</p><ul><li>@org.springframework.context.annotation.PropertySource</li><li>@org.springframework.context.annotation.PropertySources</li></ul><p>API 编程</p><ul><li>org.springframework.core.env.PropertySource</li><li>org.springframework.core.env.PropertySources</li></ul><h2 id="基于-yaml-文件装载外部化配置" tabindex="-1"><a class="header-anchor" href="#基于-yaml-文件装载外部化配置"><span>基于 YAML 文件装载外部化配置</span></a></h2><p>API 编程</p><ul><li>org.springframework.beans.factory.config.YamlProcessor <ul><li>org.springframework.beans.factory.config.YamlMapFactoryBean</li><li>org.springframework.beans.factory.config.YamlPropertiesFactoryBean</li></ul></li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p><strong>Spring 內建 XML Schema 常见有哪些</strong>？</p><table><thead><tr><th>命名空间</th><th>所属模块</th><th>Schema 资源 URL</th></tr></thead><tbody><tr><td>beans</td><td>spring-beans</td><td><a href="https://www.springframework.org/schema/beans/spring-beans.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/beans/spring-beans.xsd</a></td></tr><tr><td>context</td><td>spring-context</td><td><a href="https://www.springframework.org/schema/context/spring-context.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/context/spring-context.xsd</a></td></tr><tr><td>aop</td><td>spring-aop</td><td><a href="https://www.springframework.org/schema/aop/spring-aop.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/aop/spring-aop.xsd</a></td></tr><tr><td>tx</td><td>spring-tx</td><td><a href="https://www.springframework.org/schema/tx/spring-tx.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/tx/spring-tx.xsd</a></td></tr><tr><td>util</td><td>spring-beans</td><td>beans <a href="https://www.springframework.org/schema/util/spring-util.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/util/spring-util.xsd</a></td></tr><tr><td>tool</td><td>spring-beans</td><td><a href="https://www.springframework.org/schema/tool/spring-tool.xsd" target="_blank" rel="noopener noreferrer">https://www.springframework.org/schema/tool/spring-tool.xsd</a></td></tr></tbody></table><p><strong>Spring 配置元信息具体有哪些</strong>？</p><ul><li>Bean 配置元信息：通过媒介（如 XML、Proeprties 等），解析 BeanDefinition</li><li>IoC 容器配置元信息：通过媒介（如 XML、Proeprties 等），控制 IoC 容器行为，比如注解驱动、AOP 等</li><li>外部化配置：通过资源抽象（如 Proeprties、YAML 等），控制 PropertySource</li><li>Spring Profile：通过外部化配置，提供条件分支流程</li></ul><p><strong>Extensible XML authoring 的缺点</strong>？</p><ul><li>高复杂度：开发人员需要熟悉 XML Schema，spring.handlers，spring.schemas 以及 Spring API</li><li>嵌套元素支持较弱：通常需要使用方法递归或者其嵌套解析的方式处理嵌套（子）元素</li><li>XML 处理性能较差：Spring XML 基于 DOM Level 3 API 实现，该 API 便于理解，然而性能较差</li><li>XML 框架移植性差：很难适配高性能和便利性的 XML 框架，如 JAXB</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans" target="_blank" rel="noopener noreferrer">Spring 官方文档之 Core Technologies</a></li><li><a href="https://time.geekbang.org/course/intro/265" target="_blank" rel="noopener noreferrer">《小马哥讲 Spring 核心编程思想》</a></li></ul>',46))])}const f=l(s,[["render",g],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/pages/55f315/","title":"Spring 配置元数据","lang":"zh-CN","frontmatter":{"title":"Spring 配置元数据","date":"2022-12-21T19:49:48.000Z","order":"08","categories":["Java","框架","Spring","Spring核心"],"tags":["Java","框架","Spring","Bean"],"permalink":"/pages/55f315/","description":"Spring 配置元数据 Spring 配置元信息 Spring Bean 配置元信息 - BeanDefinition Spring Bean 属性元信息 - PropertyValues Spring 容器配置元信息 Spring 外部化配置元信息 - PropertySource Spring Profile 元信息 - @Profile Spr...","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/pages/55f315/"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"Spring 配置元数据"}],["meta",{"property":"og:description","content":"Spring 配置元数据 Spring 配置元信息 Spring Bean 配置元信息 - BeanDefinition Spring Bean 属性元信息 - PropertyValues Spring 容器配置元信息 Spring 外部化配置元信息 - PropertySource Spring Profile 元信息 - @Profile Spr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-30T15:51:18.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"Bean"}],["meta",{"property":"article:published_time","content":"2022-12-21T19:49:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-30T15:51:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 配置元数据\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-21T19:49:48.000Z\\",\\"dateModified\\":\\"2024-12-30T15:51:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"Spring 配置元信息","slug":"spring-配置元信息","link":"#spring-配置元信息","children":[]},{"level":2,"title":"Spring Bean 配置元信息","slug":"spring-bean-配置元信息","link":"#spring-bean-配置元信息","children":[]},{"level":2,"title":"Spring Bean 属性元信息","slug":"spring-bean-属性元信息","link":"#spring-bean-属性元信息","children":[]},{"level":2,"title":"Spring 容器配置元信息","slug":"spring-容器配置元信息","link":"#spring-容器配置元信息","children":[]},{"level":2,"title":"基于 XML 文件装载 Spring Bean 配置元信息","slug":"基于-xml-文件装载-spring-bean-配置元信息","link":"#基于-xml-文件装载-spring-bean-配置元信息","children":[]},{"level":2,"title":"基于 Properties 文件装载 Spring Bean 配置元信息","slug":"基于-properties-文件装载-spring-bean-配置元信息","link":"#基于-properties-文件装载-spring-bean-配置元信息","children":[]},{"level":2,"title":"基于 Java 注解装载 Spring Bean 配置元信息","slug":"基于-java-注解装载-spring-bean-配置元信息","link":"#基于-java-注解装载-spring-bean-配置元信息","children":[]},{"level":2,"title":"Spring Bean 配置元信息底层实现","slug":"spring-bean-配置元信息底层实现","link":"#spring-bean-配置元信息底层实现","children":[{"level":3,"title":"Spring XML 资源 BeanDefinition 解析与注册","slug":"spring-xml-资源-beandefinition-解析与注册","link":"#spring-xml-资源-beandefinition-解析与注册","children":[]},{"level":3,"title":"Spring Properties 资源 BeanDefinition 解析与注册","slug":"spring-properties-资源-beandefinition-解析与注册","link":"#spring-properties-资源-beandefinition-解析与注册","children":[]},{"level":3,"title":"Spring Java 注册 BeanDefinition 解析与注册","slug":"spring-java-注册-beandefinition-解析与注册","link":"#spring-java-注册-beandefinition-解析与注册","children":[]}]},{"level":2,"title":"基于 XML 文件装载 Spring IoC 容器配置元信息","slug":"基于-xml-文件装载-spring-ioc-容器配置元信息","link":"#基于-xml-文件装载-spring-ioc-容器配置元信息","children":[]},{"level":2,"title":"基于 Java 注解装载 Spring IoC 容器配置元信息","slug":"基于-java-注解装载-spring-ioc-容器配置元信息","link":"#基于-java-注解装载-spring-ioc-容器配置元信息","children":[]},{"level":2,"title":"基于 Extensible XML authoring 扩展 SpringXML 元素","slug":"基于-extensible-xml-authoring-扩展-springxml-元素","link":"#基于-extensible-xml-authoring-扩展-springxml-元素","children":[]},{"level":2,"title":"Extensible XML authoring 扩展原理","slug":"extensible-xml-authoring-扩展原理","link":"#extensible-xml-authoring-扩展原理","children":[{"level":3,"title":"触发时机","slug":"触发时机","link":"#触发时机","children":[]},{"level":3,"title":"核心流程","slug":"核心流程","link":"#核心流程","children":[]}]},{"level":2,"title":"基于 Properties 文件装载外部化配置","slug":"基于-properties-文件装载外部化配置","link":"#基于-properties-文件装载外部化配置","children":[]},{"level":2,"title":"基于 YAML 文件装载外部化配置","slug":"基于-yaml-文件装载外部化配置","link":"#基于-yaml-文件装载外部化配置","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1735573878000,"updatedTime":1735573878000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":5.73,"words":1719},"filePathRelative":"posts/java/spring/01-Spring核心/08.Spring配置元数据.md","localizedDate":"2022年12月21日","excerpt":"\\n<h2>Spring 配置元信息</h2>\\n<ul>\\n<li>Spring Bean 配置元信息 - BeanDefinition</li>\\n<li>Spring Bean 属性元信息 - PropertyValues</li>\\n<li>Spring 容器配置元信息</li>\\n<li>Spring 外部化配置元信息 - PropertySource</li>\\n<li>Spring Profile 元信息 - @Profile</li>\\n</ul>\\n<h2>Spring Bean 配置元信息</h2>\\n<p>Bean 配置元信息 - BeanDefinition</p>\\n<ul>\\n<li>GenericBeanDefinition：通用型 BeanDefinition</li>\\n<li>RootBeanDefinition：无 Parent 的 BeanDefinition 或者合并后 BeanDefinition</li>\\n<li>AnnotatedBeanDefinition：注解标注的 BeanDefinition</li>\\n</ul>","autoDesc":true}');export{f as comp,b as data};
