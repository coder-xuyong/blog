"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4292],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,e]of s)a[i]=e;return a}},7402:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>n});var e=a(641);const t={},l=(0,a(6262).A)(t,[["render",function(i,s){return(0,e.uX)(),(0,e.CE)("div",null,[s[0]||(s[0]=(0,e.Lk)("p",null,"在工作中遇到的有关Linux的问题",-1)),(0,e.Q3)(" more "),s[1]||(s[1]=(0,e.Fv)('<h1 id="设置tomcat-开机自启" tabindex="-1"><a class="header-anchor" href="#设置tomcat-开机自启"><span>设置tomcat 开机自启</span></a></h1><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">crontab</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 在其中添加 下面这行代码（startup.sh 自行更好，只有一行时 &amp; 不要） 保存</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">reboot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/debian/tomcat9/bin/startup.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="设置-jar-开机自启" tabindex="-1"><a class="header-anchor" href="#设置-jar-开机自启"><span>设置 jar 开机自启</span></a></h1><p>编写脚本文件<br><a href="http://start.sh" target="_blank" rel="noopener noreferrer">start.sh</a></p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nohup</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -jar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> XXX.jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/dev/null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 2&gt;&amp;1 &amp;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#nohup 确保即使用户退出登录，Java进程也会继续运行。</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#java -server -jar XXX.jar 启动指定的JAR文件。</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#-server 是一个JVM选项，表示以服务器模式运行JVM。服务器模式下的JVM通常会进行更多的优化，适合长时间运行的应用程序。</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#&gt; /dev/null 将标准输出（控制台输出）丢弃。</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#2&gt;&amp;1 将标准错误（错误信息）也丢弃。</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#&amp; 将整个命令放在后台执行。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入 rc.d目录</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/rc.d</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rc.local</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令：vim rc.local , 修改rc.local 。按【i】键进入编辑模式，在最后添加代码：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sleep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 60</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /myApp/test</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /myApp/test/startup.sh</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#第一句为进入你项目所在的目录，我这里把项目放在/myApp/test下</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#第二句执行该目录下的sh文件</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##说明</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#如果不提前进入所在目录，直接执行第二句，也会开机自启动，但是日志文件会在根目录下的log文件中。只有先进入，再执行，项目的日志文件才会在test文件夹下</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##test文件中有jar包、startup.sh、以及jar包的日志文件logs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置权限：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/rc.d/rc.local</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /myApp/test/startup.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-查找文件" tabindex="-1"><a class="header-anchor" href="#linux-查找文件"><span>linux 查找文件</span></a></h2><p>1.使用 <code>find</code> 命令</p><p><code>find</code> 是一个非常强大的命令行工具，用于在文件系统中搜索文件和目录。它可以在指定的路径下递归查找，并支持复杂的条件匹配。</p><p>2.基本用法</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /path/to/search</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;filename&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',16))])}]]),n=JSON.parse('{"path":"/posts/linux/linuxWork.html","title":"在工作中遇到的有关Linux的问题","lang":"zh-CN","frontmatter":{"title":"在工作中遇到的有关Linux的问题","icon":"pen-to-square","date":"2023-06-01T00:00:00.000Z","lastUpdated":true,"category":["linux"],"tag":["linux","tomcat","shell"],"description":"在工作中遇到的有关Linux的问题","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/posts/linux/linuxWork.html"}],["meta",{"property":"og:site_name","content":"coder"}],["meta",{"property":"og:title","content":"在工作中遇到的有关Linux的问题"}],["meta",{"property":"og:description","content":"在工作中遇到的有关Linux的问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-22T14:03:31.000Z"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"tomcat"}],["meta",{"property":"article:tag","content":"shell"}],["meta",{"property":"article:published_time","content":"2023-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T14:03:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在工作中遇到的有关Linux的问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-22T14:03:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"linux 查找文件","slug":"linux-查找文件","link":"#linux-查找文件","children":[]}],"git":{"createdTime":1734876211000,"updatedTime":1734876211000,"contributors":[{"name":"coder-xuyong","username":"coder-xuyong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/coder-xuyong"}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"posts/linux/linuxWork.md","localizedDate":"2023年6月1日","excerpt":"<p>在工作中遇到的有关Linux的问题</p>\\n","autoDesc":true}')}}]);