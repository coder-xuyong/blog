"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5558],{66262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}},32454:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>e,data:()=>t});var n=a(20641);const l={},e=(0,a(66262).A)(l,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,[i[0]||(i[0]=(0,n.Lk)("p",null,"触发器",-1)),(0,n.Q3)(" more "),i[1]||(i[1]=(0,n.Fv)('<h2 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器"><span>触发器</span></a></h2><p>1.触发器创建,语法如下</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CREATE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TRIGGER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> trigger_name</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{BEFORE | AFTER} {INSERT | UPDATE | DELETE} ON table_name</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FOR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> EACH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ROW</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">BEGIN</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    --</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 触发器主体</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    --</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 你的SQL语句</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">END</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>eg:<br> 创建 order 表</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CREATE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TABLE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> INT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> AUTO_INCREMENT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PRIMARY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> KEY,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    product</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">255</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    quantity</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> INT,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    order_date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DATE</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 order_summary 表</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CREATE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TABLE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> INT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> AUTO_INCREMENT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PRIMARY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> KEY,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    product</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">255</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    quantity</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> INT,</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    order_date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DATE</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建触发器</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">DELIMITER</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> $$</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CREATE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TRIGGER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> after_insert_order</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">AFTER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> INSERT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ON</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> orders</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FOR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> EACH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ROW</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">BEGIN</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    UPDATE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> order_summary</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> total_orders</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> total_orders</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">END$$</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">DELIMITER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试触发器</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 插入几条订单记录</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INSERT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> INTO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (product, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">quantity,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> order_date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) VALUES (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;Apple&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 10,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;2024-11-28&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">INSERT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> INTO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (product, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">quantity,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> order_date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) VALUES (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;Banana&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 5,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;2024-11-28&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 查看当前的总订单数</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SELECT</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> order_summary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：databases.tableName 在mybatis 和 jdbc中，手动 database 写死无效，只能初始化数据库的时候设置的 database 就是 table 所存在的库才有效</p>',12))])}]]),t=JSON.parse('{"path":"/posts/mysql/mysql%E8%A7%A6%E5%8F%91%E5%99%A8.html","title":"触发器","lang":"zh-CN","frontmatter":{"title":"触发器","icon":"pen-to-square","date":"2023-06-01T00:00:00.000Z","lastUpdated":true,"category":["mysql"],"tag":["sql"],"description":"触发器","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/posts/mysql/mysql%E8%A7%A6%E5%8F%91%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"触发器"}],["meta",{"property":"og:description","content":"触发器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-22T14:03:31.000Z"}],["meta",{"property":"article:tag","content":"sql"}],["meta",{"property":"article:published_time","content":"2023-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T14:03:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"触发器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-22T14:03:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"触发器","slug":"触发器","link":"#触发器","children":[]}],"git":{"createdTime":1734876211000,"updatedTime":1734876211000,"contributors":[{"name":"coder-xuyong","username":"coder-xuyong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/coder-xuyong"}]},"readingTime":{"minutes":0.74,"words":221},"filePathRelative":"posts/mysql/mysql触发器.md","localizedDate":"2023年6月1日","excerpt":"<p>触发器</p>\\n","autoDesc":true}')}}]);