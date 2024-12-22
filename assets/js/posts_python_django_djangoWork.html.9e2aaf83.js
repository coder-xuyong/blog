"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6855],{6262:(i,a)=>{a.A=(i,a)=>{const e=i.__vccOpts||i;for(const[i,s]of a)e[i]=s;return e}},2215:(i,a,e)=>{e.r(a),e.d(a,{comp:()=>n,data:()=>l});var s=e(641);const t={},n=(0,e(6262).A)(t,[["render",function(i,a){return(0,s.uX)(),(0,s.CE)("div",null,[a[0]||(a[0]=(0,s.Lk)("p",null,"在工作中遇到了 django 框架，记录一些使用过程中遇到的问题",-1)),(0,s.Q3)(" more "),a[1]||(a[1]=(0,s.Fv)('<h2 id="django-为何-只允许127-0-0-1-访问服务-电脑的实际ip确不行" tabindex="-1"><a class="header-anchor" href="#django-为何-只允许127-0-0-1-访问服务-电脑的实际ip确不行"><span>django 为何 只允许127.0.0.1 访问服务，电脑的实际ip确不行</span></a></h2><p>Django服务默认只允许从127.0.0.1（也被称为本地回环地址或localhost）访问，这通常是因为Django的设置文件中ALLOWED_HOSTS配置的限制。为了允许电脑的实际IP地址访问Django服务，需要进行以下几步操作：</p><h3 id="_1-修改allowed-hosts设置" tabindex="-1"><a class="header-anchor" href="#_1-修改allowed-hosts设置"><span>1. 修改ALLOWED_HOSTS设置：</span></a></h3><p>Django的settings.py文件中有一个ALLOWED_HOSTS配置，它指定了哪些主机名或IP地址可以访问Django服务。默认情况下，它可能只包含[&#39;localhost&#39;]或[&#39;127.0.0.1&#39;]。要允许电脑的实际IP地址访问，你需要将ALLOWED_HOSTS修改为包含你的实际IP地址，或者设置为[&#39;<em>&#39;]（注意：&#39;</em>&#39;允许所有IP地址访问，但出于安全考虑，通常不推荐在生产环境中使用）。<br> 例如：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">ALLOWED_HOSTS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;你的实际IP地址&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 只允许指定IP访问  </span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或者  </span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">ALLOWED_HOSTS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;*&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 允许所有IP访问（不推荐用于生产环境）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-运行django服务时指定监听地址" tabindex="-1"><a class="header-anchor" href="#_2-运行django服务时指定监听地址"><span>2. 运行Django服务时指定监听地址：</span></a></h3><p>当你使用python <a href="http://manage.py" target="_blank" rel="noopener noreferrer">manage.py</a> runserver命令启动Django开发服务器时，默认情况下它只会监听127.0.0.1（localhost）。如果你想让Django服务监听你的电脑的实际IP地址，你需要指定一个不同的地址，如0.0.0.0，这会让Django服务监听所有可用的网络接口。<br> 例如：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> manage.py</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> runserver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 0.0.0.0:8000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这样，Django服务就会监听所有可用的IP地址，并通过端口8000提供服务。</p><h3 id="_3-防火墙和网络设置" tabindex="-1"><a class="header-anchor" href="#_3-防火墙和网络设置"><span>3. 防火墙和网络设置：</span></a></h3><p>如果你的电脑上有防火墙或网络访问控制设置，确保它们允许从你的实际IP地址到Django服务的访问。你可能需要配置防火墙规则或路由器设置来允许流量通过。</p><h3 id="_4-dns和主机名" tabindex="-1"><a class="header-anchor" href="#_4-dns和主机名"><span>4. DNS和主机名：</span></a></h3><p>如果你尝试通过域名或主机名访问Django服务而不是直接通过IP地址，你还需要确保DNS设置正确，并且主机名可以被解析为你的电脑的实际IP地址。<br> 总结来说，Django默认只允许从127.0.0.1访问是因为ALLOWED_HOSTS设置的限制。要允许从电脑的实际IP地址访问，你需要修改ALLOWED_HOSTS设置，并在运行Django服务时指定监听地址。同时，确保防火墙和网络设置允许从你的实际IP地址到Django服务的访问。</p>',13))])}]]),l=JSON.parse('{"path":"/posts/python/django/djangoWork.html","title":"django 使用过程中发生的问题","lang":"zh-CN","frontmatter":{"title":"django 使用过程中发生的问题","icon":"pen-to-square","date":"2024-05-29T00:00:00.000Z","category":["python"],"tag":["djgango"],"description":"在工作中遇到了 django 框架，记录一些使用过程中遇到的问题","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/posts/python/django/djangoWork.html"}],["meta",{"property":"og:site_name","content":"coder"}],["meta",{"property":"og:title","content":"django 使用过程中发生的问题"}],["meta",{"property":"og:description","content":"在工作中遇到了 django 框架，记录一些使用过程中遇到的问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-22T06:20:50.000Z"}],["meta",{"property":"article:tag","content":"djgango"}],["meta",{"property":"article:published_time","content":"2024-05-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T06:20:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"django 使用过程中发生的问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-22T06:20:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"django  为何 只允许127.0.0.1 访问服务，电脑的实际ip确不行","slug":"django-为何-只允许127-0-0-1-访问服务-电脑的实际ip确不行","link":"#django-为何-只允许127-0-0-1-访问服务-电脑的实际ip确不行","children":[{"level":3,"title":"1. 修改ALLOWED_HOSTS设置：","slug":"_1-修改allowed-hosts设置","link":"#_1-修改allowed-hosts设置","children":[]},{"level":3,"title":"2. 运行Django服务时指定监听地址：","slug":"_2-运行django服务时指定监听地址","link":"#_2-运行django服务时指定监听地址","children":[]},{"level":3,"title":"3. 防火墙和网络设置：","slug":"_3-防火墙和网络设置","link":"#_3-防火墙和网络设置","children":[]},{"level":3,"title":"4. DNS和主机名：","slug":"_4-dns和主机名","link":"#_4-dns和主机名","children":[]}]}],"git":{"createdTime":1734848450000,"updatedTime":1734848450000,"contributors":[{"name":"coder-xuyong","username":"coder-xuyong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/coder-xuyong"}]},"readingTime":{"minutes":2.18,"words":653},"filePathRelative":"posts/python/django/djangoWork.md","localizedDate":"2024年5月29日","excerpt":"<p>在工作中遇到了 django  框架，记录一些使用过程中遇到的问题</p>\\n","autoDesc":true}')}}]);