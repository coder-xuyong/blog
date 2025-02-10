import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,e,a,b as l,o as n}from"./app-o6bxbNu3.js";const r={};function h(p,s){return n(),t("div",null,[s[0]||(s[0]=e("p",null,"记录经常使用的 mysql 函数。",-1)),a(" more "),s[1]||(s[1]=l(`<h2 id="find-in-set-str-strlist" tabindex="-1"><a class="header-anchor" href="#find-in-set-str-strlist"><span>FIND_IN_SET(str, strlist)</span></a></h2><ul><li>str：需要查找的目标字符串。</li><li>strlist：由逗号分隔的字符串列表，函数会在此列表中查找 str。</li></ul><p>1.简单查找</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SELECT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FIND_IN_SET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;apple&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;banana,apple,orange&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在这个例子中，str 是 &#39;apple&#39;，strlist 是 &#39;banana,apple,orange&#39;。函数会在 strlist 中查找 &#39;apple&#39;，由于 &#39;apple&#39; 是列表中的第二个元素，所以该查询将返回 2。</p><ol start="2"><li>未找到的情况</li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sqlSELECT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FIND_IN_SET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;grape&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;banana,apple,orange&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里要查找的 &#39;grape&#39; 不在 &#39;banana,apple,orange&#39; 列表中，因此函数会返回 0。</p><ol start="3"><li>在 WHERE 子句中使用<br> 假设有一个 products 表，其中 tags 列存储着以逗号分隔的产品标签列表，下面的查询将找出所有带有 &#39;sale&#39; 标签的产品：</li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sqlSELECT</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> products</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WHERE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FIND_IN_SET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;sale&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) &gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,10))])}const k=i(r,[["render",h],["__file","mysql常见函数.html.vue"]]),g=JSON.parse('{"path":"/posts/mysql/mysql%E5%B8%B8%E8%A7%81%E5%87%BD%E6%95%B0.html","title":"AI 入门","lang":"zh-CN","frontmatter":{"title":"AI 入门","icon":"fa-solid fa-ghost","date":"2025-02-10T00:00:00.000Z","lastUpdated":true,"order":1,"isOriginal":true,"author":[{"name":"xuyong","url":"https://github.com/coder-xuyong"}],"category":["mysql"],"tag":["mysql"],"sticky":false,"star":true,"description":"记录经常使用的 mysql 函数。","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/posts/mysql/mysql%E5%B8%B8%E8%A7%81%E5%87%BD%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"AI 入门"}],["meta",{"property":"og:description","content":"记录经常使用的 mysql 函数。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-10T09:03:14.000Z"}],["meta",{"property":"article:author","content":"xuyong"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:published_time","content":"2025-02-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-10T09:03:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AI 入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-02-10T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-10T09:03:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"FIND_IN_SET(str, strlist)","slug":"find-in-set-str-strlist","link":"#find-in-set-str-strlist","children":[]}],"git":{"createdTime":1739178194000,"updatedTime":1739178194000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"posts/mysql/mysql常见函数.md","localizedDate":"2025年2月10日","excerpt":"<p>记录经常使用的 mysql 函数。</p>\\n","autoDesc":true}');export{k as comp,g as data};
