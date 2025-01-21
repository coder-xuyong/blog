import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,e as t,a,b as n,o as l}from"./app-CUXwiXlL.js";const r={};function p(h,e){return l(),i("div",null,[e[0]||(e[0]=t("p",null,"ftp 的一些基础内容",-1)),a(" more "),e[1]||(e[1]=n(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>文件传输协议（File Transfer Protocol，FTP）是用于在网络上进行文件传输的一套标准协议，它工作在 OSI 模型的第七层， TCP 模型的第四层， 即应用层， 使用 TCP 传输而不是 UDP， 客户在和服务器建立连接前要经过一个“三次握手”的过程， 保证客户与服务器之间的连接是可靠的， 而且是面向连接， 为数据传输提供可靠保证。</p><p>FTP允许用户以文件操作的方式（如文件的增、删、改、查、传送等）与另一主机相互通信。然而， 用户并不真正登录到自己想要存取的计算机上面而成为完全用户， 可用FTP程序访问远程资源， 实现用户往返传输文件、目录管理以及访问电子邮件等等， 即使双方计算机可能配有不同的操作系统和文件存储方式。</p><h2 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖"><span>引入依赖</span></a></h2><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;commons-net&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;commons-net&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;3.3&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-reply-ssh-2-0-openssh-7-4-报错" tabindex="-1"><a class="header-anchor" href="#server-reply-ssh-2-0-openssh-7-4-报错"><span>Server Reply: SSH-2.0-OpenSSH_7.4 报错</span></a></h2><p>端口号设置错误，22是sftp的默认端口，ftp默认使用的端口是21。</p><h2 id="老是连接超时" tabindex="-1"><a class="header-anchor" href="#老是连接超时"><span>老是连接超时</span></a></h2><p>阿里云每一开放21端口号</p><h2 id="getreplycode-返回530" tabindex="-1"><a class="header-anchor" href="#getreplycode-返回530"><span>getReplyCode() 返回530</span></a></h2><p>就是你连接上了，只是ftpClient.getReplyCode()的返回值是530，那么就是因为你当前用户没有传输文件的权限，先提供如下解决办法。<br> 一般root用户是有权限的若是root 还返回530，就用一下方法：先查看/etc/vsftpd/下面的文件ftpusers和user_list里面是否有你的用户名，若有注释就可以了。这两个文件中的用户都是没有权限。</p><h2 id="sortfile-连接超时" tabindex="-1"><a class="header-anchor" href="#sortfile-连接超时"><span>sortFile 连接超时</span></a></h2><p>将下述代码放在建立连接之前</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> ftpClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">enterLocalPassiveMode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//开启被动模式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,14))])}const k=s(r,[["render",p],["__file","ftp.html.vue"]]),c=JSON.parse('{"path":"/posts/network/ftp.html","title":"ftp","lang":"zh-CN","frontmatter":{"title":"ftp","icon":"pen-to-square","date":"2023-06-05T00:00:00.000Z","lastUpdated":true,"category":["java"],"tag":["bug"],"description":"ftp 的一些基础内容","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/posts/network/ftp.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"ftp"}],["meta",{"property":"og:description","content":"ftp 的一些基础内容"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-22T14:03:31.000Z"}],["meta",{"property":"article:tag","content":"bug"}],["meta",{"property":"article:published_time","content":"2023-06-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T14:03:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ftp\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-22T14:03:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"引入依赖","slug":"引入依赖","link":"#引入依赖","children":[]},{"level":2,"title":"Server Reply: SSH-2.0-OpenSSH_7.4 报错","slug":"server-reply-ssh-2-0-openssh-7-4-报错","link":"#server-reply-ssh-2-0-openssh-7-4-报错","children":[]},{"level":2,"title":"老是连接超时","slug":"老是连接超时","link":"#老是连接超时","children":[]},{"level":2,"title":"getReplyCode() 返回530","slug":"getreplycode-返回530","link":"#getreplycode-返回530","children":[]},{"level":2,"title":"sortFile 连接超时","slug":"sortfile-连接超时","link":"#sortfile-连接超时","children":[]}],"git":{"createdTime":1734848450000,"updatedTime":1734876211000,"contributors":[{"name":"coder-xuyong","username":"coder-xuyong","email":"1299461580@qq.com","commits":2,"url":"https://github.com/coder-xuyong"}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"posts/network/ftp.md","localizedDate":"2023年6月5日","excerpt":"<p>ftp 的一些基础内容</p>\\n","autoDesc":true}');export{k as comp,c as data};
