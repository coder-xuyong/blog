import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as o,o as a}from"./app-ByFpwlZ2.js";const n={};function c(i,e){return a(),t("div",null,e[0]||(e[0]=[o('<h1 id="spring-mvc-之过滤器" tabindex="-1"><a class="header-anchor" href="#spring-mvc-之过滤器"><span>Spring MVC 之过滤器</span></a></h1><p><code>spring-web</code> 模块提供了一些有用的 Filter：</p><ul><li><a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#filters-http-put" target="_blank" rel="noopener noreferrer">Form Data</a></li><li><a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#filters-forwarded-headers" target="_blank" rel="noopener noreferrer">Forwarded Headers</a></li><li><a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#filters-shallow-etag" target="_blank" rel="noopener noreferrer">Shallow ETag</a></li><li><a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#filters-cors" target="_blank" rel="noopener noreferrer">CORS</a></li></ul><h2 id="表单内容过滤器" tabindex="-1"><a class="header-anchor" href="#表单内容过滤器"><span>表单内容过滤器</span></a></h2><p>浏览器只能通过 HTTP GET 或 HTTP POST 提交表单数据，但非浏览器客户端也可以使用 HTTP PUT、PATCH 和 DELETE。 Servlet API 需要 <code>ServletRequest.getParameter*()</code> 系列方法来支持仅对 HTTP POST 的表单字段访问。</p><p><code>spring-web</code> 模块提供了 <code>FormContentFilter</code> 来拦截内容类型为 <code>applicationx-www-form-urlencoded</code> 的 HTTP PUT、PATCH、DELETE 请求，从请求体中读取表单数据，并包装 <code>ServletRequest</code> 通过 <code>ServletRequest.getParameter()</code> 系列方法使表单数据可用。</p><h2 id="转发过滤器" tabindex="-1"><a class="header-anchor" href="#转发过滤器"><span>转发过滤器</span></a></h2><p>当请求通过代理（如负载均衡器）时，主机、端口和方案可能会发生变化，这使得从客户端角度创建指向正确主机、端口和方案的链接成为一项挑战。</p><p><a href="https://tools.ietf.org/html/rfc7239" target="_blank" rel="noopener noreferrer">RFC 7239</a> 定义了 <code>Forwarded</code> HTTP 头，代理可以使用它来提供有关原始请求的信息。还有其他非标准头，包括 <code>X-Forwarded-Host</code>、<code>X-Forwarded-Port</code>、<code>X-Forwarded-Proto</code>、<code>X-Forwarded-Ssl</code> 和 <code>X-Forwarded-Prefix</code>。</p><p><code>ForwardedHeaderFilter</code> 是一个 Servlet 过滤器，它修改请求以便 a) 根据 <code>Forwarded</code> 头更改主机、端口和 scheme；b) 删除这些头以消除进一步的影响。该过滤器依赖于包装请求，因此它必须排在其他过滤器之前，例如 <code>RequestContextFilter</code>，它应该与修改后的请求一起使用，而不是原始请求。</p><p><code>Forwarded</code> 头有安全考量，因为应用程序无法知道头是由代理按预期添加的，还是由恶意客户端添加的。这就是为什么应将信任边界处的代理配置为删除来自外部的不受信任的 <code>Forwarded</code> 头。还可以使用 <code>removeOnly=true</code> 配置 <code>ForwardedHeaderFilter</code>，在这种情况下它会删除但不使用头。</p><p>为了支持<a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-async" target="_blank" rel="noopener noreferrer">异步请求</a>和错误分派，此过滤器应使用 <code>DispatcherType.ASYNC</code> 和 <code>DispatcherType.ERROR</code> 进行映射。如果使用 Spring Framework 的 <code>AbstractAnnotationConfigDispatcherServletInitializer</code>（参见 <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-container-config" target="_blank" rel="noopener noreferrer">Servlet Config</a>），所有过滤器都会自动为所有调度类型注册。但是，如果通过 <code>web.xml</code> 或在 Spring Boot 中通过 <code>FilterRegistrationBean</code> 注册过滤器，请确保除了 <code>DispatcherType.REQUEST</code> 之外还包括 <code>DispatcherType.ASYNC</code> 和 <code>DispatcherType.ERROR</code>。</p><h2 id="etag-过滤器" tabindex="-1"><a class="header-anchor" href="#etag-过滤器"><span>ETag 过滤器</span></a></h2><p><code>ShallowEtagHeaderFilter</code> 过滤器通过缓存写入响应的内容并从中计算 MD5 哈希来创建“浅”ETag。下次客户端发送时，它会做同样的事情，但它还会将计算值与 <code>If-None-Match</code> 请求标头进行比较，如果两者相等，则返回 304 (NOT_MODIFIED)。</p><p>此策略节省网络带宽但不节省 CPU，因为必须为每个请求计算完整响应。前面描述的控制器级别的其他策略可以避免计算。</p><p>此过滤器有一个 <code>writeWeakETag</code> 参数，该参数将过滤器配置为写入类似于以下内容的弱 ETag：<code>W&quot;02a2d595e6ed9a0b24f027f2b63b134d6&quot;</code>（如 <a href="https://tools.ietf.org/html/rfc7232#section-2.3" target="_blank" rel="noopener noreferrer">RFC 7232 Section 2.3</a> 中所定义）。</p><p>为了支持<a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-async" target="_blank" rel="noopener noreferrer">异步请求</a>，这个过滤器必须用 <code>DispatcherType.ASYNC</code> 映射，这样过滤器才能延迟并成功生成一个 ETag 到最后最后一次异步调度。如果使用 Spring Framework 的 <code>AbstractAnnotationConfigDispatcherServletInitializer</code>，所有过滤器都会自动为所有调度类型注册。但是，如果通过 <code>web.xml</code> 或在 Spring Boot 中通过 <code>FilterRegistrationBean</code> 注册过滤器，请确保包含 <code>DispatcherType.ASYNC</code>。</p><h2 id="跨域过滤器" tabindex="-1"><a class="header-anchor" href="#跨域过滤器"><span>跨域过滤器</span></a></h2><p>Spring MVC 通过控制器上的注解为 CORS 配置提供细粒度支持。但是，当与 Spring Security 一起使用时，建议依赖内置的 <code>CorsFilter</code>，它必须在 Spring Security 的过滤器链之前订阅。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/index.html" target="_blank" rel="noopener noreferrer">Spring Framework 官方文档</a></li><li><a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html" target="_blank" rel="noopener noreferrer">Spring Framework 官方文档之 Web</a></li></ul>',21)]))}const p=r(n,[["render",c],["__file","index.html.vue"]]),s=JSON.parse('{"path":"/pages/4a164d/","title":"Spring MVC 之过滤器","lang":"zh-CN","frontmatter":{"title":"Spring MVC 之过滤器","date":"2023-02-14T17:44:09.000Z","categories":["Java","框架","Spring","SpringWeb"],"tags":["Java","框架","Spring","Web","Filter"],"permalink":"/pages/4a164d/","description":"Spring MVC 之过滤器 spring-web 模块提供了一些有用的 Filter： Form Data Forwarded Headers Shallow ETag CORS 表单内容过滤器 浏览器只能通过 HTTP GET 或 HTTP POST 提交表单数据，但非浏览器客户端也可以使用 HTTP PUT、PATCH 和 DELETE。 Se...","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/pages/4a164d/"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"Spring MVC 之过滤器"}],["meta",{"property":"og:description","content":"Spring MVC 之过滤器 spring-web 模块提供了一些有用的 Filter： Form Data Forwarded Headers Shallow ETag CORS 表单内容过滤器 浏览器只能通过 HTTP GET 或 HTTP POST 提交表单数据，但非浏览器客户端也可以使用 HTTP PUT、PATCH 和 DELETE。 Se..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-30T15:51:18.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"Web"}],["meta",{"property":"article:tag","content":"Filter"}],["meta",{"property":"article:published_time","content":"2023-02-14T17:44:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-30T15:51:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring MVC 之过滤器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-14T17:44:09.000Z\\",\\"dateModified\\":\\"2024-12-30T15:51:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"表单内容过滤器","slug":"表单内容过滤器","link":"#表单内容过滤器","children":[]},{"level":2,"title":"转发过滤器","slug":"转发过滤器","link":"#转发过滤器","children":[]},{"level":2,"title":"ETag 过滤器","slug":"etag-过滤器","link":"#etag-过滤器","children":[]},{"level":2,"title":"跨域过滤器","slug":"跨域过滤器","link":"#跨域过滤器","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1735573878000,"updatedTime":1735573878000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":3.26,"words":979},"filePathRelative":"posts/java/spring/03-SpringWeb/04.Spring过滤器.md","localizedDate":"2023年2月14日","excerpt":"\\n<p><code>spring-web</code> 模块提供了一些有用的 Filter：</p>\\n<ul>\\n<li><a href=\\"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#filters-http-put\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Form Data</a></li>\\n<li><a href=\\"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#filters-forwarded-headers\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Forwarded Headers</a></li>\\n<li><a href=\\"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#filters-shallow-etag\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Shallow ETag</a></li>\\n<li><a href=\\"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#filters-cors\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CORS</a></li>\\n</ul>","autoDesc":true}');export{p as comp,s as data};
