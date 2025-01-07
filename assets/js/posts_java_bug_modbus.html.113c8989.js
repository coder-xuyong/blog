"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4662],{66262:(e,t)=>{t.A=(e,t)=>{const o=e.__vccOpts||e;for(const[e,s]of t)o[e]=s;return o}},94803:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>l,data:()=>d});var s=o(20641);const a={},l=(0,o(66262).A)(a,[["render",function(e,t){return(0,s.uX)(),(0,s.CE)("div",null,[t[0]||(t[0]=(0,s.Lk)("p",null,"整理modbus的使用方法",-1)),(0,s.Q3)(" more "),t[1]||(t[1]=(0,s.Fv)('<h2 id="_1-什么是modbus" tabindex="-1"><a class="header-anchor" href="#_1-什么是modbus"><span>1.什么是modbus？</span></a></h2><p>顾名思义，它是一个Bus，即总线协议。比如串口协议、IIC协议、SPI都是通信协议。通过此协议，控制器相互之间、或控制器经由网络（如以太网）可以和其它设备之间进行通信。Modbus协议使用的是主从通讯技术，即由主设备主动查询和操作从设备。一般将主控设备方所使用的协议称为Modbus Master，从设备方使用的协议称为Modbus Slave。</p><p>Modbus通讯物理接口可以选用串口（包括RS232、RS485和RS422），也可以选择以太网口。其通信遵循以下的过程：</p><ul><li>主设备向从设备发送请求</li><li>从设备分析并处理主设备的请求，然后向主设备发送结果</li><li>如果出现任何差错，从设备将返回一个异常功能码</li></ul><p>归纳：就是免费+简单+方便修改！Modbus就是一种用在工业上的简单协议!</p><h2 id="_2-modbus-包括些什么" tabindex="-1"><a class="header-anchor" href="#_2-modbus-包括些什么"><span>2.modbus 包括些什么？</span></a></h2><p>大致细分为以下三种情况：</p><ul><li>Modbus-RTU</li><li>Modbus-ASCII</li><li>Modbus-TCP</li></ul><p>一个设备只会有一个协议，只需要看对应的部分即可。</p><h3 id="_2-1-modbus-的通讯方式" tabindex="-1"><a class="header-anchor" href="#_2-1-modbus-的通讯方式"><span>2.1.modbus 的通讯方式</span></a></h3><ul><li>以太网：对应的通信模式是Modbus TCP/IP</li><li>异步串行传输（各种介质如有线RS-232-/422/485/；光纤、无线等）：对应的通信模式是Modbus RTU或Modbus ASCII</li><li>高速令牌传递网络：对应的通信模式是Modbus PLUS</li></ul><p>Modbus RTU和Modbus ASCII协议应用于串口链接（RS232、RS485、RS422），Modbus tcp/ip协议应用于以太网链接。</p><h2 id="_3-通讯过程" tabindex="-1"><a class="header-anchor" href="#_3-通讯过程"><span>3.通讯过程</span></a></h2><p>Modbus是主从方式通信，也就是说，不能同步进行通信，总线上每次只有一个数据进行传输，即每次通讯都是主站先发送指令，可以是广播，或是向特定从站的单播；从站响应指令，并按要求应答，或者报告异常。当主站不发送请求时，从站不会自己发出数据，从站和从站之间不能直接通讯。</p><p>Modbus协议是应用层（协议层）报文传输协议，它定义了一个与物理层无关的协议数据单元（PDU），即PDU=功能码+数据域，功能码1byte，数据域不确定。</p><p>Modbus协议能够应用在不同类型的总线或网络。对应不同的总线或网络，Modbus协议引入一些附加域映射成应用数据单元（ADU），即ADU=附加域+PDU，例如modbus tcp/ip------ ADU=MBAP+ADU。</p><h2 id="_4-modbus-rtu-协议" tabindex="-1"><a class="header-anchor" href="#_4-modbus-rtu-协议"><span>4.modbus-RTU 协议</span></a></h2><p>设备必须要有RTU协议！这是Modbus协议上规定的，且默认模式必须是RTU，ASCII作为选项。（也就是说，一般的设备只有RTU这个协议，ASCII一般很少）所以说，一般学习Modbus协议，只需要了解RTU的协议，ASCII作为学习的了解就足够了。</p><h3 id="_4-1-帧结构" tabindex="-1"><a class="header-anchor" href="#_4-1-帧结构"><span>4.1.帧结构</span></a></h3><p>帧结构 = 地址 + 功能码+ 数据 + 校验</p><ul><li>地址: 占用一个字节，范围0-255，其中有效范围是1-247，其他有特殊用途，比如255是广播地址(广播地址就是应答所有地址，正常的需要两个设备的地址一样才能进行查询和回复)。</li><li>功能码：占用一个字节，功能码的意义就是，知道这个指令是干啥的，比如你可以查询从机的数据，也可以修改数据，所以不同功能码对应不同功能。</li><li>数据：根据功能码不同，有不同结构，在下面的实例中有说明。</li><li>校验：为了保证数据不错误，增加这个，然后再把前面的数据进行计算看数据是否一致，如果一致，就说明这帧数据是正确的，我再回复；如果不一样，说明你这个数据在传输的时候出了问题，数据不对的，所以就抛弃了。</li></ul><p>Modbus-RTU协议只需要看懂功能码0x03、0x06、0x10这三个基本的就已经足够了，分别回想下其数据域部分：</p><p>0x03—主机需要发送起始地址+寄存器数量，从机回复总字节数+数据；</p><p>0x06—主机发送起始地址+数据内容（因为你只需要修改一个，所以起始地址就是所要修改的地址），从机返回起始地址+数据内容（发现居然一样！）</p><p>0x10—主机发送起始地址+寄存器个数+总字节数+数据，从机返回起始地址+寄存器数量</p><h2 id="_5-modbus-acsii协议" tabindex="-1"><a class="header-anchor" href="#_5-modbus-acsii协议"><span>5.Modbus-ACSII协议</span></a></h2><p>做个基础了解</p><h3 id="_5-1-帧结构" tabindex="-1"><a class="header-anchor" href="#_5-1-帧结构"><span>5.1.帧结构</span></a></h3><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档：</span></a></h2><p><a href="https://blog.csdn.net/tiandiren111/article/details/118347661" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/tiandiren111/article/details/118347661</a><br><a href="https://www.cnblogs.com/The-explosion/p/11512677.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/The-explosion/p/11512677.html</a></p>',30))])}]]),d=JSON.parse('{"path":"/posts/java/bug/modbus.html","title":"modbus 使用","lang":"zh-CN","frontmatter":{"title":"modbus 使用","icon":"pen-to-square","date":"2023-06-05T00:00:00.000Z","lastUpdated":true,"category":["java"],"tag":["modbus"],"description":"整理modbus的使用方法","head":[["meta",{"property":"og:url","content":"https://coder-xuyong.github.io/blog/blog/posts/java/bug/modbus.html"}],["meta",{"property":"og:site_name","content":"coder-xuyong"}],["meta",{"property":"og:title","content":"modbus 使用"}],["meta",{"property":"og:description","content":"整理modbus的使用方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-07T07:36:39.000Z"}],["meta",{"property":"article:tag","content":"modbus"}],["meta",{"property":"article:published_time","content":"2023-06-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-07T07:36:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"modbus 使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-05T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-07T07:36:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xuyong\\",\\"url\\":\\"https://github.com/coder-xuyong\\"}]}"]]},"headers":[{"level":2,"title":"1.什么是modbus？","slug":"_1-什么是modbus","link":"#_1-什么是modbus","children":[]},{"level":2,"title":"2.modbus 包括些什么？","slug":"_2-modbus-包括些什么","link":"#_2-modbus-包括些什么","children":[{"level":3,"title":"2.1.modbus 的通讯方式","slug":"_2-1-modbus-的通讯方式","link":"#_2-1-modbus-的通讯方式","children":[]}]},{"level":2,"title":"3.通讯过程","slug":"_3-通讯过程","link":"#_3-通讯过程","children":[]},{"level":2,"title":"4.modbus-RTU 协议","slug":"_4-modbus-rtu-协议","link":"#_4-modbus-rtu-协议","children":[{"level":3,"title":"4.1.帧结构","slug":"_4-1-帧结构","link":"#_4-1-帧结构","children":[]}]},{"level":2,"title":"5.Modbus-ACSII协议","slug":"_5-modbus-acsii协议","link":"#_5-modbus-acsii协议","children":[{"level":3,"title":"5.1.帧结构","slug":"_5-1-帧结构","link":"#_5-1-帧结构","children":[]}]},{"level":2,"title":"参考文档：","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1736234322000,"updatedTime":1736235399000,"contributors":[{"name":"XuYong","username":"XuYong","email":"55010058+coder-xuyong@users.noreply.github.com","commits":2,"url":"https://github.com/XuYong"}]},"readingTime":{"minutes":3.93,"words":1179},"filePathRelative":"posts/java/bug/modbus.md","localizedDate":"2023年6月5日","excerpt":"<p>整理modbus的使用方法</p>\\n","autoDesc":true}')}}]);