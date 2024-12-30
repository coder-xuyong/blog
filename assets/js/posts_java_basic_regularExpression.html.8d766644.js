"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3512],{66262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,e]of s)a[i]=e;return a}},68589:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>t});var e=a(20641);const n={},l=(0,a(66262).A)(n,[["render",function(i,s){return(0,e.uX)(),(0,e.CE)("div",null,[s[0]||(s[0]=(0,e.Lk)("p",null,"java 正则表达式的基础使用",-1)),(0,e.Q3)(" more "),s[1]||(s[1]=(0,e.Fv)('<h1 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述"><span>1. 概述</span></a></h1><h2 id="_1-1-java-正则表达式使用指南" tabindex="-1"><a class="header-anchor" href="#_1-1-java-正则表达式使用指南"><span>1.1 Java 正则表达式使用指南</span></a></h2><p>正则表达式（Regular Expression，简称 regex 或 regexp）是用于匹配字符串中字符模式的工具。在 Java 中，正则表达式的支持主要通过 <code>java.util.regex</code> 包来提供。此包包含了三个关键类：<code>Pattern</code>、<code>Matcher</code> 和 <code>PatternSyntaxException</code>。</p><h2 id="_1-2-pattern-类" tabindex="-1"><a class="header-anchor" href="#_1-2-pattern-类"><span>1.2 Pattern 类</span></a></h2><p><code>Pattern</code> 类代表一个编译后的正则表达式，并提供了与该模式相匹配的方法。它是一个线程安全的对象，可以被多个 <code>Matcher</code> 实例共享以执行匹配操作。</p><h2 id="_1-3-创建-pattern-对象" tabindex="-1"><a class="header-anchor" href="#_1-3-创建-pattern-对象"><span>1.3 创建 Pattern 对象</span></a></h2><p>要创建一个 <code>Pattern</code> 对象，您需要调用它的静态方法 <code>compile(String regex)</code>：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Pattern</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> pattern </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">compile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;your_regex_here&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="_2-matcher-类" tabindex="-1"><a class="header-anchor" href="#_2-matcher-类"><span>2. Matcher 类</span></a></h1><p><code>Matcher</code> 类是对输入序列进行匹配操作的引擎。<code>Matcher</code> 由 <code>Pattern</code> 的 <code>matcher(CharSequence input)</code> 方法生成：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Matcher</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> matcher </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;input_string_to_match&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-1-常用方法" tabindex="-1"><a class="header-anchor" href="#_2-1-常用方法"><span>2.1 常用方法</span></a></h2><ul><li><strong>find()</strong>：尝试找到下一个子序列，该序列从先前匹配结束的地方开始匹配模式。如果找到了这样的序列，则返回 <code>true</code>。</li><li><strong>matches()</strong>：尝试将整个区域与模式匹配。只有当整个区域都匹配时才返回 <code>true</code>。</li><li><strong>lookingAt()</strong>：尝试将从区域开头开始的前缀与模式匹配。如果找到了这样的前缀，则返回 <code>true</code>。</li><li><strong>replaceAll(String replacement)</strong>：用给定的替换字符串替换所有匹配的部分。</li><li><strong>replaceFirst(String replacement)</strong>：只替换第一个匹配的部分。</li></ul><h1 id="_3-示例代码" tabindex="-1"><a class="header-anchor" href="#_3-示例代码"><span>3. 示例代码</span></a></h1><p>下面是一些简单的示例，演示了如何使用正则表达式来进行不同的任务。</p><h2 id="_3-1-检查字符串是否为有效的电子邮件地址" tabindex="-1"><a class="header-anchor" href="#_3-1-检查字符串是否为有效的电子邮件地址"><span>3.1 检查字符串是否为有效的电子邮件地址</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> emailRegex </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;^[</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">w.-]+@[</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">w.-]+</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.[a-zA-Z]{2,}$&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Pattern</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> pattern </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">compile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(emailRegex);</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Matcher</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> matcher </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;example@example.com&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">boolean</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> isValidEmail </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">matches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-提取所有的数字" tabindex="-1"><a class="header-anchor" href="#_3-2-提取所有的数字"><span>3.2 提取所有的数字</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> content </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;The price is 100 dollars and the tax is 5%&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Pattern</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> pattern </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">compile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">d+&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Matcher</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> matcher </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(content);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-替换所有非字母字符为空格" tabindex="-1"><a class="header-anchor" href="#_3-3-替换所有非字母字符为空格"><span>3.3 替换所有非字母字符为空格</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> text </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Hello, world! 123&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> cleanedText </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">replaceAll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[^a-zA-Z]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot; &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(cleanedText);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-特殊字符和转义" tabindex="-1"><a class="header-anchor" href="#_3-4-特殊字符和转义"><span>3.4 特殊字符和转义</span></a></h2><p>某些字符在正则表达式中有特殊含义，例如点号 (<code>.</code>)、星号 (<code>*</code>) 等。如果您想要匹配这些字符本身，您需要对它们进行转义：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> specialCharRegex </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 匹配实际的点号</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-5-分组和捕获" tabindex="-1"><a class="header-anchor" href="#_3-5-分组和捕获"><span>3.5 分组和捕获</span></a></h2><p>您可以使用圆括号 <code>()</code> 来分组和捕获匹配的部分。每个捕获组都有一个索引，从左到右编号，从 1 开始。整个表达式被视为组 0。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> datePattern </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">d{4})-(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">d{2})-(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">d{2})&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 年-月-日格式</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Pattern</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> pattern </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">compile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(datePattern);</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Matcher</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> matcher </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2023-04-01&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">matches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> year </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> month </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> day </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-6-总结" tabindex="-1"><a class="header-anchor" href="#_3-6-总结"><span>3.6. 总结</span></a></h2><p>正则表达式是非常强大的文本处理工具，但它们可能看起来复杂且难以理解。练习和熟悉常见的正则表达式模式以及如何在 Java 中使用它们将大大提高您的文本处理能力。</p><h1 id="_4-正则表达式语法指南" tabindex="-1"><a class="header-anchor" href="#_4-正则表达式语法指南"><span>4. 正则表达式语法指南</span></a></h1><p>正则表达式（Regular Expression，简称 regex 或 regexp）是一种用于描述搜索模式的工具。它们可以用来查找、编辑或操作文本，并广泛应用于各种编程语言中。下面将介绍正则表达式的常见语法元素。</p><h2 id="_4-1-基本字符匹配" tabindex="-1"><a class="header-anchor" href="#_4-1-基本字符匹配"><span>4.1 基本字符匹配</span></a></h2><ul><li><p><strong>普通字符</strong>：大多数字符，如字母和数字，直接匹配自身。</p><ul><li>示例：<code>hello</code> 匹配字符串 <code>&quot;hello&quot;</code></li></ul></li><li><p><strong>特殊字符</strong>：一些字符在正则表达式中有特殊含义，必须转义才能匹配这些字符本身。</p><ul><li>示例：<code>.</code>、<code>*</code>、<code>+</code>、<code>?</code>、<code>^</code>、<code>$</code> 等等。要匹配这些字符，需使用反斜杠 <code>\\</code> 进行转义，例如 <code>\\\\.</code> 匹配实际的点号。</li></ul></li></ul><h2 id="_4-2-定量符-quantifiers" tabindex="-1"><a class="header-anchor" href="#_4-2-定量符-quantifiers"><span>4.2 定量符（Quantifiers）</span></a></h2><p>定量符用于指定前面的字符或组应该出现多少次：</p><ul><li><code>*</code>：零次或多次</li><li><code>+</code>：一次或多次</li><li><code>?</code>：零次或一次</li><li><code>{n}</code>：恰好 n 次</li><li><code>{n,}</code>：至少 n 次</li><li><code>{n,m}</code>：至少 n 次但不超过 m 次</li></ul><h2 id="_4-3-字符类-character-classes" tabindex="-1"><a class="header-anchor" href="#_4-3-字符类-character-classes"><span>4.3 字符类（Character Classes）</span></a></h2><p>字符类定义了一组字符中的任何一个都可作为匹配条件：</p><ul><li><code>[abc]</code>：匹配 a 或 b 或 c 中的一个字符</li><li><code>[a-z]</code>：匹配任何小写字母</li><li><code>[A-Z]</code>：匹配任何大写字母</li><li><code>[0-9]</code>：匹配任何数字</li><li><code>[^abc]</code>：匹配除 a、b 和 c 之外的任何字符</li><li><code>.</code>：匹配任意单个字符（除了换行符）</li></ul><h2 id="_4-4-预定义字符类" tabindex="-1"><a class="header-anchor" href="#_4-4-预定义字符类"><span>4.4 预定义字符类</span></a></h2><p>预定义了一些常用的字符类以简化书写：</p><ul><li><code>\\\\d</code>：匹配一个数字，等价于 <code>[0-9]</code></li><li><code>\\\\D</code>：匹配一个非数字字符，等价于 <code>[^0-9]</code></li><li><code>\\\\s</code>：匹配空白字符（包括空格、制表符、换页符等）</li><li><code>\\\\S</code>：匹配非空白字符</li><li><code>\\\\w</code>：匹配单词字符（字母、数字和下划线），等价于 <code>[a-zA-Z_0-9]</code></li><li><code>\\\\W</code>：匹配非单词字符</li></ul><h2 id="_4-5-锚点-anchors" tabindex="-1"><a class="header-anchor" href="#_4-5-锚点-anchors"><span>4.5 锚点（Anchors）</span></a></h2><p>锚点并不匹配实际字符，而是匹配位置：</p><ul><li><code>^</code>：匹配输入字符串的开始处</li><li><code>$</code>：匹配输入字符串的结尾处</li><li><code>\\\\b</code>：匹配一个单词边界</li><li><code>\\\\B</code>：匹配非单词边界</li></ul><h2 id="_4-6-分组与捕获-grouping-and-capturing" tabindex="-1"><a class="header-anchor" href="#_4-6-分组与捕获-grouping-and-capturing"><span>4.6 分组与捕获（Grouping and Capturing）</span></a></h2><p>圆括号 <code>()</code> 可用于分组和创建子表达式：</p><ul><li><code>(ab)</code>：作为一个整体匹配 &quot;ab&quot;</li><li><code>(?:ab)</code>：非捕获分组，只进行分组不捕获</li><li><code>(ab|cd)</code>：匹配 &quot;ab&quot; 或 &quot;cd&quot;</li></ul><h2 id="_4-7-替代-alternation" tabindex="-1"><a class="header-anchor" href="#_4-7-替代-alternation"><span>4.7 替代（Alternation）</span></a></h2><p>竖线 <code>|</code> 用于表示“或”的关系：</p><ul><li><code>foo|bar</code>：匹配 &quot;foo&quot; 或 &quot;bar&quot;</li></ul><h2 id="_4-8-向后引用-backreferences" tabindex="-1"><a class="header-anchor" href="#_4-8-向后引用-backreferences"><span>4.8 向后引用（Backreferences）</span></a></h2><p>使用反斜杠加上数字来引用之前捕获的组：</p><ul><li><code>([abc])\\\\1</code>：匹配两个连续相同的字符，比如 &quot;aa&quot;、&quot;bb&quot; 或 &quot;cc&quot;</li></ul><h2 id="_4-9-注释" tabindex="-1"><a class="header-anchor" href="#_4-9-注释"><span>4.9 注释</span></a></h2><p>可以在正则表达式中添加注释，提高可读性：</p><ul><li><code>(?#comment)</code>：此形式的注释不会影响匹配行为</li></ul><h2 id="_4-10-标志-flags-modifiers" tabindex="-1"><a class="header-anchor" href="#_4-10-标志-flags-modifiers"><span>4.10 标志（Flags/Modifiers）</span></a></h2><p>某些情况下，您可能想要改变正则表达式的默认行为，这可以通过标志实现：</p><ul><li><code>i</code>：忽略大小写</li><li><code>m</code>：多行模式，改变 <code>^</code> 和 <code>$</code> 的行为</li><li><code>s</code>：使 <code>.</code> 匹配所有字符，包括换行符</li><li><code>x</code>：扩展模式，忽略空白字符并允许注释</li></ul><h1 id="_4-11-示例" tabindex="-1"><a class="header-anchor" href="#_4-11-示例"><span>4.11 示例</span></a></h1><p>以下是一些简单的正则表达式及其解释：</p><ul><li><code>\\\\d{3}-\\\\d{2}-\\\\d{4}</code>：匹配形如 <code>123-45-6789</code> 的社会安全号码格式</li><li><code>^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\\\.[a-zA-Z0-9-.]+$</code>：匹配电子邮件地址</li><li><code>\\\\b(https?://[^\\s]+)\\\\b</code>：匹配 URL 地址</li><li><code>\\\\b\\\\w+\\\\b</code>：匹配单词</li></ul><p>通过以上基础，您可以构建出复杂的正则表达式来满足特定的需求。对于更复杂的应用，请参考相关文档深入学习。希望这份指南能够帮助您理解正则表达式的语法！</p>',64))])}]]),t=JSON.parse('{"path":"/posts/java/basic/regularExpression.html","title":"java 使用正则表达式","lang":"zh-CN","frontmatter":{"title":"java 使用正则表达式","icon":"pen-to-square","date":"2024-12-17T00:00:00.000Z","lastUpdated":true,"category":["java"],"tag":["java-basic"],"description":"java 正则表达式的基础使用","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/posts/java/basic/regularExpression.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"java 使用正则表达式"}],["meta",{"property":"og:description","content":"java 正则表达式的基础使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-24T14:49:46.000Z"}],["meta",{"property":"article:tag","content":"java-basic"}],["meta",{"property":"article:published_time","content":"2024-12-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-24T14:49:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"java 使用正则表达式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-24T14:49:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"1.1 Java 正则表达式使用指南","slug":"_1-1-java-正则表达式使用指南","link":"#_1-1-java-正则表达式使用指南","children":[]},{"level":2,"title":"1.2 Pattern 类","slug":"_1-2-pattern-类","link":"#_1-2-pattern-类","children":[]},{"level":2,"title":"1.3 创建 Pattern 对象","slug":"_1-3-创建-pattern-对象","link":"#_1-3-创建-pattern-对象","children":[]},{"level":2,"title":"2.1 常用方法","slug":"_2-1-常用方法","link":"#_2-1-常用方法","children":[]},{"level":2,"title":"3.1 检查字符串是否为有效的电子邮件地址","slug":"_3-1-检查字符串是否为有效的电子邮件地址","link":"#_3-1-检查字符串是否为有效的电子邮件地址","children":[]},{"level":2,"title":"3.2 提取所有的数字","slug":"_3-2-提取所有的数字","link":"#_3-2-提取所有的数字","children":[]},{"level":2,"title":"3.3 替换所有非字母字符为空格","slug":"_3-3-替换所有非字母字符为空格","link":"#_3-3-替换所有非字母字符为空格","children":[]},{"level":2,"title":"3.4 特殊字符和转义","slug":"_3-4-特殊字符和转义","link":"#_3-4-特殊字符和转义","children":[]},{"level":2,"title":"3.5 分组和捕获","slug":"_3-5-分组和捕获","link":"#_3-5-分组和捕获","children":[]},{"level":2,"title":"3.6. 总结","slug":"_3-6-总结","link":"#_3-6-总结","children":[]},{"level":2,"title":"4.1 基本字符匹配","slug":"_4-1-基本字符匹配","link":"#_4-1-基本字符匹配","children":[]},{"level":2,"title":"4.2 定量符（Quantifiers）","slug":"_4-2-定量符-quantifiers","link":"#_4-2-定量符-quantifiers","children":[]},{"level":2,"title":"4.3 字符类（Character Classes）","slug":"_4-3-字符类-character-classes","link":"#_4-3-字符类-character-classes","children":[]},{"level":2,"title":"4.4 预定义字符类","slug":"_4-4-预定义字符类","link":"#_4-4-预定义字符类","children":[]},{"level":2,"title":"4.5 锚点（Anchors）","slug":"_4-5-锚点-anchors","link":"#_4-5-锚点-anchors","children":[]},{"level":2,"title":"4.6 分组与捕获（Grouping and Capturing）","slug":"_4-6-分组与捕获-grouping-and-capturing","link":"#_4-6-分组与捕获-grouping-and-capturing","children":[]},{"level":2,"title":"4.7 替代（Alternation）","slug":"_4-7-替代-alternation","link":"#_4-7-替代-alternation","children":[]},{"level":2,"title":"4.8 向后引用（Backreferences）","slug":"_4-8-向后引用-backreferences","link":"#_4-8-向后引用-backreferences","children":[]},{"level":2,"title":"4.9 注释","slug":"_4-9-注释","link":"#_4-9-注释","children":[]},{"level":2,"title":"4.10 标志（Flags/Modifiers）","slug":"_4-10-标志-flags-modifiers","link":"#_4-10-标志-flags-modifiers","children":[]}],"git":{"createdTime":1734876211000,"updatedTime":1735051786000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":2,"url":"https://github.com/XuYong"},{"name":"erye0","username":"erye0","email":"1299461580@qq.com","commits":1,"url":"https://github.com/erye0"},{"name":"coder-xuyong","username":"coder-xuyong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/coder-xuyong"}]},"readingTime":{"minutes":5.53,"words":1658},"filePathRelative":"posts/java/basic/regularExpression.md","localizedDate":"2024年12月17日","excerpt":"<p>java 正则表达式的基础使用</p>\\n","autoDesc":true}')}}]);