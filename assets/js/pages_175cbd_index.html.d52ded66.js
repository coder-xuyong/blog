"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4736],{66262:(e,l)=>{l.A=(e,l)=>{const a=e.__vccOpts||e;for(const[e,r]of l)a[e]=r;return a}},78724:(e,l,a)=>{a.r(l),a.d(l,{comp:()=>i,data:()=>n});var r=a(20641);const t={},i=(0,a(66262).A)(t,[["render",function(e,l){return(0,r.uX)(),(0,r.CE)("div",null,l[0]||(l[0]=[(0,r.Fv)('<h1 id="spring-泛型处理" tabindex="-1"><a class="header-anchor" href="#spring-泛型处理"><span>Spring 泛型处理</span></a></h1><h2 id="java-泛型基础" tabindex="-1"><a class="header-anchor" href="#java-泛型基础"><span>Java 泛型基础</span></a></h2><p>泛型类型</p><ul><li>泛型类型是在类型上参数化的泛型类或接口</li></ul><p>泛型使用场景</p><ul><li>编译时强类型检查</li><li>避免类型强转</li><li>实现通用算法</li></ul><p>泛型类型擦写</p><ul><li>泛型被引入到 Java 语言中，以便在编译时提供更严格的类型检查并支持泛型编程。类型擦除确保不会<br> 为参数化类型创建新类；因此，泛型不会产生运行时开销。为了实现泛型，编译器将类型擦除应用于： <ul><li>将泛型类型中的所有类型参数替换为其边界，如果类型参数是无边界的，则将其替换为<br> “Object”。因此，生成的字节码只包含普通类、接口和方法</li><li>必要时插入类型转换以保持类型安全</li><li>生成桥方法以保留扩展泛型类型中的多态性</li></ul></li></ul><h2 id="java-5-类型接口" tabindex="-1"><a class="header-anchor" href="#java-5-类型接口"><span>Java 5 类型接口</span></a></h2><p>Java 5 类型接口 - <code>java.lang.reflect.Type</code></p><table><thead><tr><th>派生类或接口</th><th>说明</th></tr></thead><tbody><tr><td><code>java.lang.Class</code></td><td>Java 类 API，如 <code>java.lang.String</code></td></tr><tr><td><code>java.lang.reflect.GenericArrayType</code></td><td>泛型数组类型</td></tr><tr><td><code>java.lang.reflect.ParameterizedType</code></td><td>泛型参数类型</td></tr><tr><td><code>java.lang.reflect.TypeVariable</code></td><td>泛型类型变量，如 <code>Collection&lt;E&gt;</code> 中的 E</td></tr><tr><td><code>java.lang.reflect.WildcardType</code></td><td>泛型通配类型</td></tr></tbody></table><p>Java 泛型反射 API</p><table><thead><tr><th>类型</th><th>API</th></tr></thead><tbody><tr><td>泛型信息（Generics Info）</td><td><code>java.lang.Class#getGenericInfo()</code></td></tr><tr><td>泛型参数（Parameters）</td><td><code>java.lang.reflect.ParameterizedType</code></td></tr><tr><td>泛型父类（Super Classes）</td><td><code>java.lang.Class#getGenericSuperclass()</code></td></tr><tr><td>泛型接口（Interfaces）</td><td><code>java.lang.Class#getGenericInterfaces()</code></td></tr><tr><td>泛型声明（Generics Declaration）</td><td><code>java.lang.reflect.GenericDeclaration</code></td></tr></tbody></table><h2 id="spring-泛型类型辅助类" tabindex="-1"><a class="header-anchor" href="#spring-泛型类型辅助类"><span>Spring 泛型类型辅助类</span></a></h2><p>核心 API - <code>org.springframework.core.GenericTypeResolver</code></p><ul><li>版本支持：[2.5.2 , )</li><li>处理类型相关（Type）相关方法 <ul><li><code>resolveReturnType</code></li><li><code>resolveType</code></li></ul></li><li>处理泛型参数类型（<code>ParameterizedType</code>）相关方法 <ul><li><code>resolveReturnTypeArgument</code></li><li><code>resolveTypeArgument</code></li><li><code>resolveTypeArguments</code></li></ul></li><li>处理泛型类型变量（<code>TypeVariable</code>）相关方法 <ul><li><code>getTypeVariableMap</code></li></ul></li></ul><h2 id="spring-泛型集合类型辅助类" tabindex="-1"><a class="header-anchor" href="#spring-泛型集合类型辅助类"><span>Spring 泛型集合类型辅助类</span></a></h2><p>核心 API - <code>org.springframework.core.GenericCollectionTypeResolver</code></p><ul><li>版本支持：[2.0 , 4.3]</li><li>替换实现：<code>org.springframework.core.ResolvableType</code></li><li>处理 Collection 相关 <ul><li><code>getCollection*Type</code></li></ul></li><li>处理 Map 相关 <ul><li><code>getMapKey*Type</code></li><li><code>getMapValue*Type</code></li></ul></li></ul><h2 id="spring-方法参数封装-methodparameter" tabindex="-1"><a class="header-anchor" href="#spring-方法参数封装-methodparameter"><span>Spring 方法参数封装 - MethodParameter</span></a></h2><p>核心 API - <code>org.springframework.core.MethodParameter</code></p><ul><li>起始版本：[2.0 , )</li><li>元信息 <ul><li>关联的方法 - Method</li><li>关联的构造器 - Constructor</li><li>构造器或方法参数索引 - parameterIndex</li><li>构造器或方法参数类型 - parameterType</li><li>构造器或方法参数泛型类型 - genericParameterType</li><li>构造器或方法参数参数名称 - parameterName</li><li>所在的类 - containingClass</li></ul></li></ul><h2 id="spring-4-0-泛型优化实现-resolvabletype" tabindex="-1"><a class="header-anchor" href="#spring-4-0-泛型优化实现-resolvabletype"><span>Spring 4.0 泛型优化实现 - ResolvableType</span></a></h2><p>核心 API - <code>org.springframework.core.ResolvableType</code></p><ul><li>起始版本：[4.0 , )</li><li>扮演角色：<code>GenericTypeResolver</code> 和 <code>GenericCollectionTypeResolver</code> 替代者</li><li>工厂方法：<code>for*</code> 方法</li><li>转换方法：<code>as*</code> 方法</li><li>处理方法：<code>resolve*</code> 方法</li></ul><h2 id="resolvabletype-的局限性" tabindex="-1"><a class="header-anchor" href="#resolvabletype-的局限性"><span>ResolvableType 的局限性</span></a></h2><ul><li>局限一：ResolvableType 无法处理泛型擦写</li><li>局限二：ResolvableType 无法处理非具体化的 ParameterizedType</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p><strong>Java 泛型擦写发生在编译时还是运行时</strong>？</p><p>运行时</p><p><strong>请介绍 Java 5 Type 类型的派生类或接口</strong></p><ul><li><code>java.lang.Class</code></li><li><code>java.lang.reflect.GenericArrayType</code></li><li><code>java.lang.reflect.ParameterizedType</code></li><li><code>java.lang.reflect.TypeVariable</code></li><li><code>java.lang.reflect.WildcardType</code></li></ul><p><strong>请说明 ResolvableType 的设计优势</strong>？</p><ul><li>简化 Java 5 Type API 开发，屏蔽复杂 API 的运用，如 ParameterizedType</li><li>不变性设计（Immutability）</li><li>Fluent API 设计（Builder 模式），链式（流式）编程</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans" target="_blank" rel="noopener noreferrer">Spring 官方文档之 Core Technologies</a></li><li><a href="https://time.geekbang.org/course/intro/265" target="_blank" rel="noopener noreferrer">《小马哥讲 Spring 核心编程思想》</a></li></ul>',36)]))}]]),n=JSON.parse('{"path":"/pages/175cbd/","title":"Spring 泛型处理","lang":"zh-CN","frontmatter":{"title":"Spring 泛型处理","date":"2022-12-22T20:11:52.000Z","order":27,"categories":["Java","框架","Spring","Spring核心"],"tags":["Java","框架","Spring"],"permalink":"/pages/175cbd/","description":"Spring 泛型处理 Java 泛型基础 泛型类型 泛型类型是在类型上参数化的泛型类或接口 泛型使用场景 编译时强类型检查 避免类型强转 实现通用算法 泛型类型擦写 泛型被引入到 Java 语言中，以便在编译时提供更严格的类型检查并支持泛型编程。类型擦除确保不会 为参数化类型创建新类；因此，泛型不会产生运行时开销。为了实现泛型，编译器将类型擦除应用于...","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/pages/175cbd/"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"Spring 泛型处理"}],["meta",{"property":"og:description","content":"Spring 泛型处理 Java 泛型基础 泛型类型 泛型类型是在类型上参数化的泛型类或接口 泛型使用场景 编译时强类型检查 避免类型强转 实现通用算法 泛型类型擦写 泛型被引入到 Java 语言中，以便在编译时提供更严格的类型检查并支持泛型编程。类型擦除确保不会 为参数化类型创建新类；因此，泛型不会产生运行时开销。为了实现泛型，编译器将类型擦除应用于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-30T15:51:18.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2022-12-22T20:11:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-30T15:51:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 泛型处理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-22T20:11:52.000Z\\",\\"dateModified\\":\\"2024-12-30T15:51:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"Java 泛型基础","slug":"java-泛型基础","link":"#java-泛型基础","children":[]},{"level":2,"title":"Java 5 类型接口","slug":"java-5-类型接口","link":"#java-5-类型接口","children":[]},{"level":2,"title":"Spring 泛型类型辅助类","slug":"spring-泛型类型辅助类","link":"#spring-泛型类型辅助类","children":[]},{"level":2,"title":"Spring 泛型集合类型辅助类","slug":"spring-泛型集合类型辅助类","link":"#spring-泛型集合类型辅助类","children":[]},{"level":2,"title":"Spring 方法参数封装 - MethodParameter","slug":"spring-方法参数封装-methodparameter","link":"#spring-方法参数封装-methodparameter","children":[]},{"level":2,"title":"Spring 4.0 泛型优化实现 - ResolvableType","slug":"spring-4-0-泛型优化实现-resolvabletype","link":"#spring-4-0-泛型优化实现-resolvabletype","children":[]},{"level":2,"title":"ResolvableType 的局限性","slug":"resolvabletype-的局限性","link":"#resolvabletype-的局限性","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1735573878000,"updatedTime":1735573878000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":2.53,"words":758},"filePathRelative":"posts/java/spring/01-Spring核心/27.Spring泛型处理.md","localizedDate":"2022年12月22日","excerpt":"\\n<h2>Java 泛型基础</h2>\\n<p>泛型类型</p>\\n<ul>\\n<li>泛型类型是在类型上参数化的泛型类或接口</li>\\n</ul>\\n<p>泛型使用场景</p>\\n<ul>\\n<li>编译时强类型检查</li>\\n<li>避免类型强转</li>\\n<li>实现通用算法</li>\\n</ul>\\n<p>泛型类型擦写</p>\\n<ul>\\n<li>泛型被引入到 Java 语言中，以便在编译时提供更严格的类型检查并支持泛型编程。类型擦除确保不会<br>\\n为参数化类型创建新类；因此，泛型不会产生运行时开销。为了实现泛型，编译器将类型擦除应用于：\\n<ul>\\n<li>将泛型类型中的所有类型参数替换为其边界，如果类型参数是无边界的，则将其替换为<br>\\n“Object”。因此，生成的字节码只包含普通类、接口和方法</li>\\n<li>必要时插入类型转换以保持类型安全</li>\\n<li>生成桥方法以保留扩展泛型类型中的多态性</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}')}}]);