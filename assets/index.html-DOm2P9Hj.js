import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as r,o as i}from"./app-CwOdZwR9.js";const n={};function d(h,e){return i(),a("div",null,e[0]||(e[0]=[r('<h1 id="shardingsphere-简介" tabindex="-1"><a class="header-anchor" href="#shardingsphere-简介"><span>ShardingSphere 简介</span></a></h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><h3 id="shardingsphere-组件" tabindex="-1"><a class="header-anchor" href="#shardingsphere-组件"><span>ShardingSphere 组件</span></a></h3><p>ShardingSphere 是一套开源的分布式数据库中间件解决方案组成的生态圈，它由 Sharding-JDBC、Sharding-Proxy 和 Sharding-Sidecar（计划中）这 3 款相互独立的产品组成。 他们均提供标准化的数据分片、分布式事务和数据库治理功能，可适用于如 Java 同构、异构语言、云原生等各种多样化的应用场景。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151613.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="shardingsphere-jdbc" tabindex="-1"><a class="header-anchor" href="#shardingsphere-jdbc"><span>ShardingSphere-JDBC</span></a></h4><p>定位为轻量级 Java 框架，在 Java 的 JDBC 层提供的额外服务。 它使用客户端直连数据库，以 jar 包形式提供服务，无需额外部署和依赖，可理解为增强版的 JDBC 驱动，完全兼容 JDBC 和各种 ORM 框架。</p><ul><li>适用于任何基于 JDBC 的 ORM 框架，如：JPA, Hibernate, Mybatis, Spring JDBC Template 或直接使用 JDBC。</li><li>支持任何第三方的数据库连接池，如：DBCP, C3P0, BoneCP, Druid, HikariCP 等。</li><li>支持任意实现 JDBC 规范的数据库，目前支持 MySQL，Oracle，SQLServer，PostgreSQL 以及任何遵循 SQL92 标准的数据库。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151213.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="sharding-proxy" tabindex="-1"><a class="header-anchor" href="#sharding-proxy"><span>Sharding-Proxy</span></a></h4><p>定位为透明化的数据库代理端，提供封装了数据库二进制协议的服务端版本，用于完成对异构语言的支持。 目前提供 MySQL 和 PostgreSQL 版本，它可以使用任何兼容 MySQL/PostgreSQL 协议的访问客户端(如：MySQL Command Client, MySQL Workbench, Navicat 等)操作数据，对 DBA 更加友好。</p><ul><li>向应用程序完全透明，可直接当做 MySQL/PostgreSQL 使用。</li><li>适用于任何兼容 MySQL/PostgreSQL 协议的的客户端。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151434.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="sharding-sidecar-todo" tabindex="-1"><a class="header-anchor" href="#sharding-sidecar-todo"><span>Sharding-Sidecar（TODO）</span></a></h4><p>定位为 Kubernetes 的云原生数据库代理，以 Sidecar 的形式代理所有对数据库的访问。 通过无中心、零侵入的方案提供与数据库交互的的啮合层，即 <code>Database Mesh</code>，又可称数据库网格。</p><p>Database Mesh 的关注重点在于如何将分布式的数据访问应用与数据库有机串联起来，它更加关注的是交互，是将杂乱无章的应用与数据库之间的交互进行有效地梳理。 使用 Database Mesh，访问数据库的应用和数据库终将形成一个巨大的网格体系，应用和数据库只需在网格体系中对号入座即可，它们都是被啮合层所治理的对象。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151557.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><table><thead><tr><th style="text-align:left;"><em>Sharding-JDBC</em></th><th style="text-align:left;"><em>Sharding-Proxy</em></th><th style="text-align:left;"><em>Sharding-Sidecar</em></th><th></th></tr></thead><tbody><tr><td style="text-align:left;">数据库</td><td style="text-align:left;">任意</td><td style="text-align:left;">MySQL</td><td>MySQL</td></tr><tr><td style="text-align:left;">连接消耗数</td><td style="text-align:left;">高</td><td style="text-align:left;">低</td><td>高</td></tr><tr><td style="text-align:left;">异构语言</td><td style="text-align:left;">仅 Java</td><td style="text-align:left;">任意</td><td>任意</td></tr><tr><td style="text-align:left;">性能</td><td style="text-align:left;">损耗低</td><td style="text-align:left;">损耗略高</td><td>损耗低</td></tr><tr><td style="text-align:left;">无中心化</td><td style="text-align:left;">是</td><td style="text-align:left;">否</td><td>是</td></tr><tr><td style="text-align:left;">静态入口</td><td style="text-align:left;">无</td><td style="text-align:left;">有</td><td>无</td></tr></tbody></table><h4 id="混合架构" tabindex="-1"><a class="header-anchor" href="#混合架构"><span>混合架构</span></a></h4><p>ShardingSphere-JDBC 采用无中心化架构，适用于 Java 开发的高性能的轻量级 OLTP 应用；ShardingSphere-Proxy 提供静态入口以及异构语言的支持，适用于 OLAP 应用以及对分片数据库进行管理和运维的场景。</p><p>Apache ShardingSphere 是多接入端共同组成的生态圈。 通过混合使用 ShardingSphere-JDBC 和 ShardingSphere-Proxy，并采用同一注册中心统一配置分片策略，能够灵活的搭建适用于各种场景的应用系统，使得架构师更加自由地调整适合与当前业务的最佳系统架构。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151658.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="功能列表" tabindex="-1"><a class="header-anchor" href="#功能列表"><span>功能列表</span></a></h3><h4 id="数据分片" tabindex="-1"><a class="header-anchor" href="#数据分片"><span>数据分片</span></a></h4><ul><li>分库 &amp; 分表</li><li>读写分离</li><li>分片策略定制化</li><li>无中心化分布式主键</li></ul><h4 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务"><span>分布式事务</span></a></h4><ul><li>标准化事务接口</li><li>XA 强一致事务</li><li>柔性事务</li></ul><h4 id="数据库治理" tabindex="-1"><a class="header-anchor" href="#数据库治理"><span>数据库治理</span></a></h4><ul><li>分布式治理</li><li>弹性伸缩</li><li>可视化链路追踪</li><li>数据加密</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://github.com/apache/incubator-shardingsphere" target="_blank" rel="noopener noreferrer">shardingsphere Github</a></li><li><a href="https://shardingsphere.apache.org/document/current/cn/overview/" target="_blank" rel="noopener noreferrer">shardingsphere 官方文档</a></li></ul>',31)]))}const l=t(n,[["render",d],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/pages/5ed2a2/","title":"ShardingSphere 简介","lang":"zh-CN","frontmatter":{"title":"ShardingSphere 简介","date":"2020-10-08T20:30:30.000Z","order":1,"categories":["数据库","数据库中间件","Shardingsphere"],"tags":["数据库","中间件","分库分表"],"permalink":"/pages/5ed2a2/","description":"ShardingSphere 简介 简介 ShardingSphere 组件 ShardingSphere 是一套开源的分布式数据库中间件解决方案组成的生态圈，它由 Sharding-JDBC、Sharding-Proxy 和 Sharding-Sidecar（计划中）这 3 款相互独立的产品组成。 他们均提供标准化的数据分片、分布式事务和数据库治理功...","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/pages/5ed2a2/"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"ShardingSphere 简介"}],["meta",{"property":"og:description","content":"ShardingSphere 简介 简介 ShardingSphere 组件 ShardingSphere 是一套开源的分布式数据库中间件解决方案组成的生态圈，它由 Sharding-JDBC、Sharding-Proxy 和 Sharding-Sidecar（计划中）这 3 款相互独立的产品组成。 他们均提供标准化的数据分片、分布式事务和数据库治理功..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151613.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T02:31:38.000Z"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"分库分表"}],["meta",{"property":"article:published_time","content":"2020-10-08T20:30:30.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-18T02:31:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ShardingSphere 简介\\",\\"image\\":[\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151613.png\\",\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151213.png\\",\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151434.png\\",\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151557.png\\",\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151658.png\\"],\\"datePublished\\":\\"2020-10-08T20:30:30.000Z\\",\\"dateModified\\":\\"2025-02-18T02:31:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"ShardingSphere 组件","slug":"shardingsphere-组件","link":"#shardingsphere-组件","children":[]},{"level":3,"title":"功能列表","slug":"功能列表","link":"#功能列表","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1739845898000,"updatedTime":1739845898000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":3.16,"words":947},"filePathRelative":"posts/02.database/02.数据库中间件/01.Shardingsphere/01.ShardingSphere简介.md","localizedDate":"2020年10月8日","excerpt":"\\n<h2>简介</h2>\\n<h3>ShardingSphere 组件</h3>\\n<p>ShardingSphere 是一套开源的分布式数据库中间件解决方案组成的生态圈，它由 Sharding-JDBC、Sharding-Proxy 和 Sharding-Sidecar（计划中）这 3 款相互独立的产品组成。 他们均提供标准化的数据分片、分布式事务和数据库治理功能，可适用于如 Java 同构、异构语言、云原生等各种多样化的应用场景。</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20201008151613.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>","autoDesc":true}');export{l as comp,p as data};
