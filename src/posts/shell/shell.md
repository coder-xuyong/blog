---
title: shell 基础知识
icon: pen-to-square
date: 2023-06-05
category:
  - windows
tag:
  - script
  - shell
---

入门 shell 脚本的基础知识

<!-- more -->

## 1、@echo off

* 回显：这条命令后的内容显示到控制台上。

* 新建一个文件：test_echooff.bat,输入如下内容
```shell
@echo off

echo 这是测试内容的第1行
echo 这是测试内容的第2行
echo 这是测试内容的第3行
echo end

pause
```
如果乱码，另存为，设置ANSI编码，重新运行。

* 修改文件内容，将其中的@ 符号去掉，内容如下：
```shell 
echo off

echo 这是测试内容的第1行
echo 这是测试内容的第2行
echo 这是测试内容的第3行
echo end

pause
```
`echo off`执行以后，后面所有的命令均不显示，但本条命令是显示的。

* 继续修改文件内容，将第一条命令注释掉，内容如下：
```shell
::echo off

echo 这是测试内容的第1行
echo 这是测试内容的第2行
echo 这是测试内容的第3行
echo end

pause
```
结果就是在cmd 回显了`echo off`后面的命令。

**总结**：
@echo off表示执行了这条命令后关闭所有命令(包括本身这条命令)的回显。而echo off命令则表示关闭其他所有命令(不包括本身这条命令)的回显，@的作用就是关闭紧跟其后的一条命令的回显，关于上述例子应该表现的很清楚了，不过还有几点需要解释一下：

* pause也是一条命令，作用就是使程序暂停，也就是输出“请按任意键继续…”的原因。
* ::是批处理文件中一种注释语句的方式，其与rem命令的区别我们后续再说。
* @echo off执行以后，后面所有的命令均不显示，包括本条命令。
* echo off执行以后，后面所有的命令均不显示，但本条命令是显示的。



## 2、%0 %1——给批处理脚本传递参数



* 批处理文件中可引用的参数为%0~%9，%0是指批处理文件的本身，也可以说是一个外部命令；%1%9是批处理参数，也称形参，我们来新建一个文件，文件命名为test_argv.bat，文件内容如下：

```shell
@echo off

echo param[0] = %0
echo param[1] = %1
echo param[2] = %2
echo param[3] = %3
echo param[4] = %4
echo param[5] = %5
echo ...
pause
```

* 在控制台输入命令运行：`test_argv.bat 1 game test what`

**总结：**

* 如果不借助其他其他命令，批处理做多接收9个额外的参数。
* 使用`shift`命令可以对参数进行偏移，从而取到更多的参数。
* 如果使用的某个参数没有传递进来，则该变量为空，如例子中的%5。



## 3、变量声明、设置、拼接、截取

假设我们的批处理脚本要实现这样一个功能：从控制台接收参数，前两个参数为信息发送者，第三个参数为信息接收者，最后一个参数为信息内容，请输出所有发送者、接收者和信息内容。

* 代码实现，新建一个文件命名为test_set.bat然后编写如下代码：

```shell
@echo off

::设置变量
SET Sender1=%1
SET Sender2=%2
SET Receiver=%3
SET Content=%4

::字符串拼接(等号前面不能有空格)
SET Sender=%Sender1%, %Sender2% 
::字符串截取
SET RealContent=%Content:~1,-1%

echo Sender = %Sender%
echo ---------------------------------/
echo Receiver = %Receiver%
echo ---------------------------------/
echo Content = %Content%
echo ---------------------------------/
echo RealContent = %RealContent%
echo ---------------------------------/

pause
```



* 在控制台输入命令运行：`test_set.bat tom jerry xiaoming "I miss you"`



**总结**:

* 这其中有几个点需要注意，首先变量设置只需要使用SET 任意变量名=所要表达的内容;
* 变量的拼接只要把变量依次写在一起就可以，形如SET 变量=变量1变量2 内容3，字符串4，不同部分之间可以没有连接符，直接相连或者用空格。
* 变量的截取需要使用固定的格式%变量:~a,b%，这就表示把变量从第a个字符截取到第b个字符，b可以为负数，表示从字符串后面计数，-1表示最后一个字符。
* 关于例子中信息内容这最后一个参数，其中的双引号使我故意加的，也是非常必要的，这样可以把这句包含空格的话作为一个变量传递到批处理脚本中，如果不加双引号的话，变量Content的内容就是I了，后两个单词就被丢掉了。

## 4、路径相关%cd%和%~dp0的区别

