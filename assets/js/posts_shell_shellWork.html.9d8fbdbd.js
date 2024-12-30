"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8628],{66262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,e]of i)a[s]=e;return a}},81709:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>l,data:()=>n});var e=a(20641);const t={},l=(0,a(66262).A)(t,[["render",function(s,i){return(0,e.uX)(),(0,e.CE)("div",null,[i[0]||(i[0]=(0,e.Lk)("p",null,"工作中遇到有关 shell 脚本的情景和处理记录",-1)),(0,e.Q3)(" more "),i[1]||(i[1]=(0,e.Fv)('<h2 id="_1、脚本启动停止jar包-并生成日志文件" tabindex="-1"><a class="header-anchor" href="#_1、脚本启动停止jar包-并生成日志文件"><span>1、脚本启动停止jar包，并生成日志文件</span></a></h2><p>start.bat</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> off</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">%1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mshta</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vbscript:CreateObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;WScript.Shell&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.Run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;%~s0 ::&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,0,FALSE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">window.close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)&amp;&amp;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">exit</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -jar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 包名.jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">StartupLog.log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  2&gt;&amp;1 &amp;</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">exit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，StartupLog.log 是日志文件</p><p>stop.bat</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> off</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> port=程序端口号</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /f </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tokens=1-5&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> %%i in (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;netstat -ano^|findstr &quot;:%port%&quot;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> taskkill /f /pid %%m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原文链接：<a href="https://blog.csdn.net/weixin_47148475/article/details/126747188" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_47148475/article/details/126747188</a></p><h2 id="_2、上面的变种" tabindex="-1"><a class="header-anchor" href="#_2、上面的变种"><span>2、上面的变种</span></a></h2><p>start2.bat</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> JAVA_HOME=./jdk</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CLASSPATH=.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">%JAVA_HOME%\\lib\\dt.jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">%JAVA_HOME%\\lib\\tools.jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Path=%JAVA_HOME%</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -jar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DMS_DEMO-1.0-SNAPSHOT.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stop2.bat</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> off</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 项目启动后，会占用的端口</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> port=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9021</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /f </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tokens=1-5&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> %%i in (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;netstat -ano^|findstr &quot;:%port%&quot;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kill</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> process</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %%m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> who</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %port%</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 根据 进程id pid 信息，杀掉进程</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    taskkill</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /pid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %%m</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',12))])}]]),n=JSON.parse('{"path":"/posts/shell/shellWork.html","title":"工作中遇到的 shell","lang":"zh-CN","frontmatter":{"title":"工作中遇到的 shell","icon":"pen-to-square","date":"2024-05-13T00:00:00.000Z","lastUpdated":true,"category":["windows"],"tag":["script","shell"],"description":"工作中遇到有关 shell 脚本的情景和处理记录","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/posts/shell/shellWork.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"工作中遇到的 shell"}],["meta",{"property":"og:description","content":"工作中遇到有关 shell 脚本的情景和处理记录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-22T14:03:31.000Z"}],["meta",{"property":"article:tag","content":"script"}],["meta",{"property":"article:tag","content":"shell"}],["meta",{"property":"article:published_time","content":"2024-05-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T14:03:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工作中遇到的 shell\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-22T14:03:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"1、脚本启动停止jar包，并生成日志文件","slug":"_1、脚本启动停止jar包-并生成日志文件","link":"#_1、脚本启动停止jar包-并生成日志文件","children":[]},{"level":2,"title":"2、上面的变种","slug":"_2、上面的变种","link":"#_2、上面的变种","children":[]}],"git":{"createdTime":1734848450000,"updatedTime":1734876211000,"contributors":[{"name":"coder-xuyong","username":"coder-xuyong","email":"1299461580@qq.com","commits":2,"url":"https://github.com/coder-xuyong"}]},"readingTime":{"minutes":0.69,"words":208},"filePathRelative":"posts/shell/shellWork.md","localizedDate":"2024年5月13日","excerpt":"<p>工作中遇到有关 shell 脚本的情景和处理记录</p>\\n","autoDesc":true}')}}]);