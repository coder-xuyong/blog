"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1816],{6262:(t,a)=>{a.A=(t,a)=>{const i=t.__vccOpts||t;for(const[t,e]of a)i[t]=e;return i}},7982:(t,a,i)=>{i.r(a),i.d(a,{comp:()=>n,data:()=>r});var e=i(641);const s={},n=(0,i(6262).A)(s,[["render",function(t,a){return(0,e.uX)(),(0,e.CE)("div",null,[a[0]||(a[0]=(0,e.Lk)("p",null,"IO 流的一些基本使用，后续记得完善",-1)),(0,e.Q3)(" more "),a[1]||(a[1]=(0,e.Fv)('<p>程序 通过 ByteArrayInputStream 读取 ByteArray<br> 程序 通过 ByteArrayOutputStream 写入 ByteArray</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">byte</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] bb </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;"> byte</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[]{</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">49</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">51</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">InputStream</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> in </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ByteArrayInputStream</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(bb)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">DataInputStream</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> dis </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> DataInputStream</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(in)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inputstream-bytearrayinputstream" tabindex="-1"><a class="header-anchor" href="#inputstream-bytearrayinputstream"><span>InputStream ,ByteArrayInputStream</span></a></h2><h2 id="datainputstream" tabindex="-1"><a class="header-anchor" href="#datainputstream"><span>DataInputStream</span></a></h2>',4))])}]]),r=JSON.parse('{"path":"/posts/java/basic/ioStream.html","title":"io 流的基本使用","lang":"zh-CN","frontmatter":{"title":"io 流的基本使用","icon":"pen-to-square","date":"2023-06-05T00:00:00.000Z","lastUpdated":true,"category":["java"],"tag":["java-basic"],"description":"IO 流的一些基本使用，后续记得完善","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/posts/java/basic/ioStream.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"io 流的基本使用"}],["meta",{"property":"og:description","content":"IO 流的一些基本使用，后续记得完善"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-24T14:49:46.000Z"}],["meta",{"property":"article:tag","content":"java-basic"}],["meta",{"property":"article:published_time","content":"2023-06-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-24T14:49:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"io 流的基本使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-24T14:49:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"InputStream ,ByteArrayInputStream","slug":"inputstream-bytearrayinputstream","link":"#inputstream-bytearrayinputstream","children":[]},{"level":2,"title":"DataInputStream","slug":"datainputstream","link":"#datainputstream","children":[]}],"git":{"createdTime":1734876211000,"updatedTime":1735051786000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/XuYong"},{"name":"erye0","username":"erye0","email":"1299461580@qq.com","commits":1,"url":"https://github.com/erye0"},{"name":"coder-xuyong","username":"coder-xuyong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/coder-xuyong"}]},"readingTime":{"minutes":0.25,"words":76},"filePathRelative":"posts/java/basic/ioStream.md","localizedDate":"2023年6月5日","excerpt":"<p>IO 流的一些基本使用，后续记得完善</p>\\n","autoDesc":true}')}}]);