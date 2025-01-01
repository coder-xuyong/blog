"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[645],{95397:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>r,data:()=>s});var l=a(20641),i=a(90033),n=a(50953);const r={__name:"page.html",setup(e){const t=(0,l.pM)({setup(){const e=(0,n.KR)("Hello world!"),t=t=>{e.value=t.target.value};return()=>[(0,l.h)("p",[(0,l.h)("span","输入: "),(0,l.h)("input",{value:e.value,onInput:t})]),(0,l.h)("p",[(0,l.h)("span","输出: "),e.value])]}});return(e,a)=>{const r=(0,l.g2)("Badge"),s=(0,l.g2)("VPCard");return(0,l.uX)(),(0,l.CE)("div",null,[a[2]||(a[2]=(0,l.Lk)("p",null,[(0,l.Lk)("code",null,"more"),(0,l.eW)(" 注释之前的内容被视为文章摘要。")],-1)),(0,l.Q3)(" more "),a[3]||(a[3]=(0,l.Fv)('<h2 id="页面标题" tabindex="-1"><a class="header-anchor" href="#页面标题"><span>页面标题</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>Markdown 中的第一个 H1 标题会被视为页面标题。</p><p>你可以在 Markdown 的 Frontmatter 中设置页面标题。</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">页面标题</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息"><span>页面信息</span></a></h2><p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p><ul><li>作者设置为 Ms.Hope。</li><li>写作日期为 2020 年 1 月 1 日</li><li>分类为 “使用指南”</li><li>标签为 “页面配置” 和 “使用指南”</li></ul><h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容"><span>页面内容</span></a></h2><p>你可以自由在这里书写你的 Markdown。</p><div class="hint-container tip"><p class="hint-container-title">图片引入</p><ul><li>你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。</li><li>对于 <code>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code>/</code> 进行引用。</li></ul></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：</p><p>2</p>',14)),(0,l.Q3)(" markdownlint-disable MD033 "),(0,l.Lk)("ul",null,[((0,l.uX)(),(0,l.CE)(l.FK,null,(0,l.pI)(3,(e=>(0,l.Lk)("li",null,(0,i.v_)(e),1))),64))]),(0,l.Q3)(" markdownlint-enable MD033 "),a[4]||(a[4]=(0,l.Lk)("p",null,"你也可以创建并引入你自己的组件。",-1)),(0,l.bF)((0,n.R1)(t)),a[5]||(a[5]=(0,l.Lk)("hr",null,null,-1)),a[6]||(a[6]=(0,l.Lk)("p",null,"主题包含一些有用的组件。这里是一些例子:",-1)),(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,[(0,l.Lk)("p",null,[a[0]||(a[0]=(0,l.eW)("文字结尾应该有深蓝色的 徽章文字 徽章。 ")),(0,l.bF)(r,{text:"徽章文字",color:"#242378"})])]),(0,l.Lk)("li",null,[a[1]||(a[1]=(0,l.Lk)("p",null,"一个卡片:",-1)),(0,l.bF)(s,(0,i._B)((0,l.Ng)({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16)])]),a[7]||(a[7]=(0,l.Fv)('<h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格"><span>表格</span></a></h2><table><thead><tr><th style="text-align:center;">居中</th><th style="text-align:right;">右对齐</th><th style="text-align:left;">左对齐</th></tr></thead><tbody><tr><td style="text-align:center;">居中使用<code>:-:</code></td><td style="text-align:right;">右对齐使用<code>-:</code></td><td style="text-align:left;">左对齐使用<code>:-</code></td></tr><tr><td style="text-align:center;">b</td><td style="text-align:right;">aaaaaaaaa</td><td style="text-align:left;">aaaa</td></tr><tr><td style="text-align:center;">c</td><td style="text-align:right;">aaaa</td><td style="text-align:left;">a</td></tr></tbody></table>',2))])}}},s=JSON.parse('{"path":"/demo/page.html","title":"页面配置使用说明","lang":"zh-CN","frontmatter":{"title":"页面配置使用说明","cover":"/assets/images/blogs/page1.png","icon":"file","order":3,"author":"xuyong","date":"2024-12-21T00:00:00.000Z","category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":false,"star":false,"footer":"这是测试显示的页脚","copyright":"无版权","article":false,"description":"more 注释之前的内容被视为文章摘要。","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/demo/page.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"页面配置使用说明"}],["meta",{"property":"og:description","content":"more 注释之前的内容被视为文章摘要。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://coder-xuyong.github.io/blog/blog/assets/images/blogs/page1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-22T06:20:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://coder-xuyong.github.io/blog/blog/assets/images/blogs/page1.png"}],["meta",{"name":"twitter:image:alt","content":"页面配置使用说明"}],["meta",{"property":"article:author","content":"xuyong"}],["meta",{"property":"article:tag","content":"页面配置"}],["meta",{"property":"article:tag","content":"使用指南"}],["meta",{"property":"article:published_time","content":"2024-12-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T06:20:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"页面配置使用说明\\",\\"description\\":\\"more 注释之前的内容被视为文章摘要。\\"}"]]},"headers":[{"level":2,"title":"页面标题","slug":"页面标题","link":"#页面标题","children":[]},{"level":2,"title":"页面信息","slug":"页面信息","link":"#页面信息","children":[]},{"level":2,"title":"页面内容","slug":"页面内容","link":"#页面内容","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[]},{"level":2,"title":"表格","slug":"表格","link":"#表格","children":[]}],"git":{"createdTime":1734619579000,"updatedTime":1734848450000,"contributors":[{"name":"coder-xuyong","username":"coder-xuyong","email":"1299461580@qq.com","commits":3,"url":"https://github.com/coder-xuyong"}]},"readingTime":{"minutes":1.9,"words":570},"filePathRelative":"demo/page.md","localizedDate":"2024年12月21日","excerpt":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\\n","autoDesc":true}')}}]);