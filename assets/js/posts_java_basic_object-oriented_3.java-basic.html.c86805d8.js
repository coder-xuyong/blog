"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3629],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,t]of s)a[i]=t;return a}},197:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>n,data:()=>l});var t=a(641);const e={},n=(0,a(6262).A)(e,[["render",function(i,s){return(0,t.uX)(),(0,t.CE)("div",null,[s[0]||(s[0]=(0,t.Lk)("p",null,"java 基本类型、String、关键字等内容介绍",-1)),(0,t.Q3)(" more "),s[1]||(s[1]=(0,t.Fv)('<h2 id="_1-java基本数据类型" tabindex="-1"><a class="header-anchor" href="#_1-java基本数据类型"><span>1. Java基本数据类型</span></a></h2><h3 id="_1-1-概述" tabindex="-1"><a class="header-anchor" href="#_1-1-概述"><span>1.1 概述</span></a></h3><p>Java基本数据类型是构建程序数据存储和运算的基石，分为四类八种，不同类型具有特定的取值范围、存储字节数，以适应多样的编程需求。</p><h3 id="_1-2-详细分类" tabindex="-1"><a class="header-anchor" href="#_1-2-详细分类"><span>1.2 详细分类</span></a></h3><table><thead><tr><th>数据类型</th><th>字节数</th><th>取值范围</th><th>示例</th><th>用途场景</th></tr></thead><tbody><tr><td><code>byte</code></td><td>1</td><td>-128 ～ 127</td><td><code>byte num = 10;</code></td><td>底层数据存储、网络传输字节流处理，节省内存</td></tr><tr><td><code>short</code></td><td>2</td><td>-32768 ～ 32767</td><td><code>short age = 30;</code></td><td>特定数值范围运算，对内存有一定要求的简单场景</td></tr><tr><td><code>int</code></td><td>4</td><td>-2147483648 ～ 2147483647</td><td><code>int count = 100;</code></td><td>常规整数运算，如循环控制、数组下标</td></tr><tr><td><code>long</code></td><td>8</td><td>-9223372036854775808 ～ 9223372036854775807</td><td><code>long timestamp = 1609459200000L;</code></td><td>处理大整数，如时间戳、大数据统计计数</td></tr><tr><td><code>float</code></td><td>4</td><td>约 ±3.4×10³⁸ （有效数字约 7 位）</td><td><code>float pi = 3.14F;</code></td><td>科学计算近似值，需注意精度问题，定义加 <code>F</code></td></tr><tr><td><code>double</code></td><td>8</td><td>约 ±1.79×10³⁰⁸ （有效数字约 15 位）</td><td><code>double salary = 5000.50;</code></td><td>默认浮点型，高精度科学、工程计算</td></tr><tr><td><code>char</code></td><td>2</td><td>0 ～ 65535（Unicode 编码值）</td><td><code>char ch = &#39;A&#39;;</code></td><td>存储单个字符，文本处理</td></tr><tr><td><code>boolean</code></td><td>1（实际因 JVM 而异）</td><td><code>true</code>、<code>false</code></td><td><code>boolean flag = true;</code></td><td>条件判断、逻辑控制</td></tr></tbody></table><h3 id="_1-3-自动拆装箱" tabindex="-1"><a class="header-anchor" href="#_1-3-自动拆装箱"><span>1.3 自动拆装箱</span></a></h3><p>自动装箱：基本类型自动转为包装类，如 <code>Integer numObj = 10;</code> ，编译器将 <code>int</code> 10 包装成 <code>Integer</code>。<br> 自动拆箱：包装类自动转为基本类型，如 <code>Integer numObj = new Integer(20); int num = numObj;</code>。<br> 注意：频繁拆装箱有性能开销，如在循环内大量操作包装类集合。</p><h3 id="_1-4-浮点数与金额问题" tabindex="-1"><a class="header-anchor" href="#_1-4-浮点数与金额问题"><span>1.4 浮点数与金额问题</span></a></h3><p>浮点数由于二进制存储表示，存在精度丢失问题，绝不能直接用于精确金额计算。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> amount1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> amount2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sum </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> amount1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> amount2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> </span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 此时 sum 可能不是精确的 0.3，而接近 0.30000000000000004</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>金融领域通常使用 <code>BigDecimal</code> 类确保金额精准。</p><h2 id="_2-string类型" tabindex="-1"><a class="header-anchor" href="#_2-string类型"><span>2. String类型</span></a></h2><h3 id="_2-1-常用方法" tabindex="-1"><a class="header-anchor" href="#_2-1-常用方法"><span>2.1 常用方法</span></a></h3><table><thead><tr><th>方法名</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td><code>length()</code></td><td>返回字符串长度</td><td><code>String str = &quot;Hello&quot;; int len = str.length();</code></td></tr><tr><td><code>charAt(int index)</code></td><td>获取指定索引字符</td><td><code>char ch = str.charAt(2); // 取 &#39;l&#39;</code></td></tr><tr><td><code>substring(int start, int end)</code></td><td>截取子串（含 start，不含 end）</td><td><code>String sub = str.substring(1, 4); // &quot;ell&quot;</code></td></tr><tr><td><code>indexOf(String str)</code></td><td>查找子串首次出现位置</td><td><code>int pos = str.indexOf(&quot;ll&quot;); // 2</code></td></tr><tr><td><code>lastIndexOf(String str)</code></td><td>查找子串最后出现位置</td><td><code>int lastPos = str.lastIndexOf(&quot;l&quot;); // 3</code></td></tr><tr><td><code>contains(String str)</code></td><td>判断是否包含子串</td><td><code>boolean has = str.contains(&quot;lo&quot;); // true</code></td></tr><tr><td><code>equals(String other)</code></td><td>比较字符串内容是否相等</td><td><code>boolean eq = str.equals(&quot;Hello&quot;); // true</code></td></tr><tr><td><code>equalsIgnoreCase(String other)</code></td><td>忽略大小写比较</td><td><code>boolean ieq = str.equalsIgnoreCase(&quot;hello&quot;); // true</code></td></tr><tr><td><code>trim()</code></td><td>去除首尾空白字符</td><td><code>String trimStr = &quot; Hello &quot;.trim(); // &quot;Hello&quot;</code></td></tr><tr><td><code>replace(char oldChar, char newChar)</code></td><td>替换字符</td><td><code>String replaced = str.replace(&#39;l&#39;, &#39;x&#39;); // &quot;Hexxo&quot;</code></td></tr><tr><td><code>split(String regex)</code></td><td>按正则表达式分割字符串</td><td><code>String[] parts = &quot;a,b,c&quot;.split(&quot;,&quot;); // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code></td></tr></tbody></table><h3 id="_2-2-技巧" tabindex="-1"><a class="header-anchor" href="#_2-2-技巧"><span>2.2 技巧</span></a></h3><ul><li>用 <code>&quot;&quot;</code> 创建空字符串，比 <code>new String()</code> 高效，后者创建新对象。</li><li>连接字符串优先用 <code>StringBuilder</code> 或 <code>StringBuffer</code>（多线程）：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">StringBuilder</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sb </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> StringBuilder</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sb</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sb</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot; Java&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> sb</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>比较字符串用 <code>equals</code>，避免 <code>==</code>，<code>==</code> 比较引用地址，<code>equals</code> 比较内容。</li></ul><h3 id="_2-3-字符串池、常量池概念" tabindex="-1"><a class="header-anchor" href="#_2-3-字符串池、常量池概念"><span>2.3 字符串池、常量池概念</span></a></h3><ul><li><strong>字符串池</strong>：存于堆内存，存放字面量字符串。相同字面量只存一份，如 <code>String s1 = &quot;Hello&quot;; String s2 = &quot;Hello&quot;; s1 == s2; // true</code>，指向同一对象。</li><li><strong>Class常量池</strong>：在方法区，存编译生成常量，如字符串、基本类型常量，为类加载运行供基础数据。</li><li><strong>运行时常量池</strong>：方法区动态扩展，含 Class 常量解析及动态生成常量，如 <code>String.intern()</code> 处理后的字符串。</li></ul><h3 id="_2-4-intern方法" tabindex="-1"><a class="header-anchor" href="#_2-4-intern方法"><span>2.4 intern方法</span></a></h3><p><code>intern()</code> 将字符串入池，若池无相同串，加入并返回池内引用，有则返回池内已有引用。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> s1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;world&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">intern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> s2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;world&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(s1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> s2);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-string长度限制" tabindex="-1"><a class="header-anchor" href="#_2-5-string长度限制"><span>2.5 String长度限制</span></a></h3><ul><li>编译期：常量字符串受编译器限制，通常几千字节。</li><li>运行时：受堆内存、JVM 实现制约，创建超长串要谨慎，防 <code>OutOfMemoryError</code>。</li></ul><h2 id="_3-java关键字" tabindex="-1"><a class="header-anchor" href="#_3-java关键字"><span>3. Java关键字</span></a></h2><h3 id="_3-1-访问控制" tabindex="-1"><a class="header-anchor" href="#_3-1-访问控制"><span>3.1 访问控制</span></a></h3><table><thead><tr><th>关键字</th><th>访问权限</th><th>示例</th></tr></thead><tbody><tr><td><code>public</code></td><td>所有类可见</td><td><code>public class MyClass {}</code></td></tr><tr><td><code>private</code></td><td>仅所属类可见</td><td><code>private int secret;</code></td></tr><tr><td><code>protected</code></td><td>同包类及子类可见</td><td><code>protected void method() {}</code></td></tr><tr><td>（默认，无关键字）</td><td>同包类可见</td><td><code>class DefaultClass {}</code></td></tr></tbody></table><h3 id="_3-2-类、接口、抽象相关" tabindex="-1"><a class="header-anchor" href="#_3-2-类、接口、抽象相关"><span>3.2 类、接口、抽象相关</span></a></h3><ul><li><code>class</code>：定义类，如 <code>class Dog {}</code>，类是对象蓝图，含属性、方法。</li><li><code>interface</code>：定义接口，如 <code>interface Shape {}</code>，含方法签名、常量，无实现，供多类遵循实现多态。</li><li><code>abstract</code>：修饰抽象类或方法，抽象类可含抽象方法，子类必须实现，引导继承拓展，如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">abstract</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Vehicle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    abstract</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> move</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-修饰符" tabindex="-1"><a class="header-anchor" href="#_3-3-修饰符"><span>3.3 修饰符</span></a></h3><ul><li><code>final</code>：修饰类不可继承，方法不可重写，变量成常量，如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> FinalClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AnotherClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> finalMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> CONSTANT </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>static</code>：修饰成员归类所有，可直接用类名访问，静态方法不能访问非静态成员，如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Utility</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> increment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { count++; }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>synchronized</code>：用于多线程，修饰方法或块，保证同一时刻单线程访问共享资源，如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SharedResource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    synchronized</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> access</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-流程控制" tabindex="-1"><a class="header-anchor" href="#_3-4-流程控制"><span>3.4 流程控制</span></a></h3><ul><li><code>if</code>、<code>else</code>：基本条件分支，如 <code>if (condition) {} else {}</code>。</li><li><code>switch</code>、<code>case</code>、<code>default</code>：多分支，如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">switch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (var) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    case</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    case</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    default:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>while</code>、<code>do - while</code>：循环，前者先判断后循环，后者先循环后判断，如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (condition) {}</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (condition)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>for</code>：万能循环，如 <code>for (init; condition; update) {}</code>，常用于遍历数组、集合。</li></ul><h3 id="_3-5-异常处理" tabindex="-1"><a class="header-anchor" href="#_3-5-异常处理"><span>3.5 异常处理</span></a></h3><ul><li><code>try</code>、<code>catch</code>、<code>finally</code>：异常处理铁三角，如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 可能抛异常代码</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Exception</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 处理异常</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">finally</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 必执行，清理资源</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>throw</code>：手动抛异常，如 <code>throw new RuntimeException(&quot;Error&quot;);</code>。</li><li><code>throws</code>：在方法声明，示警调用者方法可能抛异常，如 <code>public void riskyMethod() throws IOException {}</code>。</li></ul><h3 id="_3-6-其他" tabindex="-1"><a class="header-anchor" href="#_3-6-其他"><span>3.6 其他</span></a></h3><ul><li><code>this</code>：类内指代当前对象，区分同名变量，调用构造函数，如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">age</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> age;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>super</code>：子类中访问父类成员、调用父类构造，如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Child</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Child</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> parentMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">method</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>new</code>：创建对象，如 <code>Object obj = new Object();</code>。</li><li><code>null</code>：空引用，易引发空指针，操作需谨慎。</li></ul>',54))])}]]),l=JSON.parse('{"path":"/posts/java/basic/object-oriented/3.java-basic.html","title":"java 基础知识","lang":"zh-CN","frontmatter":{"title":"java 基础知识","icon":"pen-to-square","cover":"https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/96297a7f2679bf0dce4fb9d11120b882_7601596078607350699.png","date":"2024-12-27T00:00:00.000Z","lastUpdated":true,"order":3,"category":["java"],"tag":["java-basic"],"description":"java 基本类型、String、关键字等内容介绍","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/posts/java/basic/object-oriented/3.java-basic.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"java 基础知识"}],["meta",{"property":"og:description","content":"java 基本类型、String、关键字等内容介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/96297a7f2679bf0dce4fb9d11120b882_7601596078607350699.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-27T08:24:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/96297a7f2679bf0dce4fb9d11120b882_7601596078607350699.png"}],["meta",{"name":"twitter:image:alt","content":"java 基础知识"}],["meta",{"property":"article:tag","content":"java-basic"}],["meta",{"property":"article:published_time","content":"2024-12-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-27T08:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"java 基础知识\\",\\"image\\":[\\"https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/96297a7f2679bf0dce4fb9d11120b882_7601596078607350699.png\\"],\\"datePublished\\":\\"2024-12-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-27T08:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1. Java基本数据类型","slug":"_1-java基本数据类型","link":"#_1-java基本数据类型","children":[{"level":3,"title":"1.1 概述","slug":"_1-1-概述","link":"#_1-1-概述","children":[]},{"level":3,"title":"1.2 详细分类","slug":"_1-2-详细分类","link":"#_1-2-详细分类","children":[]},{"level":3,"title":"1.3 自动拆装箱","slug":"_1-3-自动拆装箱","link":"#_1-3-自动拆装箱","children":[]},{"level":3,"title":"1.4 浮点数与金额问题","slug":"_1-4-浮点数与金额问题","link":"#_1-4-浮点数与金额问题","children":[]}]},{"level":2,"title":"2. String类型","slug":"_2-string类型","link":"#_2-string类型","children":[{"level":3,"title":"2.1 常用方法","slug":"_2-1-常用方法","link":"#_2-1-常用方法","children":[]},{"level":3,"title":"2.2 技巧","slug":"_2-2-技巧","link":"#_2-2-技巧","children":[]},{"level":3,"title":"2.3 字符串池、常量池概念","slug":"_2-3-字符串池、常量池概念","link":"#_2-3-字符串池、常量池概念","children":[]},{"level":3,"title":"2.4 intern方法","slug":"_2-4-intern方法","link":"#_2-4-intern方法","children":[]},{"level":3,"title":"2.5 String长度限制","slug":"_2-5-string长度限制","link":"#_2-5-string长度限制","children":[]}]},{"level":2,"title":"3. Java关键字","slug":"_3-java关键字","link":"#_3-java关键字","children":[{"level":3,"title":"3.1 访问控制","slug":"_3-1-访问控制","link":"#_3-1-访问控制","children":[]},{"level":3,"title":"3.2 类、接口、抽象相关","slug":"_3-2-类、接口、抽象相关","link":"#_3-2-类、接口、抽象相关","children":[]},{"level":3,"title":"3.3 修饰符","slug":"_3-3-修饰符","link":"#_3-3-修饰符","children":[]},{"level":3,"title":"3.4 流程控制","slug":"_3-4-流程控制","link":"#_3-4-流程控制","children":[]},{"level":3,"title":"3.5 异常处理","slug":"_3-5-异常处理","link":"#_3-5-异常处理","children":[]},{"level":3,"title":"3.6 其他","slug":"_3-6-其他","link":"#_3-6-其他","children":[]}]}],"git":{"createdTime":1735286816000,"updatedTime":1735287890000,"contributors":[{"name":"XuYong","username":"XuYong","email":"55010058+coder-xuyong@users.noreply.github.com","commits":2,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":5.08,"words":1523},"filePathRelative":"posts/java/basic/object-oriented/3.java-basic.md","localizedDate":"2024年12月27日","excerpt":"<p>java 基本类型、String、关键字等内容介绍</p>\\n","autoDesc":true}')}}]);