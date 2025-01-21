import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,e as l,a,b as s,o as p}from"./app-CUXwiXlL.js";const n={};function r(o,e){return p(),i("div",null,[e[0]||(e[0]=l("p",null,"DDL常用命令，操作数据库和表结构",-1)),a(" more "),e[1]||(e[1]=s(`<h1 id="mysql-存储过程" tabindex="-1"><a class="header-anchor" href="#mysql-存储过程"><span>mysql 存储过程</span></a></h1><h2 id="什么是存储过程" tabindex="-1"><a class="header-anchor" href="#什么是存储过程"><span>什么是存储过程</span></a></h2><p>存储过程就是一些SQL语句的集合，可以简单理解为类似Java中的一个接口函数，函数里面可以使用查询SQL、流程控制语句、定义参数、条件等，用来实现更复杂逻辑的处理。</p><h2 id="存储过程的作用-优点" tabindex="-1"><a class="header-anchor" href="#存储过程的作用-优点"><span>存储过程的作用（优点）</span></a></h2><p>1.执行速度更快（因为不需要从应用程序调用MySQL服务，减少了获取连接、网络传输的耗时）</p><p>2.相比普通SQL实现了复杂的逻辑处理。比如可以应用在测试数据的预置，有时我们在性能测试的时候，需要预置大量的测试数据，利用代码当然能实现预置测试数据，但是一方面测试代码有时候是不能上传到测试环境的，修改发布也不方便。这时候用存储过程就可以轻松修改变量，直接在数据库中执行。</p><h2 id="存储过程的缺点" tabindex="-1"><a class="header-anchor" href="#存储过程的缺点"><span>存储过程的缺点</span></a></h2><p>1.书写复杂的存储过程，会显得晦涩难懂。</p><p>2.存储过程难以调试，很少工具可以调试存储过程，使得开发和维护都不容易。</p><p>3.不能移植，存储过程只能在数据中执行。</p><h2 id="创建存储过程" tabindex="-1"><a class="header-anchor" href="#创建存储过程"><span>创建存储过程</span></a></h2><h3 id="_1-具体语法详解" tabindex="-1"><a class="header-anchor" href="#_1-具体语法详解"><span>1.具体语法详解</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CREATE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PROCEDURE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sp_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ([proc_parameter])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[characteristice ...] routine_body</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>CREATE PROCEDURE：创建存储过程的关键字</p><p>sp_name：存储过程的名称</p><p>proc_parameter：存储过程的参数列表，列表形式如 [IN | OUT | INOUT] param_name type</p><ul><li><p>IN：输入</p></li><li><p>OUT：输出</p></li><li><p>INOUT：输入或输出</p></li><li><p>param_name：参数名</p></li><li><p>type：参数类型，可以是MySQL数据库中的任意类型</p></li></ul><p>characteristics：存储过程的特性，有以下取值</p><ul><li><p>LANGUAGUE SQL：说明routine_body部分是由SQL语句组成的，当前系统支持的语言为SQL。SQL是LANGUAGE特性的唯一值</p></li><li><p>[NOT]DETERMINISTIC：存储过程执行的结果是否确定。DETERMINISTIC表示是确定的，输入相同的参数，只会得到相同的结果。如果没有指定值，默认为 NOT DETERMINISTIC。</p></li><li><p>{ CONTAINTS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }：指明子程序使用SQL语句的限制</p><ul><li><p>CONTAINTS SQL：表明子程序包含SQL语句，但不包含读写数据的语句</p></li><li><p>NO SQL：表明子程序不包含SQL语句</p></li><li><p>READS SQL DATA：表明子程序包含读写数据的语句</p></li><li><p>MODIFIES SQL DATA：表明子程序包含读写数据的语句</p></li><li><p>默认默认为 CONTAINTS SQL</p></li></ul></li><li><p>SQL SECURITY{ DEFINER | INVOKER }：指明谁有权执行</p><ul><li><p>DEFINER：表示只有定义者才能执行</p></li><li><p>INVOKER：表示有权调用者可以执行</p></li><li><p>系统默认为 DEFINER</p></li></ul></li><li><p>COMMENT &#39;string&#39;：注释信息</p></li></ul>`,19))])}const c=t(n,[["render",r],["__file","mysql存储过程.html.vue"]]),m=JSON.parse('{"path":"/posts/mysql/mysql%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B.html","title":"mysql 存储过程","lang":"zh-CN","frontmatter":{"title":"mysql 存储过程","icon":"pen-to-square","date":"2023-06-01T00:00:00.000Z","lastUpdated":true,"category":["mysql"],"tag":["sql"],"description":"DDL常用命令，操作数据库和表结构","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/posts/mysql/mysql%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"mysql 存储过程"}],["meta",{"property":"og:description","content":"DDL常用命令，操作数据库和表结构"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-22T14:03:31.000Z"}],["meta",{"property":"article:tag","content":"sql"}],["meta",{"property":"article:published_time","content":"2023-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T14:03:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mysql 存储过程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-22T14:03:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"什么是存储过程","slug":"什么是存储过程","link":"#什么是存储过程","children":[]},{"level":2,"title":"存储过程的作用（优点）","slug":"存储过程的作用-优点","link":"#存储过程的作用-优点","children":[]},{"level":2,"title":"存储过程的缺点","slug":"存储过程的缺点","link":"#存储过程的缺点","children":[]},{"level":2,"title":"创建存储过程","slug":"创建存储过程","link":"#创建存储过程","children":[{"level":3,"title":"1.具体语法详解","slug":"_1-具体语法详解","link":"#_1-具体语法详解","children":[]}]}],"git":{"createdTime":1734876211000,"updatedTime":1734876211000,"contributors":[{"name":"coder-xuyong","username":"coder-xuyong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/coder-xuyong"}]},"readingTime":{"minutes":2.33,"words":698},"filePathRelative":"posts/mysql/mysql存储过程.md","localizedDate":"2023年6月1日","excerpt":"<p>DDL常用命令，操作数据库和表结构</p>\\n","autoDesc":true}');export{c as comp,m as data};