在DOS命令中，有两个[环境变量](https://so.csdn.net/so/search?q=环境变量&spm=1001.2101.3001.7020)可以跟当前路径有关，一个是`%cd%`, 一个是`%~dp0`。但是这两个变量的用法和代表的内容是不同的。

- `%cd%`可以用在批处理文件中，也可以用在命令行中，内容为执行命令所在的目录（包含驱动器盘符）。
- `%~dp0`只可以用在批处理文件中，由所在的批处理文件的目录位置决定的，内容为批处理文件所在的目录（包含驱动器盘符）。
- 比如我们在目录`F:\batTool\`下新建一个文件命名为test_dir.bat，其代码的内容如下：

```shell
@echo off

::对比%cd%和%~dp0的不同
echo %%cd%% = %cd%     
echo %%~dp0 = %~dp0  
```

* 我们在不同目录下的执行结果为：

```cmd
F:\batTool>test_dir.bat
%cd% = F:\batTool
%~dp0 = F:\batTool\

F:\batTool>cd /d E:

E:>F:\batTool\test_dir.bat
%cd% = E:\
%~dp0 = F:\batTool\

E:>cd /d D:

D:>F:\batTool\test_dir.bat
%cd% = D:\
%~dp0 = F:\batTool\
```

**总结：**

* `%cd%`表示执行命令时所在的目录，`%~dp0`表示批处理文件所在的目录。
* `%cd%`是可以改变的，因为它表示的是当前目录，如果在批处理中使用了`cd`命令就会改变他的值。
* `%~dp0`是在执行某个批处理结束之前是不会改变的，因为代表的是脚本文件在磁盘的位置。



## 5、遍历指定目录下资源文件并更新

**前言**

先来看这样一个需求，假设有A，B两个目录，其中A目录是资源目录，B目录是工作目录，其中资源目录不定期更新，资源文件都在A目录下，并且没有子目录层级关系，但是资源要被使用时需要更新到B工作目录，B目录根据工程需要建立了一个包含众多子目录的层级体系，这样当A目录中的一个资源文件更新后，需要手动复制A目录中更新的资源文件，然后在B目录中找到对应的位置，然后进行粘贴替换，这样的操作如果很久一次、或者每次只有1、2个文件还好，如果资源文件大范围更新，那么要一个个找到更新文件在B目录中的位置然后替换就成了一件令人苦恼的事情，所以根据这个需求，才有了下面的探索过程。



**思路的转变**

一开始想把A目录作为出发点，毕竟A目录中包含了修改后的资源文件，但是A目录更新后怎样才能准确的修改对应的B目录呢？我想到了配表，每次新增资源后，都会修改配置表，将A目录中的各个文件资源与B目录中的位置建立对应关系，这样A目录下的资源更新后就可以根据配置文件统一更新B目录了。

但这样的做法就是，需要经常维护配置文件，特别是增加或者删除资源的时候，然后我就想到了现在的这个做法，从B目录出发，注意本文主要解决的是资源文件的更新，而不是新增，更新就说明是原有的文件，只是内容发生了变化，比如一些UI文件，这些文件经常会做布局格式的调整，控件的增加和删除等等，调整结束后需要更新到工作目录。

**实现过程**

实现的过程并没有想象的那么顺利，期间遇到了诸多问题和一些新的概念，比如for循环的语法，for循环中的变量定义，if条件的语法，字符串变量的替换，文件目录的处理，延迟环境变量扩展等等，这些问题每一项都可以作为一个单独的知识点，后续我会抽时间慢慢总结到一起，总之最后终于可以用了，前后大约花了1个半小时的时间，想想也是醉了，下面是一个具体的示例及对应的实现代码。

* A资源目录对应实际的”E:/dirZ”，结构如下：

```shell
root:[E:/dirZ]
+--aaa.txt
+--bbb.txt
+--ccc.txt
+--ddd.txt
+--eee.txt
+--extra.c
+--extra.h
+--fff.txt
+--ggg.txt
```

* B工作目录对应实际的”E:/dirA”，结构如下：

```shell
root:[E:/dirA]
+--aaa.txt
+--bbb.txt
+--dirB
|    +--ccc.txt
|    +--extra.c
|    +--extra.h
+--dirC
|    +--ddd.txt
|    +--dirD
|    |    +--eee.txt
+--dirE
|    +--dirF
|    |    +--fff.txt
|    |    +--ggg.txt
```

* 现在需要把`E:/dirZ`目录中的txt文件，按照`E:/dirA`目录的层级结构，更新到对应位置，并且不更新`ggg.txt`文件，以下是实现的代码:

```shell
@echo off

rem 启用延迟环境变量扩展
setlocal enabledelayedexpansion

rem 定义不需要更新的文件
SET EXCEPT_FILE=ggg.txt

rem 定义工作目录和资源目录
SET WORK_PATH=E:\dirA\
SET RESO_PATH=E:\dirZ\

rem 简单输出查看一下
echo WORK_PATH is %WORK_PATH%
echo RESO_PATH is %RESO_PATH%
echo ------------------------

rem for循环递归遍历WORK_PATH目录中的.txt文件，文件的全路径放在变量f中
for /R %WORK_PATH% %%f in (*.txt) do (
 rem 使用TARGET_FILE变量记录绝对文件名，注意延迟变量的使用
 SET TARGET_FILE=%%f
 echo !TARGET_FILE!

 rem 去掉路径，只保留文件名及扩展名
 SET "FILE_PATH_NO_EXT=%%~nxf"
 rem 利用资源路径和文件名，拼接出资源的绝对全路径
 SET SOURCE_FILE=%RESO_PATH%!FILE_PATH_NO_EXT!
 echo !SOURCE_FILE!

 rem 条件判断是否是不需要更新的文件
 if NOT !FILE_PATH_NO_EXT!==%EXCEPT_FILE% (
     copy !SOURCE_FILE! !TARGET_FILE!
 )
)
pause
```

* 运行结果

```shell
WORK_PATH is E:\dirA\
RESO_PATH is E:\dirZ\
<hr />

E:\dirA\aaa.txt
E:\dirZ\aaa.txt
已复制         1 个文件。
E:\dirA\bbb.txt
E:\dirZ\bbb.txt
已复制         1 个文件。
E:\dirA\dirB\ccc.txt
E:\dirZ\ccc.txt
已复制         1 个文件。
E:\dirA\dirC\ddd.txt
E:\dirZ\ddd.txt
已复制         1 个文件。
E:\dirA\dirC\dirD\eee.txt
E:\dirZ\eee.txt
已复制         1 个文件。
E:\dirA\dirE\dirF\fff.txt
E:\dirZ\fff.txt
已复制         1 个文件。
E:\dirA\dirE\dirF\ggg.txt
E:\dirZ\ggg.txt
请按任意键继续. . .
```

**总结**

到此为止我们就解决了这个资源更新的实际问题，每次资源更新后只要运行这个批处理文件就可以更新工作目录中对应的资源文件了，在这个例子中关于目录的截取，一开始走了很多弯路，其实有很多现成的方式，所以需要在此记录一下，方便以后查找使用，具体查看示例代码：

```shell
ECHO off
SETlOCAL enabledelayedexpansion

SET FIND_DIR=E:\dirA\dirC\dirD

for /R %FIND_DIR% %%f in (*.txt) do (
    SET FULL_PATH=%%f
    ECHO 完整的路径: !FULL_PATH!

    SET FILE_DIR=%%~dpf
    ECHO 所在的目录: !FILE_DIR!

    SET FILE_NAME=%%~nf
    ECHO 无后缀文件: !FILE_NAME!

    SET FILE_EXT=%%~xf
    ECHO 文件名后缀: !FILE_EXT!

    SET "FILE_NAME_NOT_PATH=%%~nxf"
    ECHO 无路径文件: !FILE_NAME_NOT_PATH!

    SET "FULL_PATH_NOT_EXT=%%~dpnf"
    ECHO 无后缀全名: !FULL_PATH_NOT_EXT!
)
pause
```

运行结果：

```shell
完整的路径: E:\dirA\dirC\dirD\eee.txt
所在的目录: E:\dirA\dirC\dirD\
无后缀文件: eee
文件名后缀: .txt
无路径文件: eee.txt
无后缀全名: E:\dirA\dirC\dirD\eee
```

## 6、替换字符串中匹配的子串

**前言**

关于字符串的操作通常是编程生涯中不可避免的，在各种竞赛中、工作中常常能使用到，许多语言中都有专门负责处理字符串的模块或者类，对于字符串的替换一般也有专门的函数，比如Lua中的string.gsub()、Python中的replece()等，那么批处理在进行字符串操作的时候，有没有好用的替换函数呢？

前两天在使用批处理更新资源文件的时候发现，批处理中也有专门处理字符串替换的方法，并且这是我见到的最有意思的字符串替换方式，就是利用A:B=C的方式来替换字符串，具体含义就是在字符串变量A中查找所有的子串B并且替换成子串C，看起来很有意思吧？下面举一个具体的示例看一下。
**代码示例**

```shell
@echo off

SET INPUT_PARAM=%1

rem 替换输入变量中的world为China
echo source string is %INPUT_PARAM%
echo ===   China replace world   ===
echo replace result is %INPUT_PARAM:world=China%

echo.

rem 将路径中的反斜杠替换成斜杠
SET IMAGE_PATH=C:\NVIDIA\AndroidWorks\001
echo source string is %IMAGE_PATH%
echo ===   \ replace /   ===
echo replace result is %IMAGE_PATH:\=/%

echo.

echo ABCD:A=a

pause
```

代码中举了两个例子，将变量中的world为China、将路径中的反斜杠替换成斜杠都成功地替换了子串的内容，但是我们发现这个的作用对象只能是变量，对于最后一句`echo ABCD:A=a`并没有发生替换，下面可以看一下运行结果。

**运行结果**

```shell
E:\batTool>Replace.bat "Hello wolrd, All over the world!"
source string is "Hello wolrd, All over the world!"
===   China replace world   ===
replace result is "Hello wolrd, All over the China!"

source string is C:\NVIDIA\AndroidWorks\001
===   \ replace /   ===
replace result is C:/NVIDIA/AndroidWorks/001

ABCD:A=a
请按任意键继续. . .
```

**总结**

1. bat处理字符串替换的方式比较有意思，需要知道`A:B=C`形式的替换方法
2. 字符串替换只能是针对变量，对于文本貌似不起作用。

## 7、各种形式的变量%0、%i、%%i、var、%var%、!var!的含义和区别

**前言**

最近使用批处理程序处理文件的时候，发现这 `bat`中的变量形式真是“变化多端”，有时候加1个百分号%，有时候加2个百分号%%，还有的时候加感叹号!，真是让初学者一头雾水，于是查询资料做了一些小测试，终于大致弄清楚了这些变量的含义，接下来一一列举出来。

**变量对比**

下面通过一些具体的例子来看下标题中提到的这些变量什么时候使用，使用的时候有哪些注意事项。

### 7.1、%0

这个是批处理程序中的固定用法，类似于C++程序main函数中argv变量数组，类比可以知道，argv[0]表示exe程序的文件名，argv[1]表示启动程序的第1个参数，后面依次类推。而在批处理程序中%0表示这个批处理程序的文件名，%1表示调用这个批处理时传入的第1个参数，%2表示调用这个批处理时传入的第2个参数，最大可以到%9，具体用法可以参考之前的总结《.bat批处理（二）：%0 %1——给批处理脚本传递参数》，简单测试如下：


```shell
@echo off

echo param0=%0
echo param0=%1
echo param0=%2

```

将上述代码保存在文件testparams.bat中，从cmd命令行运行批处理文件，只传入一个参数，运行结果如下：

```shell
C:\Users\Administrator\Downloads>testparams.bat “hello world”
param0=testparams.bat
param1=“hello world”
param2=
```

### 7.2、%i

在题目所列的这些变量中，这一个比较特殊，因为它不是批处理文件中的变量，只能用于cmd命令行下的for循环中，在命令行中for循环的语法是for %variable in (set) do command [command-parameters]，其中的variable只能是单字母或者非特殊含义的字符，同样的for循环语句如果写在批处理文件中variable之前就要加两个%%了，先来看看%i的用法，直接在命令行中遍历集合打印输出：


```shell
C:\Users\Administrator\Downloads>for %i in (1,3,5,8) do echo %i
C:\Users\Administrator\Downloads>echo 1
1
C:\Users\Administrator\Downloads>echo 3
3
C:\Users\Administrator\Downloads>echo 5
5
C:\Users\Administrator\Downloads>echo 8
8
```

如果将其中的%i改成%%i，就会报语法错误，测试结果如下：

```shell
C:\Users\Administrator\Downloads>for %%i in (1,3,5,8) do echo %%i
此时不应有 %%i。
```

### 7.3、%%i

这种类型也是for循环中特有的，与%i相对，属于批处理程序的用法，换句话说就是在for循环中遍历的索引变量，如果在命令行中定义需要一个%，如果相同的语句定义在批处理文件中需要2个%%，语法为for %%variable in (set) do command [command-parameters]，variable同样只能是单个字母或者普通字符，至于为什么同样含义的变量在批处理中要多加一个%，至今也没有找到官方的说法，查找MSDN也没有发现说明，不过就我个人理解可能就像我们在命令行中打印一个%，可以正常打印输出，如果通过printf()想输出%就需要2个%的原理一样吧，测试如下：
```shell
for %%i in (1,3,5,8) do echo %%i
```

直接在终端中运行命令会报上面的错误，保存为文件在进入cmd中运行，结果如下：

```shell
D:\test\battest>testPrecent.bat
D:\test\battest>for %i in (1 3 5 8) do echo %i
D:\test\battest>echo 1
1
D:\test\battest>echo 3
3
D:\test\battest>echo 5
5
D:\test\battest>echo 8
8
```

观察运行结果发现，运行批处理文件的时候，实际上去掉了%%i变量的1个%，将文件中代码改为1个%试下：

```shell
for %i in (1,3,5,8) do echo %i
```

运行结果：

```shell
C:\Users\Administrator\Downloads>testfor.bat
此时不应有 i。
```

### 7.4、var,%var%

先了解`set /a`，表示当前变量执行数学计算，如：`set /a var2=var1+1`

这个变量看起来挺正常的，也没有那么多奇奇怪怪的字符，和Lua、Python等语言中的变量长得挺像，实际上变量的这种形式很“短暂”，一般只能出现在给变量赋值的时候，也就是set语句之后，作为左值接受赋值时，或者在等号右测可评估的表达式中，举个例子，编写下面代码保存在normalVar.bat中：


```shell
@echo off

set var1=1
set /a var2=var1+1

echo var1
echo var2
```

运行之后的结果为:

```shell
C:\Users\Administrator\Downloads>normalVar.bat
var1
var2
```

看完结果之后觉得很神奇是不是，为什么和我学的其他语言不一样呢，我使用set分别为var1和var2赋了值，但是输出的时候居然不是数字而是变量名，其实这就引出了之后%var%这种用法，接着往下看。



在批处理中除了上面所说的在set语句后面的两种情况，再要想引用变量就需要在变量两端各加一个百分号%，明确的告诉引用者这是一个变量，使用时需要评估一下值，而不要当成字符串，上一个例子中echo后面想要输出的变量没有加%，那就被当成一个字符串处理，原样输出了，修改上个例子如下：

```shell
@echo off

set var1=1
set /a var2=var1+1

set var3=%var2%

echo %var1%
echo %var2%
echo %var3%
```

运行之后运行结果入下：

```shell
C:\Users\Administrator\Downloads>normalVar.bat
1
2
2
```

看了这次的结果感觉正常多了，有一点需要注意，`set var3=%var2%`这一句中var2变量中的%不能省略，因为它既不属于左值也不属于被评估值的表达式，如果不加%，赋值后var3的值会变成“var2”这个字符串。

### 7.5、!var!

这是最后一种常见的变量形式，同时也是一种不太好理解的形式，需要记住一点，这种变量与延迟环境变量扩展有关，如果没开启延迟环境变量扩展，那么!var!就是一个普通的包含5个字母的字符串，如果开启了延迟环境变量扩展，那么它就是变量var的实际值，可能说到这有的人会产生疑惑，引用变量var的值不是使用%var%吗？那么在开启延迟环境变量扩展的情况下，%var%和!var!有什么区别呢？下面举个例子测试下，编写如下代码保存在extVar.bat文件中：
```shell
@echo off

set var1=110
set var1=120&echo %var1%
```

运行之后的结果为：

```shell
C:\Users\Administrator\Downloads>extVar.bat
110
```



看到结果的时候是不是再次怀疑了世界，在打印变量var1之前明明重新赋值了120，为什么打印出来还是110呢？其实这是批处理脚本执行机制导致的，它会按行执行，在执行之前会先预处理，当执行`set var1=110`之后，变量var1变成了110，在执行s`et var1=120&echo %var1%`之前先预处理，将变量%var1%替换成了110，然后语句变成了`set var1=120&echo 110`，所以就得到了我们上面测试的结果。

想要解决这个问题就需要开启延迟环境变量扩展，语句为`setlocal enabledelayedexpansion`，然后将引用变量的形式由%var1%改为!var1!即可，所以可以修改代码如下：

```shell
@echo off

setlocal enabledelayedexpansion
set var1=110
set var1=120&echo !var1!
```

这回输出的结果符合预期了，开启了延迟环境变量扩展之后，!var!形式的变量在用之前才会评估确切的值，这是一个知识点，也是一个易错点，特别是在for循环中要格外注意，因为for循环语句的循环体括号中，所有的操作被看成是同一行，所以经常会用到延迟环境变量扩展。

**总结**

* for循环在cmd命令行中的固定用法for %i in (set) do (...)，循环变量格式为%i
* for循环在bat处理程序中的固定用法for %%i in (set) do (...)，循环变量格式为%%i
* 至于为什么for语法在批处理中需要多写一个%，希望知道的小伙伴能给出答案和参考资料，不胜感激
* 想要变量被使用的时候再评估值需要开启延迟环境变量扩展，语法为setlocal enabledelayedexpansion，同时使用!var!形式的变量
  

## 8、替换带有等号=的字符串的子串

**前言**
今天写这篇记录要解决的问题来源于最近一名读者的提问，之前写过一篇名为《.bat批处理（六）：替换字符串中匹配的子串》的总结文章，结果有读者在评论区提问说，如果想要替换的子串中包含等号 =，那么就无法替换了，问有没有什么办法可以解决。遇到这个问题的第一感觉应该挺好处理的吧，如果批处理程序在替换操作中认为等号 = 比较特殊，那就加个转义字符应该就可以了，但事实却证明这种想法有些天真了。

在尝试多次失败之后，我意识到事情远没有想象的那么简单，开始在网上寻找解决方案，结果有些让人意外，绝大多数人都说这是 SET 命令的执行规则决定的，无法实现这种需求。当要替换的子串中包含 = 时，第一个 = 就会被认为是替换语法中的 =，进而导致无法得到正确的结果，即使是使用转义字符都无法完成正确替换，加入的转义字符会影响匹配，导致替换失败。还有一些人建议用其他工具来完整这种需求，比如记事本的替换功能 O(∩_∩)O。

**遇到的问题**
看了上面的叙述，可能有些小伙伴对我所说的问题还没有太直观的认识，接下来我们举个例子来说一下这个问题究竟是怎样产生的。

**0x00 带有 = 的字符串**
首先需要被替换的字符串中要包含等号，我们来定义一个这样的变量：

```shell
set STR=abcdo=ocar12a=ajdjko=ot
```

变量的名字是` STR`，变量的值是 `abcdo=ocar12a=ajdjko=ot`，其中包含了三个 =。

**0x01 带有 = 的想要被替换的子串**
确定一下我们想要替换的子串` o=o`，假如我们想把它替换成字母` A`，按照一般的替换规则`X:Y=Z`，在 `X `串中寻找到` Y` 串之后把它替换成` Z` 串，实现的代码如下：

```shell
@echo off

set STR=abcdo=ocar12a=ajdjko=ot
set RESULT=%STR:o=o=A%

echo %RESULT%
pause > nul
```


运行之后的结果是：

```shell
abcdo=A=o=Acar12a=ajdjko=A=o=At
```



和我们想法不一样，我们本来想把 o=o 替换成 A，但是从结果来看应该是把 o 替换成了 o=A，原因就是我们选择的被替换中的子串 o=o 包含一个 =，而这个 = 被当成了替换语法 X:Y=Z 中的 =，所以就不对了。

**0x02 尝试用转义字符来处理**

很多语言中都有转义字符，比如 Markdown 语法中的反斜杠 \，在 Markdown 语法中被星号 * 包裹的文字是倾斜的，但是如果想正常的输出一个 * 怎么办呢？就需要在 * 前面加一个反斜杠 \，变成 \*，这样 * 原本的倾斜文字的作用就被转义了，变成了一个普通的输出字符。

在批处理中也有转义字符的概念，它就是 ^，我们知道在批处理中 >、| 等符号都是有特殊用处的，所以不能简单的输出，比如 echo > 是无法输出一个大于号的，要写成 echo ^> 才能正常输出一个 > 符号。

我们就利用这个转义字符来告诉替换命令，被替换的子串中的 = 是一个普通字符，不能作为替换规则的一部分，所以被替换的子串写成了 o^=o，我们实现下面的代码，看看能不能达到目的：

```shell
@echo off

set STR=abcdo=ocar12a=ajdjko=ot
set RESULT=%STR:o^=o=A%

echo %RESULT%
pause > nul
```


运行之后结果如下：

```shell
abcdo=ocar12a=ajdjko=ot
```

与替换前对比发现没有任何变化，看来转义字符的想法没能帮助我们解决问题，还是想想其他的办法吧。

**稳扎稳打的解决方案**

既然 = 这么特殊，我们就先想办法干掉等号，直接替换的方式不好使，我们可以一个字符一个字符的判断啊，虽然麻烦一点，但是解决问题才是最重要的。

既然要一个个的字符去判断，就需要遍历原字符串，最简单的可以使用字符串分割啊，语法为 原串:~偏移,长度 就可以了，如果不太清楚可以参考一下 《.bat批处理（三）：变量声明、设置、拼接、截取》，截取第一个字符的语法是 原串:~0,1， 截取第二个字符的语法是 原串:~1,1，以此类推。

具体的思路就是我们先判断第一个字符，如果是 = 就进行替换，如果不是 = 就放到结果字符串里，然后继续判断第二个字符进行操作，最后所有的字符处理一遍就完成了替换。

需要使用 goto 语句来写一个循环，代码逻辑比较简单，就是遍历所有字符，是 = 就替换，不是 = 就保留，假设我们先把 = 替换成 #，实现的代码如下：

```shell
@echo off

set STR=abcdo=ocar12a=ajdjko=ot
set CURSTR=%STR%
set RESULT=

:next
if "%CURSTR%" equ "" goto end
set a=%CURSTR:~0,1%

if "%a%" equ "=" (set RESULT=%RESULT%#) else (set RESULT=%RESULT%%a%)
set CURSTR=%CURSTR:~1%
goto next

:end
echo source string is %STR%
echo result string is %RESULT%
pause > nul
```


:next 是循环的入口，每次截取第一个字符，判断是 = 就在结果中拼接 # 字符，相当于完成了替换，如果字符不是 = ，就将字符直接拼接到结果中，操作之后将原串的第一个字符删除形成新的原串，然后再判断第一个字符，以此类推，直到原串为空，运行结果如下：

```shell
source string is abcdo=ocar12a=ajdjko=ot
result string is abcdo#ocar12a#ajdjko#ot
```

**最终方案**

事情到了这里好像还没完，在实际操作中有些情况不是替换一个 =，往往是替换的内容中包含 =，上面将 = 替换成 # 不具有通用型，如果是一开始的请求，将 o=o替换成 A 就不能这样写了，就应该是每次判断3个字符了，写起来有些麻烦，批处理中没有获得字符串长度的函数，需要自己实现一个，如果是100个字符的被替换串，那代码就很难写了。

既然 = 都能被我们替换掉，肯定有办法实现上面我们这种将 o=o替换成 A 的要求，下面我们就列举一种通用的处理方法。

**0x00 首先将 = 替换成一个原串中不可能出现的字符或者序列**

这步替换可能最后需要还原的，所以要求我们替换成的目标序列不能在原串中出现，比如我们上面把 = 替换成了 #， 如果原串中有 # 就会弄混了，不能确定是原来字符串中就存在的 #，还是由 = 变成的 #。

这个序列我们可以定义的变态一点，比如把 = 替换成 ###i#am#happy###，我们把它记作 α。

**0x01 用这个不能出现序列替换我们之前要查找替换子串中的 =**

我们之前要查找替换的子串是 o=o，那么替换之后形成 o###i#am#happy###o，我们把它记作 β。

**0x02 将第1步结束获得的替换结果作为原串，将其中的 β 替换成 A**

其实就是把第1步替换完结果作为原串，把其中的 o###i#am#happy###o 也就是原来的 o=o 替换成 A。

**0x03 将第3步结果的子串作为原串，将其中的 α 替换为 =**

这一步就是处理那些虽然是 =，但是这个 = 不是我要替换的结果子串中的，所以要还原

代码实现
步骤梳理清楚了，下面来写代码，按照步骤一步步写就可以了：

```
@echo off

rem 第一步
set CORESTR=###i#am#happy###
set STR=abcdo=ocar12a=ajdjko=ot
set CURSTR=%STR%
set RESULT1=

:next1
if "%CURSTR%" equ "" goto end1
set a=%CURSTR:~0,1%

if "%a%" equ "=" (set RESULT1=%RESULT1%%CORESTR%) else (set RESULT1=%RESULT1%%a%)
set CURSTR=%CURSTR:~1%
goto next1

:end1
echo source1 string is %STR%
echo result1 string is %RESULT1%
pause > nul


rem 第 2 步
set CORESTR=###i#am#happy###
set STR=o=o
set CURSTR=%STR%
set RESULT2=

:next2
if "%CURSTR%" equ "" goto end2
set a=%CURSTR:~0,1%

if "%a%" equ "=" (set RESULT2=%RESULT2%%CORESTR%) else (set RESULT2=%RESULT2%%a%)
set CURSTR=%CURSTR:~1%
goto next2

:end2
echo source2 string is %STR%
echo result2 string is %RESULT2%
pause > nul


rem 第3步，需要开启延迟变量
setlocal ENABLEDELAYEDEXPANSION
set RESULT3=!RESULT1:%RESULT2%=A!
echo result3 string is %RESULT3%
pause > nul


rem 第4步
set RESULT4=!RESULT3:%CORESTR%==!

echo finally result is %RESULT4%
```


运行之后的结果为：

```shell
source1 string is abcdo=ocar12a=ajdjko=ot
result1 string is abcdo###i#am#happy###ocar12a###i#am#happy###ajdjko###i#am#happy###ot
source2 string is o=o
result2 string is o###i#am#happy###o
result3 string is abcdAcar12a###i#am#happy###ajdjkAt
finally result is abcdAcar12a=ajdjkAt
```

这次终于替换成功了，o=o 被成功替换成了字母 A，代码中用到了延迟变量，主要是为了实现被替换字符串是变量的情况，不清楚延迟变量的用法可以简单查询一下，至此文章开头提出的问题我们就成功解决了，虽然路途有些坎坷。

**总结**

* 批处理程序中的 = 比较特殊，使用常规的 X:Y=Z 的语法不能替换包含 = 的子串
* 遇到上述情况可以将字符串切割，采用逐个字符比较的方式，将 = 替换成其他字符再进行后续操作
* 有时候也不必非得使用批处理来替换包含 = 的字符串，随便一个文本工具，比如记事本都可以文本进行替换
* 如果非得用命令解决，也可以使用从 linux 的 sed 命令移植到 windows 的 sed.exe 程序来很方便的进行替换
* 使用 sed 命令的语法是 echo abcdo=ocar12a=ajdjko=ot | sed -e "s/o=o/A/g"，一步就可以完成了文章开头的需求了
* 如果你暂时没有 sed.exe 程序，可以点击这个链接 sed.exe程序 下载，若不是在同一目录使用，记得将命令目录添加到环境变量中



## 9、从路径字符串中截取盘符、文件名、后缀名等信息

**前言**

又是实际开发中的问题，想要截取一个文件路径中的盘符、文件名等信息，第一反应是正则表达式？或者是 split 函数？这些往往都是“高级”语言中才会有的实现方法，对于批处理来说有点“带不动”啊，那么在bat批处理中要怎样处理类似的请求呢？最近找到了两种方法，接下来会逐一展示一下，不过在展示具体的写法前，我们先来看一下 %~dp0的含义。

**%~dp0的含义**
关于 %~dp0 的作用在之前的总结中 《.bat批处理（四）：路径相关%cd%和%~dp0的区别》 有提到过，它表示当前运行的批处理文件所在的目录，那么它是一个特殊的变量吗？

可以说算是吧，这个变量特殊在它是从参数变量 %0 扩展而来的，提到 %0 很多人都会想到它是批处理脚本的第一个参数，表示当前运行的脚本全路径，可以写个脚本试一下：

```shell
Albert at home-pc in D:\data\bat [0:03:25]
% Get-Content showparams.bat
@echo off

echo %0
echo %1

Albert at home-pc in D:\data\bat [0:03:31]
% ./showparams.bat good
"D:\data\bat\showparams.bat"
good
```


类似的变量还有 1%、2%、3%… 一直到9%，都依次表示运行批处理脚本时传入的参数，这些变量还有一个本领，那就是支持扩展，写起来花里胡哨的。

**扩展字符串**

扩展字符串是批处理自带的功能，可以实现对表示文件路径的字符串进行特殊的处理，以%0 参数为例，具体功能列举如下：

* %~0 - 删除路径中的引号
* %~f0 - 将 %0 扩展到一个完全合格的路径名
* %~d0 - 将 %0 扩展到一个驱动器号
* %~p0 - 将 %0 扩展到一个路径
* %~n0 - 将 %0 扩展到一个文件名
* %~x0 - 将 %0 扩展到一个文件扩展名
* %~s0 - 将 %0 扩展的路径只含有短名
* %~a0 - 将 %0 扩展到文件的文件属性
* %~t0 - 将 %0 扩展到文件的日期/时间
* %~z0 - 将 %0 扩展到文件的大小
* %~$PATH:0 查找变量0%在环境变量$PATH的目录，并将 %0 扩展到找到的第一个完全合格的名称，$PATH未被定义或没找到文件，则结果为空字符串

当然这个写法也可以进行组合，比如 %~d0 和 %~p0 组合后变成 %~dp0 也就是我们常见的那个变量啦~

可以将这些变量打印出来看一下具体的值：

```shell
Albert at home-pc in D:\data\bat [0:26:17]
% Get-Content showparams.bat
@echo off

echo %0
echo %~0
echo %~f0
echo %~d0
echo %~p0
echo %~n0
echo %~x0
echo %~s0
echo %~a0
echo %~t0
echo %~z0
echo %~dp0
echo %~nx0
Albert at home-pc in D:\data\bat [0:26:28]
% .\showparams.bat
"D:\data\bat\showparams.bat"
D:\data\bat\showparams.bat
D:\data\bat\showparams.bat
D:
\data\bat\
showparams
.bat
D:\data\bat\showparams.bat
--a--------
2021/10/17 00:26
156
D:\data\bat\
showparams.bat
```

**从字符串中截取路径、文件名**

上面的部分解释了%~dp0，同时也知道了这些脚本参数指出扩展语法，如果是普通变量的话就不能使用扩展语法了，那么对于一个普通的包含字符串怎么才能使用扩展语法，截取到想要的部分呢？目前我知道的有两种方法：一种是传参使其变成脚本参数，也就是 %n的形式，另一种方法就是使用 for 语句，接下来分别看一下。

**脚本传参**

普通的字符串无法进行扩展，如果想把这种变量就需要把它们变成脚本参数，这就需要将参数传递给另一个脚本，这样实现起来会将脚本调用变得复杂一些，实际上可以在一个脚本中完成截取工作，类似于C/C++中的函数调用，可以在批处理中使用 call 命令搭配标签实现，具体代码如下：



```
Albert at home-pc in D:\data\bat [17:37:54]
% Get-Content extract1.bat
@echo off

set OriginStr="C:/Demo/myproject/example.txt"
echo %OriginStr%

call :extract %OriginStr%
goto :eof

:extract
rem 获取到文件路径
echo %~dp1
rem 获取到文件盘符
echo %~d1
rem 获取到文件名称
echo %~n1
rem 获取到文件后缀
echo %~x1

Albert at home-pc in D:\data\bat [17:41:25]
% .\extract1.bat
"C:/Demo/myproject/example.txt"
C:\Demo\myproject\
C:
example
.txt
```


在这段代码中 :eof 标签是一个默认的标签，表示文件结尾，实际需求中需根据具体要求进行调整。

**for语法扩展**

使用 for 循环是另一种实现方式，因为循环变量也可以支持扩展，可以将需要截取的字符串路径放在循环范围中，然后先循环输出测试下：

```
Albert at home-pc in D:\data\bat [17:46:29]
% Get-Content extract2.bat
@echo off

set OriginStr="C:/Demo/myproject/example.txt"

for %%I in (%OriginStr%) do echo %%I

Albert at home-pc in D:\data\bat [17:46:57]
% .\extract2.bat
"C:/Demo/myproject/example.txt"
```

在批处理中的循环变量是 %%I的形式，需要两个 % 才可以，后面的变量名可以换成26个字母中的任意一个，并且字母会区分大小写，然后利用这些循环变量就可以进行扩展，然后完成最开始的需求，实现代码如下：

```
Albert at home-pc in D:\data\bat [17:53:53]

% Get-Content extract2.bat
@echo off

set OriginStr="C:/Demo/myproject/example.txt"

for %%I in (%OriginStr%) do echo %%I

rem 获取到文件路径
for %%I in (%OriginStr%) do echo %%~dpI
rem 获取到文件盘符
for %%I in (%OriginStr%) do echo %%~dI
rem 获取到文件名称
for %%I in (%OriginStr%) do echo %%~nI
rem 获取到文件后缀
for %%I in (%OriginStr%) do echo %%~xI

Albert at home-pc in D:\data\bat [17:54:01]

% .\extract2.bat
"C:/Demo/myproject/example.txt"
C:\Demo\myproject\
C:
example
.txt
```


这种写法的好处就是无需控制标签跳转流程，通过循环命令 for 就可以获取想要的参数，使用起来会方便很多。

**总结**

* 在批处理文件中 %~dp0 表示批处理文件所在的目录，而 %cd% 表示执行命令时所在的目录
* 在批处理文件中想要截取目录操作可以使用变量扩展来实现，而变量必须是 %i 的形式，其中的 i 是可以是 a~zA~Z0~9
* for 表达式中的循环变量在cmd命令行中是 %i 的形式，而在批处理文件中需要协程 %%i 的形式
* 常用的变量扩展有：获取到文件盘符使用 %~d0，获取到文件名称使用 %~n0，获取到文件后缀使用 %~x0
  

## 10、替换字符串中包含百分号%的子串

**前言**
今天这篇总结是之前批处理替换字符串的延伸问题，同样来源于读者的提问，要处理的问题是被替换的子串中如果有百分号 % 要怎样替换，因为 % 在批处理脚本中也比较特殊，如果要想表示一个 % 字符，那么在给变量赋值时需要写成 %% 的样子，用两个表示一个，类似于进行转义，因为在批处理中， %开头的内容通常表示一个变量。

之前也处理过一些替换问题，列举如下，不过今天的问题需要新的解法。

《.bat批处理（六）：替换字符串中匹配的子串》
《.bat批处理（九）：替换带有等号=的字符串的子串》
问题示例

```shell
将字符串 https://blog.csdn.net/alb%3crtsh/articl%3c/d%3ctails/124760925 中的 %3c 替换成字母 e
```

问题比较明确，就是因为被替换的子串中包含了 % 导致常规的替换写法 %a:b=c% 的写法失效了。

**解决方法**

既然子串中包含 % 会影响变量替换字符串的写法，我们就可以考虑换一种变量写法，用 ! 代替 %，看到这很多人应该反应过来了，那就是启用延迟变量扩展，这个我就不展开说了，之前总结过，可以看一下这篇文章《.bat批处理（八）：各种形式的变量%0、%i、%%i、var、%var%、!var!的含义和区别》。

**示例代码**

```
@echo off
rem 将输入字符串中的%3c替换成字母e

SET INPUT_PARAM=%1
setlocal EnableDelayedExpansion

echo -
echo replace result is !INPUT_PARAM:%%3c=e!
echo -

pause
```


运行结果

```
D:\data\bat>replace%.bat https://blog.csdn.net/alb%3crtsh/articl%3c/d%3ctails/124760925
-
replace result is https://blog.csdn.net/albertsh/article/details/124760925
-
请按任意键继续. . .
```

**总结**

```shell
批处理脚本中的替换语法不仅可以写成 %a:b=c%，还可以写成 !a:b=c!的形式
批处理脚本执行机制是会按行执行，在执行之前会先预处理
开启延迟环境变量扩展setlocal enabledelayedexpansion，变量会在用到时再估值，不会预处理了
```

## 来源

学习来源：[(257条消息) Dos/bat_AlbertS的博客-CSDN博客](https://blog.csdn.net/albertsh/category_6454495.html)