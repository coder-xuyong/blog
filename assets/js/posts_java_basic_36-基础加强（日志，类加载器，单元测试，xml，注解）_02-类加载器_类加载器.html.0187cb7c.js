"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3880],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,l]of s)a[i]=l;return a}},3088:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>g,data:()=>c});var l=a(641);const n=a.p+"assets/img/01_类加载器.55a33d8b.png",t=a.p+"assets/img/02_类加载过程加载.59e9d01e.png",e=a.p+"assets/img/03_类加载过程验证.2c4b9c56.png",p=a.p+"assets/img/04_类加载过程准备.d37c8b3a.png",h=a.p+"assets/img/05_类加载过程解析.2363814f.png",k=a.p+"assets/img/06_类加载过程初始化.567239d5.png",r=a.p+"assets/img/07_双亲委派模型.5115a11e.png",d={},g=(0,a(6262).A)(d,[["render",function(i,s){return(0,l.uX)(),(0,l.CE)("div",null,[s[0]||(s[0]=(0,l.Lk)("p",null,"类加载器",-1)),(0,l.Q3)(" more "),s[1]||(s[1]=(0,l.Fv)('<h1 id="写在前面的话" tabindex="-1"><a class="header-anchor" href="#写在前面的话"><span>写在前面的话：</span></a></h1><blockquote><p>基础加强包含了：</p><p>反射，动态代理，类加载器，xml，注解，日志，单元测试等知识点</p><p>其中最难的是反射和动态代理，其他知识点都非常简单</p><p>由于B站P数限制，xml，注解等知识点，阿玮写了详细文档供大家学习</p></blockquote><h2 id="_1-类加载器" tabindex="-1"><a class="header-anchor" href="#_1-类加载器"><span>1.类加载器</span></a></h2><h3 id="_1-1类加载器" tabindex="-1"><a class="header-anchor" href="#_1-1类加载器"><span>1.1类加载器</span></a></h3><ul><li><p>作用</p><p>负责将.class文件（存储的物理文件）加载在到内存中</p><figure><img src="'+n+'" alt="01_类加载器" tabindex="0" loading="lazy"><figcaption>01_类加载器</figcaption></figure></li></ul><h3 id="_1-2类加载的完整过程" tabindex="-1"><a class="header-anchor" href="#_1-2类加载的完整过程"><span>1.2类加载的完整过程</span></a></h3><ul><li><p>类加载时机</p><p>简单理解：字节码文件什么时候会被加载到内存中？</p><p>有以下的几种情况：</p><ul><li>创建类的实例（对象）</li><li>调用类的类方法</li><li>访问类或者接口的类变量，或者为该类变量赋值</li><li>使用反射方式来强制创建某个类或接口对应的java.lang.Class对象</li><li>初始化某个类的子类</li><li>直接使用java.exe命令来运行某个主类</li></ul><p>总结而言：用到了就加载，不用不加载</p></li><li><p>类加载过程</p><ol><li><p>加载</p><ul><li>通过包名 + 类名，获取这个类，准备用流进行传输</li><li>在这个类加载到内存中</li><li>加载完毕创建一个class对象</li></ul><figure><img src="'+t+'" alt="02_类加载过程加载" tabindex="0" loading="lazy"><figcaption>02_类加载过程加载</figcaption></figure></li><li><p>链接</p><ul><li><p>验证</p><p>确保Class文件字节流中包含的信息符合当前虚拟机的要求，并且不会危害虚拟机自身安全</p><p>(文件中的信息是否符合虚拟机规范有没有安全隐患)</p></li></ul><figure><img src="'+e+'" alt="03_类加载过程验证" tabindex="0" loading="lazy"><figcaption>03_类加载过程验证</figcaption></figure><ul><li><p>准备</p><p>负责为类的类变量（被static修饰的变量）分配内存，并设置默认初始化值</p><p>(初始化静态变量)</p></li></ul><figure><img src="'+p+'" alt="04_类加载过程准备" tabindex="0" loading="lazy"><figcaption>04_类加载过程准备</figcaption></figure><ul><li><p>解析</p><p>将类的二进制数据流中的符号引用替换为直接引用</p><p>(本类中如果用到了其他类，此时就需要找到对应的类)</p></li></ul><figure><img src="'+h+'" alt="05_类加载过程解析" tabindex="0" loading="lazy"><figcaption>05_类加载过程解析</figcaption></figure></li><li><p>初始化</p><p>根据程序员通过程序制定的主观计划去初始化类变量和其他资源</p><p>(静态变量赋值以及初始化其他资源)</p><figure><img src="'+k+'" alt="06_类加载过程初始化" tabindex="0" loading="lazy"><figcaption>06_类加载过程初始化</figcaption></figure></li></ol></li><li><p>小结</p><ul><li>当一个类被使用的时候，才会加载到内存</li><li>类加载的过程: 加载、验证、准备、解析、初始化</li></ul></li></ul><h3 id="_1-3类加载的分类【理解】" tabindex="-1"><a class="header-anchor" href="#_1-3类加载的分类【理解】"><span>1.3类加载的分类【理解】</span></a></h3><ul><li><p>分类</p><ul><li>Bootstrap class loader：虚拟机的内置类加载器，通常表示为null ，并且没有父null</li><li>Platform class loader：平台类加载器,负责加载JDK中一些特殊的模块</li><li>System class loader：系统类加载器,负责加载用户类路径上所指定的类库</li></ul></li><li><p>类加载器的继承关系</p><ul><li>System的父加载器为Platform</li><li>Platform的父加载器为Bootstrap</li></ul></li><li><p>代码演示</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ClassLoaderDemo1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //获取系统类加载器</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        ClassLoader</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> systemClassLoader</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> ClassLoader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getSystemClassLoader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //获取系统类加载器的父加载器 --- 平台类加载器</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        ClassLoader</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> classLoader1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> systemClassLoader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getParent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //获取平台类加载器的父加载器 --- 启动类加载器</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        ClassLoader</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> classLoader2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> classLoader1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getParent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;系统类加载器&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> systemClassLoader);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;平台类加载器&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> classLoader1);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;启动类加载器&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> classLoader2);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-4双亲委派模型【理解】" tabindex="-1"><a class="header-anchor" href="#_1-4双亲委派模型【理解】"><span>1.4双亲委派模型【理解】</span></a></h3><ul><li><p>介绍</p><p>如果一个类加载器收到了类加载请求，它并不会自己先去加载，而是把这个请求委托给父类的加载器去执行，如果父类加载器还存在其父类加载器，则进一步向上委托，依次递归，请求最终将到达顶层的启动类加载器，如果父类加载器可以完成类加载任务，就成功返回，倘若父类加载器无法完成此加载任务，子加载器才会尝试自己去加载，这就是双亲委派模式</p><figure><img src="'+r+'" alt="07_双亲委派模型" tabindex="0" loading="lazy"><figcaption>07_双亲委派模型</figcaption></figure></li></ul><h3 id="_1-5classloader-中的两个方法【应用】" tabindex="-1"><a class="header-anchor" href="#_1-5classloader-中的两个方法【应用】"><span>1.5ClassLoader 中的两个方法【应用】</span></a></h3><ul><li><p>方法介绍</p><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>public static ClassLoader getSystemClassLoader()</td><td>获取系统类加载器</td></tr><tr><td>public InputStream getResourceAsStream(String name)</td><td>加载某一个资源文件</td></tr></tbody></table></li><li><p>示例代码</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ClassLoaderDemo2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> throws</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> IOException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //static ClassLoader getSystemClassLoader() 获取系统类加载器</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //InputStream getResourceAsStream(String name)  加载某一个资源文件</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //获取系统类加载器</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        ClassLoader</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> systemClassLoader</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> ClassLoader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getSystemClassLoader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //利用加载器去加载一个指定的文件</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //参数：文件的路径（放在src的根目录下，默认去那里加载）</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //返回值：字节流。</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        InputStream</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> is</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> systemClassLoader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getResourceAsStream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;prop.properties&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Properties</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> prop</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        prop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">load</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(is);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(prop);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        is</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>',13))])}]]),c=JSON.parse('{"path":"/posts/java/basic/36-%E5%9F%BA%E7%A1%80%E5%8A%A0%E5%BC%BA%EF%BC%88%E6%97%A5%E5%BF%97%EF%BC%8C%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8%EF%BC%8C%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%EF%BC%8Cxml%EF%BC%8C%E6%B3%A8%E8%A7%A3%EF%BC%89/02-%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html","title":"类加载器","lang":"zh-CN","frontmatter":{"title":"类加载器","icon":"pen-to-square","date":"2023-02-24T00:00:00.000Z","lastUpdated":true,"order":1,"author":[{"name":"xuyong"},{"name":"黑马程序员"}],"category":["java"],"tag":["java-basic"],"description":"类加载器","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/posts/java/basic/36-%E5%9F%BA%E7%A1%80%E5%8A%A0%E5%BC%BA%EF%BC%88%E6%97%A5%E5%BF%97%EF%BC%8C%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8%EF%BC%8C%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%EF%BC%8Cxml%EF%BC%8C%E6%B3%A8%E8%A7%A3%EF%BC%89/02-%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"类加载器"}],["meta",{"property":"og:description","content":"类加载器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-29T14:59:53.000Z"}],["meta",{"property":"article:author","content":"xuyong"}],["meta",{"property":"article:tag","content":"java-basic"}],["meta",{"property":"article:published_time","content":"2023-02-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-29T14:59:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-29T14:59:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\"},{\\"@type\\":\\"Person\\",\\"name\\":\\"黑马程序员\\"}]}"]]},"headers":[{"level":2,"title":"1.类加载器","slug":"_1-类加载器","link":"#_1-类加载器","children":[{"level":3,"title":"1.1类加载器","slug":"_1-1类加载器","link":"#_1-1类加载器","children":[]},{"level":3,"title":"1.2类加载的完整过程","slug":"_1-2类加载的完整过程","link":"#_1-2类加载的完整过程","children":[]},{"level":3,"title":"1.3类加载的分类【理解】","slug":"_1-3类加载的分类【理解】","link":"#_1-3类加载的分类【理解】","children":[]},{"level":3,"title":"1.4双亲委派模型【理解】","slug":"_1-4双亲委派模型【理解】","link":"#_1-4双亲委派模型【理解】","children":[]},{"level":3,"title":"1.5ClassLoader 中的两个方法【应用】","slug":"_1-5classloader-中的两个方法【应用】","link":"#_1-5classloader-中的两个方法【应用】","children":[]}]}],"git":{"createdTime":1735484393000,"updatedTime":1735484393000,"contributors":[{"name":"XuYong","username":"XuYong","email":"1299461580@qq.com","commits":1,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":4.07,"words":1220},"filePathRelative":"posts/java/basic/36-基础加强（日志，类加载器，单元测试，xml，注解）/02-类加载器/类加载器.md","localizedDate":"2023年2月24日","excerpt":"<p>类加载器</p>\\n","autoDesc":true}')}}]);