import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as e,o as i}from"./app-CUXwiXlL.js";const a={};function o(l,t){return i(),r("div",null,t[0]||(t[0]=[e('<h1 id="spring-注解" tabindex="-1"><a class="header-anchor" href="#spring-注解"><span>Spring 注解</span></a></h1><h2 id="spring-注解驱动编程发展历程" tabindex="-1"><a class="header-anchor" href="#spring-注解驱动编程发展历程"><span>Spring 注解驱动编程发展历程</span></a></h2><ul><li>注解驱动启蒙时代：Spring Framework 1.x</li><li>注解驱动过渡时代：Spring Framework 2.x</li><li>注解驱动黄金时代：Spring Framework 3.x</li><li>注解驱动完善时代：Spring Framework 4.x</li><li>注解驱动当下时代：Spring Framework 5.x</li></ul><h2 id="spring-核心注解场景分类" tabindex="-1"><a class="header-anchor" href="#spring-核心注解场景分类"><span>Spring 核心注解场景分类</span></a></h2><p>Spring 模式注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@Repository</td><td>数据仓储模式注解</td><td>2.0</td></tr><tr><td>@Component</td><td>通用组件模式注解</td><td>2.5</td></tr><tr><td>@Service</td><td>服务模式注解</td><td>2.5</td></tr><tr><td>@Controller</td><td>Web 控制器模式注解</td><td>2.5</td></tr><tr><td>@Configuration</td><td>配置类模式注解</td><td>3.0</td></tr></tbody></table><p>装配注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@ImportResource</td><td>替换 XML 元素 <code>&lt;import&gt;</code></td><td>2.5</td></tr><tr><td>@Import</td><td>导入 Configuration 类</td><td>2.5</td></tr><tr><td>@ComponentScan</td><td>扫描指定 package 下标注 Spring 模式注解的类</td><td>3.1</td></tr></tbody></table><p>依赖注入注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@Autowired</td><td>Bean 依赖注入，支持多种依赖查找方式</td><td>2.5</td></tr><tr><td>@Qualifier</td><td>细粒度的 @Autowired 依赖查找</td><td>2.5</td></tr></tbody></table><h2 id="spring-注解编程模型" tabindex="-1"><a class="header-anchor" href="#spring-注解编程模型"><span>Spring 注解编程模型</span></a></h2><ul><li>元注解（Meta-Annotations）</li><li>Spring 模式注解（Stereotype Annotations）</li><li>Spring 组合注解（Composed Annotations）</li><li>Spring 注解属性别名和覆盖（Attribute Aliases and Overrides）</li></ul><h2 id="spring-元注解-meta-annotations" tabindex="-1"><a class="header-anchor" href="#spring-元注解-meta-annotations"><span>Spring 元注解（Meta-Annotations）</span></a></h2><ul><li>java.lang.annotation.Documented</li><li>java.lang.annotation.Inherited</li><li>java.lang.annotation.Repeatable</li></ul><h2 id="spring-模式注解-stereotype-annotations" tabindex="-1"><a class="header-anchor" href="#spring-模式注解-stereotype-annotations"><span>Spring 模式注解（Stereotype Annotations）</span></a></h2><p>理解 @Component “派⽣性”：元标注 @Component 的注解在 XML 元素 <a href="context:component-scan" target="_blank" rel="noopener noreferrer">context:component-scan</a> 或注解 @ComponentScan 扫描中“派生”了 @Component 的特性，并且从 Spring Framework 4.0 开始支持多层次“派⽣性”。</p><p>举例说明：</p><ul><li>@Repository</li><li>@Service</li><li>@Controller</li><li>@Configuration</li><li>@SpringBootConfiguration（Spring Boot）</li></ul><p>@Component “派⽣性”原理</p><ul><li>核心组件 - org.springframework.context.annotation.ClassPathBeanDefinitionScanner</li><li>org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider</li><li>资源处理 - org.springframework.core.io.support.ResourcePatternResolver</li><li>资源-类元信息</li><li>org.springframework.core.type.classreading.MetadataReaderFactory</li><li>类元信息 - org.springframework.core.type.ClassMetadata</li><li>ASM 实现 - org.springframework.core.type.classreading.ClassMetadataReadingVisitor</li><li>反射实现 - org.springframework.core.type.StandardAnnotationMetadata</li><li>注解元信息 - org.springframework.core.type.AnnotationMetadata</li><li>ASM 实现 - org.springframework.core.type.classreading.AnnotationMetadataReadingVisitor</li><li>反射实现 - org.springframework.core.type.StandardAnnotationMetadata</li></ul><h2 id="spring-组合注解-composed-annotations" tabindex="-1"><a class="header-anchor" href="#spring-组合注解-composed-annotations"><span>Spring 组合注解（Composed Annotations）</span></a></h2><p>Spring 组合注解（Composed Annotations）中的元注允许是 Spring 模式注解（Stereotype Annotation）与其他 Spring 功能性注解的任意组合。</p><h2 id="spring-注解属性别名-attribute-aliases" tabindex="-1"><a class="header-anchor" href="#spring-注解属性别名-attribute-aliases"><span>Spring 注解属性别名（Attribute Aliases）</span></a></h2><h2 id="spring-注解属性覆盖-attribute-overrides" tabindex="-1"><a class="header-anchor" href="#spring-注解属性覆盖-attribute-overrides"><span>Spring 注解属性覆盖（Attribute Overrides）</span></a></h2><h2 id="spring-enable-模块驱动" tabindex="-1"><a class="header-anchor" href="#spring-enable-模块驱动"><span>Spring @Enable 模块驱动</span></a></h2><p>@Enable 模块驱动</p><p>@Enable 模块驱动是以 @Enable 为前缀的注解驱动编程模型。所谓“模块”是指具备相同领域的功能组件集合，组合所形成⼀个独⽴的单元。⽐如 Web MVC 模块、AspectJ 代理模块、Caching（缓存）模块、JMX（Java 管理扩展）模块、Async（异步处理）模块等。</p><p>举例说明</p><ul><li>@EnableWebMvc</li><li>@EnableTransactionManagement</li><li>@EnableCaching</li><li>@EnableMBeanExport</li><li>@EnableAsync</li></ul><p>@Enable 模块驱动编程模式</p><ul><li>驱动注解：@EnableXXX</li><li>导入注解：@Import 具体实现</li><li>具体实现</li><li>基于 Configuration Class</li><li>基于 ImportSelector 接口实现</li><li>基于 ImportBeanDefinitionRegistrar 接口实现</li></ul><h2 id="spring-条件注解" tabindex="-1"><a class="header-anchor" href="#spring-条件注解"><span>Spring 条件注解</span></a></h2><p>基于配置条件注解 - @org.springframework.context.annotation.Profile</p><ul><li>关联对象 - org.springframework.core.env.Environment 中的 Profiles</li><li>实现变化：从 Spring 4.0 开始，@Profile 基于 @Conditional 实现</li></ul><p>基于编程条件注解 - @org.springframework.context.annotation.Conditional</p><ul><li>关联对象 - org.springframework.context.annotation.Condition 具体实现</li></ul><p>@Conditional 实现原理</p><ul><li>上下文对象 - org.springframework.context.annotation.ConditionContext</li><li>条件判断 - org.springframework.context.annotation.ConditionEvaluator</li><li>配置阶段 - org.springframework.context.annotation.ConfigurationCondition.ConfigurationPhase</li><li>判断入口 <ul><li>org.springframework.context.annotation.ConfigurationClassPostProcessor</li><li>org.springframework.context.annotation.ConfigurationClassParser</li></ul></li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans" target="_blank" rel="noopener noreferrer">Spring 官方文档之 Core Technologies</a></li><li><a href="https://time.geekbang.org/course/intro/265" target="_blank" rel="noopener noreferrer">《小马哥讲 Spring 核心编程思想》</a></li></ul>',40)]))}const d=n(a,[["render",o],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/pages/b6556f/","title":"Spring 注解","lang":"zh-CN","frontmatter":{"title":"Spring 注解","date":"2022-12-23T09:08:15.000Z","order":28,"categories":["Java","框架","Spring","Spring核心"],"tags":["Java","框架","Spring"],"permalink":"/pages/b6556f/","description":"Spring 注解 Spring 注解驱动编程发展历程 注解驱动启蒙时代：Spring Framework 1.x 注解驱动过渡时代：Spring Framework 2.x 注解驱动黄金时代：Spring Framework 3.x 注解驱动完善时代：Spring Framework 4.x 注解驱动当下时代：Spring Framework 5.x...","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/pages/b6556f/"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"Spring 注解"}],["meta",{"property":"og:description","content":"Spring 注解 Spring 注解驱动编程发展历程 注解驱动启蒙时代：Spring Framework 1.x 注解驱动过渡时代：Spring Framework 2.x 注解驱动黄金时代：Spring Framework 3.x 注解驱动完善时代：Spring Framework 4.x 注解驱动当下时代：Spring Framework 5.x..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-30T15:51:18.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2022-12-23T09:08:15.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-30T15:51:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 注解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-23T09:08:15.000Z\\",\\"dateModified\\":\\"2024-12-30T15:51:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"Spring 注解驱动编程发展历程","slug":"spring-注解驱动编程发展历程","link":"#spring-注解驱动编程发展历程","children":[]},{"level":2,"title":"Spring 核心注解场景分类","slug":"spring-核心注解场景分类","link":"#spring-核心注解场景分类","children":[]},{"level":2,"title":"Spring 注解编程模型","slug":"spring-注解编程模型","link":"#spring-注解编程模型","children":[]},{"level":2,"title":"Spring 元注解（Meta-Annotations）","slug":"spring-元注解-meta-annotations","link":"#spring-元注解-meta-annotations","children":[]},{"level":2,"title":"Spring 模式注解（Stereotype Annotations）","slug":"spring-模式注解-stereotype-annotations","link":"#spring-模式注解-stereotype-annotations","children":[]},{"level":2,"title":"Spring 组合注解（Composed Annotations）","slug":"spring-组合注解-composed-annotations","link":"#spring-组合注解-composed-annotations","children":[]},{"level":2,"title":"Spring 注解属性别名（Attribute Aliases）","slug":"spring-注解属性别名-attribute-aliases","link":"#spring-注解属性别名-attribute-aliases","children":[]},{"level":2,"title":"Spring 注解属性覆盖（Attribute Overrides）","slug":"spring-注解属性覆盖-attribute-overrides","link":"#spring-注解属性覆盖-attribute-overrides","children":[]},{"level":2,"title":"Spring @Enable 模块驱动","slug":"spring-enable-模块驱动","link":"#spring-enable-模块驱动","children":[]},{"level":2,"title":"Spring 条件注解","slug":"spring-条件注解","link":"#spring-条件注解","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1735573878000,"updatedTime":1735573878000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":2.48,"words":745},"filePathRelative":"posts/java/spring/01-Spring核心/28.Spring注解.md","localizedDate":"2022年12月23日","excerpt":"\\n<h2>Spring 注解驱动编程发展历程</h2>\\n<ul>\\n<li>注解驱动启蒙时代：Spring Framework 1.x</li>\\n<li>注解驱动过渡时代：Spring Framework 2.x</li>\\n<li>注解驱动黄金时代：Spring Framework 3.x</li>\\n<li>注解驱动完善时代：Spring Framework 4.x</li>\\n<li>注解驱动当下时代：Spring Framework 5.x</li>\\n</ul>\\n<h2>Spring 核心注解场景分类</h2>\\n<p>Spring 模式注解</p>\\n<table>\\n<thead>\\n<tr>\\n<th>Spring 注解</th>\\n<th>场景说明</th>\\n<th>起始版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>@Repository</td>\\n<td>数据仓储模式注解</td>\\n<td>2.0</td>\\n</tr>\\n<tr>\\n<td>@Component</td>\\n<td>通用组件模式注解</td>\\n<td>2.5</td>\\n</tr>\\n<tr>\\n<td>@Service</td>\\n<td>服务模式注解</td>\\n<td>2.5</td>\\n</tr>\\n<tr>\\n<td>@Controller</td>\\n<td>Web 控制器模式注解</td>\\n<td>2.5</td>\\n</tr>\\n<tr>\\n<td>@Configuration</td>\\n<td>配置类模式注解</td>\\n<td>3.0</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{d as comp,g as data};
