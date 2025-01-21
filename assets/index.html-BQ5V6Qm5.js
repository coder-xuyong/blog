import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,o as n}from"./app-CUXwiXlL.js";const t={};function r(l,i){return n(),s("div",null,i[0]||(i[0]=[e(`<h1 id="spring-数据绑定" tabindex="-1"><a class="header-anchor" href="#spring-数据绑定"><span>Spring 数据绑定</span></a></h1><p><strong>Spring 数据绑定(Data Binding)的作用是将用户的输入动态绑定到 JavaBean</strong>。换句话说，Spring 数据绑定机制是将属性值设置到目标对象中。</p><p>在 Spring 中，数据绑定功能主要由 <code>DataBinder</code> 类实现。此外，<code>BeanWrapper</code> 也具有类似的功能，但 <code>DataBinder</code> 额外支持字段验证、字段格式化和绑定结果分析。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230111150930.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span>快速入门</span></a></h2><p>定义一个用于测试的 JavaBean</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> TestBean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> num</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getNum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setNum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> num</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">num</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;TestBean{&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;num=&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据绑定示例</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> DataBindingDemo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        MutablePropertyValues</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> mpv</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> MutablePropertyValues</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        mpv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;num&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;10&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        TestBean</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> testBean</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> TestBean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        DataBinder</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> db</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> DataBinder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(testBean);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(mpv);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(testBean);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring-数据绑定使用场景" tabindex="-1"><a class="header-anchor" href="#spring-数据绑定使用场景"><span>Spring 数据绑定使用场景</span></a></h2><ul><li>Spring <code>BeanDefinition</code> 到 Bean 实例创建</li><li>Spring 数据绑定（<code>DataBinder</code>）</li><li>Spring Web 参数绑定（<code>WebDataBinder</code>）</li></ul><h2 id="databinder" tabindex="-1"><a class="header-anchor" href="#databinder"><span>DataBinder</span></a></h2><p>在 Spring 中，<code>DataBinder</code> 类是数据绑定功能的基类。<code>WebDataBinder</code> 是 <code>DataBinder</code> 的子类，主要用于 Spring Web 数据绑定，此外，还有一些 <code>WebDataBinder</code> 的扩展子类，其类族如下图所示：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230111152225.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>DataBinder 核心属性：</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><code>target</code></td><td>关联目标 Bean</td></tr><tr><td><code>objectName</code></td><td>目标 Bean 名称</td></tr><tr><td><code>bindingResult</code></td><td>属性绑定结果</td></tr><tr><td><code>typeConverter</code></td><td>类型转换器</td></tr><tr><td><code>conversionService</code></td><td>类型转换服务</td></tr><tr><td><code>messageCodesResolver</code></td><td>校验错误文案 Code 处理器</td></tr><tr><td><code>validators</code></td><td>关联的 Bean Validator 实例集合</td></tr></tbody></table><p><code>DataBinder</code> 类的核心方法是 <code>bind(PropertyValues)</code>：将 PropertyValues Key-Value 内容映射到关联 Bean（target）中的属性上</p><ul><li>假设 PropertyValues 中包含 name=dunwu 的键值对时, 同时 Bean 对象 User 中存在 name 属性, 当 bind 方法执行时, User 对象中的 name 属性值将被绑定为 dunwu</li></ul><h2 id="spring-数据绑定元数据" tabindex="-1"><a class="header-anchor" href="#spring-数据绑定元数据"><span>Spring 数据绑定元数据</span></a></h2><p>DataBinder 元数据 - PropertyValues</p><table><thead><tr><th>特征</th><th>说明</th></tr></thead><tbody><tr><td>数据来源</td><td>BeanDefinition，主要来源 XML 资源配置 BeanDefinition</td></tr><tr><td>数据结构</td><td>由一个或多个 PropertyValue 组成</td></tr><tr><td>成员结构</td><td>PropertyValue 包含属性名称，以及属性值（包括原始值、类型转换后的值）</td></tr><tr><td>常见实现</td><td>MutablePropertyValues</td></tr><tr><td>Web 扩展实现</td><td>ServletConfigPropertyValues、ServletRequestParameterPropertyValues</td></tr><tr><td>相关生命周期</td><td>InstantiationAwareBeanPostProcessor#postProcessProperties</td></tr></tbody></table><h2 id="spring-数据绑定控制参数" tabindex="-1"><a class="header-anchor" href="#spring-数据绑定控制参数"><span>Spring 数据绑定控制参数</span></a></h2><p>DataBinder 绑定特殊场景分析</p><ul><li>当 PropertyValues 中包含名称 x 的 PropertyValue，目标对象 B 不存在 x 属性，当 bind 方法执<br> 行时，会发生什么？</li><li>当 PropertyValues 中包含名称 x 的 PropertyValue，目标对象 B 中存在 x 属性，当 bind 方法执<br> 行时，如何避免 B 属性 x 不被绑定？</li><li>当 PropertyValues 中包含名称 x.y 的 PropertyValue，目标对象 B 中存在 x 属性（嵌套 y 属性）<br> ，当 bind 方法执行时，会发生什么？</li></ul><h3 id="databinder-绑定控制参数" tabindex="-1"><a class="header-anchor" href="#databinder-绑定控制参数"><span>DataBinder 绑定控制参数</span></a></h3><table><thead><tr><th>参数名称</th><th>说明</th></tr></thead><tbody><tr><td>ignoreUnknownFields</td><td>是否忽略未知字段，默认值：true</td></tr><tr><td>ignoreInvalidFields</td><td>是否忽略非法字段，默认值：false</td></tr><tr><td>autoGrowNestedPaths</td><td>是否自动增加嵌套路径，默认值：true</td></tr><tr><td>allowedFields</td><td>绑定字段白名单</td></tr><tr><td>disallowedFields</td><td>绑定字段黑名单</td></tr><tr><td>requiredFields</td><td>必须绑定字段</td></tr></tbody></table><h2 id="beanwrapper-的使用场景" tabindex="-1"><a class="header-anchor" href="#beanwrapper-的使用场景"><span>BeanWrapper 的使用场景</span></a></h2><ul><li>Spring 底层 JavaBeans 基础设施的中心化接口</li><li>通常不会直接使用，间接用于 BeanFactory 和 DataBinder</li><li>提供标准 JavaBeans 分析和操作，能够单独或批量存储 Java Bean 的属性（properties）</li><li>支持嵌套属性路径（nested path）</li><li>实现类 org.springframework.beans.BeanWrapperImpl</li></ul><h2 id="spring-底层-java-beans-替换实现" tabindex="-1"><a class="header-anchor" href="#spring-底层-java-beans-替换实现"><span>Spring 底层 Java Beans 替换实现</span></a></h2><p>JavaBeans 核心实现 - <code>java.beans.BeanInfo</code></p><ul><li>属性（Property） <ul><li><code>java.beans.PropertyEditor</code></li></ul></li><li>方法（Method）</li><li>事件（Event）</li><li>表达式（Expression）</li></ul><p>Spring 替代实现 - <code>org.springframework.beans.BeanWrapper</code></p><ul><li>属性（Property） <ul><li><code>java.beans.PropertyEditor</code></li></ul></li><li>嵌套属性路径（nested path）</li></ul><h2 id="databinder-数据校验" tabindex="-1"><a class="header-anchor" href="#databinder-数据校验"><span>DataBinder 数据校验</span></a></h2><p>DataBinder 与 BeanWrapper</p><ul><li>bind 方法生成 BeanPropertyBindingResult</li><li>BeanPropertyBindingResult 关联 BeanWrapper</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>标准 JavaBeans 是如何操作属性的？</p><table><thead><tr><th>API</th><th>说明</th></tr></thead><tbody><tr><td>java.beans.Introspector</td><td>Java Beans 内省 API</td></tr><tr><td>java.beans.BeanInfo</td><td>Java Bean 元信息 API</td></tr><tr><td>java.beans.BeanDescriptor</td><td>Java Bean 信息描述符</td></tr><tr><td>java.beans.PropertyDescriptor</td><td>Java Bean 属性描述符</td></tr><tr><td>java.beans.MethodDescriptor</td><td>Java Bean 方法描述符</td></tr><tr><td>java.beans.EventSetDescriptor</td><td>Java Bean 事件集合描述符</td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans" target="_blank" rel="noopener noreferrer">Spring 官方文档之 Core Technologies</a></li><li><a href="https://time.geekbang.org/course/intro/265" target="_blank" rel="noopener noreferrer">《小马哥讲 Spring 核心编程思想》</a></li></ul>`,41)]))}const h=a(t,[["render",r],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/pages/267b4c/","title":"Spring 数据绑定","lang":"zh-CN","frontmatter":{"title":"Spring 数据绑定","date":"2022-12-22T19:26:57.000Z","order":22,"categories":["Java","框架","Spring","Spring核心"],"tags":["Java","框架","Spring","数据绑定"],"permalink":"/pages/267b4c/","description":"Spring 数据绑定 Spring 数据绑定(Data Binding)的作用是将用户的输入动态绑定到 JavaBean。换句话说，Spring 数据绑定机制是将属性值设置到目标对象中。 在 Spring 中，数据绑定功能主要由 DataBinder 类实现。此外，BeanWrapper 也具有类似的功能，但 DataBinder 额外支持字段验证、...","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/pages/267b4c/"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"Spring 数据绑定"}],["meta",{"property":"og:description","content":"Spring 数据绑定 Spring 数据绑定(Data Binding)的作用是将用户的输入动态绑定到 JavaBean。换句话说，Spring 数据绑定机制是将属性值设置到目标对象中。 在 Spring 中，数据绑定功能主要由 DataBinder 类实现。此外，BeanWrapper 也具有类似的功能，但 DataBinder 额外支持字段验证、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dunwu/images/master/snap/20230111150930.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-30T15:51:18.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"数据绑定"}],["meta",{"property":"article:published_time","content":"2022-12-22T19:26:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-30T15:51:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 数据绑定\\",\\"image\\":[\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20230111150930.png\\",\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20230111152225.png\\"],\\"datePublished\\":\\"2022-12-22T19:26:57.000Z\\",\\"dateModified\\":\\"2024-12-30T15:51:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[]},{"level":2,"title":"Spring 数据绑定使用场景","slug":"spring-数据绑定使用场景","link":"#spring-数据绑定使用场景","children":[]},{"level":2,"title":"DataBinder","slug":"databinder","link":"#databinder","children":[]},{"level":2,"title":"Spring 数据绑定元数据","slug":"spring-数据绑定元数据","link":"#spring-数据绑定元数据","children":[]},{"level":2,"title":"Spring 数据绑定控制参数","slug":"spring-数据绑定控制参数","link":"#spring-数据绑定控制参数","children":[{"level":3,"title":"DataBinder 绑定控制参数","slug":"databinder-绑定控制参数","link":"#databinder-绑定控制参数","children":[]}]},{"level":2,"title":"BeanWrapper 的使用场景","slug":"beanwrapper-的使用场景","link":"#beanwrapper-的使用场景","children":[]},{"level":2,"title":"Spring 底层 Java Beans 替换实现","slug":"spring-底层-java-beans-替换实现","link":"#spring-底层-java-beans-替换实现","children":[]},{"level":2,"title":"DataBinder 数据校验","slug":"databinder-数据校验","link":"#databinder-数据校验","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1735573878000,"updatedTime":1735573878000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":3.22,"words":967},"filePathRelative":"posts/java/spring/01-Spring核心/22.Spring数据绑定.md","localizedDate":"2022年12月22日","excerpt":"\\n<p><strong>Spring 数据绑定(Data Binding)的作用是将用户的输入动态绑定到 JavaBean</strong>。换句话说，Spring 数据绑定机制是将属性值设置到目标对象中。</p>\\n<p>在 Spring 中，数据绑定功能主要由 <code>DataBinder</code> 类实现。此外，<code>BeanWrapper</code> 也具有类似的功能，但 <code>DataBinder</code> 额外支持字段验证、字段格式化和绑定结果分析。</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20230111150930.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{h as comp,k as data};
