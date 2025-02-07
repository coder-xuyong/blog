---
title: 多线程基础
icon: pen-to-square
date: 2023-06-02
lastUpdated: true
order: -1 
category:
  - java
tag:
  - java-basic
---

多线程基础

<!-- more -->
# 多线程

标签（空格分隔）： java

---
@[TOC](Java SE 多线程)
# 创建多线程的四种方式
## 继承 Thread 类
步骤：
① 用一个类继承 Thread 类，**重写 run() 方法**；run 方法中就是此线程需要执行的操作。
② 在需要用到的地方 **new** 一个 继承了 Thread 类的**子类的对象**，调用 start() 方法启动线程。start() 会调用 run()  方法中的代码。

```java
// ①
public class Test extends Thread{
	@Override
	public void run(){
       ......
	}
}
// ②
class Main{
	public static void main(String[] args){
		Test test = new Test();
		test.start();//只能调用start 方法 ，不能调用run，直接调用run()方法是和主线程一起共用一个线程，并没有开启一个线程。
	}
}
```
## 实现 Runnable 接口

1. 相比 Thread 的优势：
   ① 因为是接口，所以弥补了单继承的局限性。
   ② 节省资源，因为 Thread 每开启一个线程就需要new Test() ，也就是资源类。Runnable 可以只用new 一个 资源类。

2. 步骤：
   ① 用一个类实现 Runnable 接口，重写 run 方法。
   ② 在需要的地方创建上述类的子类，把创建的类放入 new Thread（子类）中，调用 start 方法。
```java
public class Test implements Runnable {
	@Override
	public void run(){
		……
	}
}
class Main {
	public static void main(String[] args){
		Test test = new Test();
		new Thread(test).start();
	}
}
```
## 实现 Callable 接口 （JDK5.0 新增）

1. 诞生原因（优势）：Callable 接口的方式比 Rannable 接口的方式更强大：因为 call() 可以有返回值、可以抛出异常，Callable 还支持泛型。
2. 步骤：和 Runnable 差不多，只是 void -> Object（可变）、run -> call 、有 return Object、需要将资源类 放入 FutrueTask() 中，再放入 Thread 中。

```java
public class Test implements Callable{
	@Override
	public Object call() thorws Exception {
		……
		return Object;
	}
}
class Main{
	public static void main(String[] args){
		Test test= new Test();
		FutureTask futureTask = new FutureTask(test);
		new Thread(futureTask).start();
		
		try{
			Object obj = futureTast.get();//获取返回值的方式
		}catch(ExecutionException e ){
			e.printStackTrace();
		}
```
## 线程池

1. 优势：
   ① 提高了响应速度（减少了创建新线程的时间）。
   ② 降低资源消耗 （重复利用线程池中线程，不需要每次都创建）
   ③ 便于线程管理，里面设有各种参数，如最大线程数、核心池大小、线程没有任务时会保存多久终止等。暂时了解到这里，有兴趣的看一下源码就明白了。

```java
class Test implements Runnable {// 也可以用 Callable
	@Override
	public void run(){
		……
	}
}
class Main {
	public static void main(String[] args){
		ExecutorService servie = Executors.newFixedThreadPool(10);//参数表示 线程的最大数量 
		ThreadPoolExecutor service1 = (ThreadPoolExecutor) servie;
		service.execute(new Test());// 适用于 Runnable
		service.submit(Callable callable);// 适用于 Callable
		service.shutdown();// 关闭连接池
	}
}
```
# 线程的 常用方法 和 生命周期

1. 常用方法：
 ```java
 测试Thread中的常用方法：
1. start():启动当前线程；调用当前线程的run()
2. run(): 通常需要重写Thread类中的此方法，将创建的线程要执行的操作声明在此方法中
3. currentThread():静态方法，返回执行当前代码的线程
4. getName():获取当前线程的名字
5. setName():设置当前线程的名字
6. yield():释放当前cpu的执行权，执行机会让给相同或者更高优先级的线程。
7. join():在线程a中调用线程b的join(),此时线程a就进入阻塞状态，直到线程b完全执行完以后，线程a才
          结束阻塞状态。
8. stop():已过时。当执行此方法时，强制结束当前线程。
9. sleep(long millitime):让当前线程“睡眠”指定的millitime毫秒。在指定的millitime毫秒时间内，当前
                         线程是阻塞状态，不释放锁。
10. isAlive():判断当前线程是否存活

线程的优先级：
1.
MAX_PRIORITY：10
 MIN _PRIORITY：1
NORM_PRIORITY：5  -->默认优先级
2.如何获取和设置当前线程的优先级：
  getPriority():获取线程的优先级
  setPriority(int p):设置线程的优先级
  说明：高优先级的线程要抢占低优先级线程cpu的执行权。但是只是从概率上讲，高优先级的线程高概率的情况下
  被执行。并不意味着只有当高优先级的线程执行完以后，低优先级的线程才执行。
 ```



2. 生命周期
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/d5d740b78c774b7193c43d45ec8ad485.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5LqM54i3Lg==,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

① 就绪状态（Runnable）：该状态的线程位于可运行的线程池中，**等待获取 CPU 的使用权。**
② 运行状态（Running）：就绪状态获取了 CPU ，执行代码。
③ 阻塞状态（Blocked）：因为某种原因放弃 CPU 的使用权，暂时停止运行。阻塞状态分三种：
（一）等待阻塞（wait）：运行的线程执行 wait 方法，JVM 会把该线程放入等待池中。（**wait 会释放持有的锁**）。
（二）同步阻塞：运行的线程在获取对象的同步锁时，若该同步锁被别的线程占用了，则JVM 会把该线程放入锁池中。
（三）其他阻塞：运行的线程执行 sleep、join 方法或者发出了 I/O 请求时，JVM 会把该线程设置为阻塞状态。当 sleep 状态超时、join 等待线程终止或者超时、或者 I/O 处理完毕时，线程重新转入就绪状态。（注意：**sleep 是不会释放持有锁**）



# 锁（synchronized、Lock：JDK5.0）
## synchronized
1. 介绍：synchronized 是 Java 的关键字，用来给**对象**、**方法**、**代码块**、**类**加锁；当他锁定一个方法或者一个代码块时，同一时刻最多只能有一个线程执行这段代码。它是解决线程安全问题的方式之一。
2. 看个例子：说买票过程中，出现了重票、错票，也就是线程安全问题，那怎么解决呢？
   ① 分析原因：两个线程操作了同一张票，导致了重票。
   ② 解决方法：也就是说，每卖一张票，只能有一个线程去操作，其他的线程必须等待。代码如下：
 ```java
class Window implements Runnable{
	private int ticket = 100;//卖一百张票；不要想把这里改为 static 会有用，两个线程同时操作一张票（此时没有加 synchronized）是指，线程一 还没有执行到 ticket--，线程二已经到了输出语句。
	@Override
	public void run(){
		while(true){
			synchronized(this){//此时的 this 是唯一的 Window 对象（加锁）；也可以用其他对象
				if(ticket > 0){
					System.out.println(Thread.currentThread().getName() + ":卖票，票号为：" + ticket);
					ticket--;
				}else{
					break;
				}
			}
		}
	}
}
public class Main{
	public static void main(String[] args){
		Window w = new Window();
		Thread t1 = new Thread(w);
		Thread t2 = new Thread(w);
		t1.setName("窗口1");
		t2.setName("窗口2");
		t1.start();
		t2.start();
	}
		
 ```
③ 上述代码的 synchronized 是放在代码块的，此时称为 **同步代码块**，我们也可以把它放在方法上，run 去调用这个方法就行了，此时称为 **同步方法**（**多用这个**） 其实差不多，看下代码：
```java
class Window implements Runnable{
//局部 run()
	public void run(){while(true){show();}}
//同步方法
	private synchronized void show(){//此时锁的对象是调用 show() 的 对象，也就是 Window
		if(ticket > 0)……
	}
}
```
## Lock 接口：JDK5.0新增
1. 介绍：Lock 锁比 synchronized 要灵活一些；前者需要手动启动 （lock()），同步结束也需要手动释放锁（unlock()）；后者在执行完相应同步代码后，自动释放同步监视器（锁）。因此 **Lock 多用在同步代码块**，此时已经进入了方法体，分配了相应资源。
2. 步骤：① 先 new 一个实现了 Lock 接口的类的 对象，也就是 ReentrantLock；② 就是上锁，位置和 synchronized 差不多；只需要最后得 释放锁，因此一般用 lock 都在 try- finally 里面。

 ```java
class Window implements Runnable{
	private int ticket = 100;
	private ReentrantLock lock = new ReentrantLock();
	@Override
	public void run(){
		while(true){
			try{
				lock.lock();
				if(ticket > 0){
					System.out.println(Thread.currentThread().getName() + "：售票，票号为：" + ticket);
					ticket--;
				}else{
				break;
				}
			}finally{
			lock.unlock();
			}
		}
	}
public class Main{
	public static void main(String[] args){
		Window w = new Window();
		Thread t1 = new Thread(w);
		Thread t2 = new Thread(w);
		t1.setName("窗口1");
		t2.setName("窗口2");
		t1.start();
		t2.start();
   		}
   	}
 ```
# 死锁
1. 介绍：是指多个线程在运行过程中，因争夺资源而造成的一种僵局，当处于这种僵持状态时，若无外力作用，他们都无法再向前推进。最简单的就是：不同的线程占用对方需要的同步资源不放弃，都在等着对方放弃自己需要的同步资源，就形成了死锁；而且不会有异常，不会提示，只是所有线程都处于阻塞状态，无法继续。通俗来讲就是，你绑了他老婆，他绑了你老婆，但是你和他都在等待对方放了自己的老婆，僵持。
2. 先看个例子：
```java 
public class DeadLock{
	public static void main(String[] args){
		StringBuffer s1 = new StringBuffer();// 拿来当锁用
		StringBuffer s2 = new StringBuffer();// 拿来当锁用
		new Thread(){
			@Override
			public void run(){
				synchronized(s1){
					s1.append("a");
					s2.append("1");
					synchronized(s2){// 执行到这里时，s2 已经被 下面一个线程 占用
						s1.append("b");
						s2.append("2");
						System.out.println(s1);
                        System.out.println(s2);
                    }
               }
           }
       }.start();
       
       new Thread(){
			@Override
			public void run(){
				synchronized(s2){
					s1.append("c");
					s2.append("3");
					synchronized(s1){// 这里又被上面 线程 占用，僵持了
						s1.append("d");
						s2.append("4");
						System.out.println(s1);
                        System.out.println(s2);
                    }
               }
           }
       }.start();
       }
  }
```
## 死锁产生的原因
前置知识：系统中资源可以分为两类：可剥夺资源 和 不可剥夺资源
① 可剥夺资源：是指在某线程获得这类资源后，该资源还可以被其他线程或者系统剥夺，CPU 和 主存均属于可剥夺性资源。
② 不可剥夺资源：当系统把这类资源分配给某进程后，再不能强行收回，只能在进程用完后释放；如打印机。
**产生死锁的原因如下：**
1. 竞争资源：
   ① 竞争不可剥夺资源；如系统中只有一台打印机R1和一台磁带机R2，可供进程P1和P2共享。假定P1已占用了打印机R1，P2已占用了磁带机R2，若P2继续要求打印机R1，P2将阻塞；P1若又要求磁带机R2，P1也将阻塞。于是，在P1和P2之间就形成了僵局，两个进程都在等待对方释放自己所需要的资源，但是它们又都因不能继续获得自己所需要的资源而不能继续推进，从而也不能释放自己所占有的资源，以致进入死锁状态。

② 竞争临时资源：通常消息通信顺序进行不当，则会产生死锁。
2. 进程推进顺序非法：
   若P1保持了资源R1,P2保持了资源R2，系统处于不安全状态，因为这两个进程再向前推进，便可能发生死锁。例如，当P1运行到P1：Request（R2）时，将因R2已被P2占用而阻塞；当P2运行到P2：Request（R1）时，也将因R1已被P1占用而阻塞，于是发生进程死锁。

## 死锁产生的四个必要条件？
1. 互斥条件：线程要求对所分配的资源进行排它性控制，即在一段时间内某一资源仅为一个线程锁占用。
2. 请求并保持条件：当线程因请求资源而阻塞，对已获得的资源保持不放。
3. 不剥夺条件：进程已获得的资源在未使用完之前，不能剥夺，只能在使用完时自己释放。
4. 环路等待条件：在发生死锁时，必然存在一个进程---资源的环形链。环路上的每个进程都在等待下一个进程占有的资源。

## 如何防止死锁？
① 破坏四个必要条件；② 预防死锁（有相关算法，这里暂不讨论）
1. 破坏互斥条件：如果允许系统资源**都能共享使用**，则系统不会进入死锁状态。
2. 破坏请求条件并保持条件：采用预先静态预分配，即进程运行前一次性申请完它所需要的物资，在物资为满足前，不能投入运行；一旦运行后，这些物资就一直归他所有，也不再发出其他物资请求。
3. 破坏不可剥夺条件：当一个保持了某些不可剥夺资源的进程，请求新的资源没有办法满足时，**它必须释放已经保持的所有资源，待以后需要时在重新申请。**
4. 破坏环路等待条件：采用顺序资源分配法。首先给系统中的资源编号，规定每个进程必须按编号递增的顺序请求资源，同类资源一次申请完。

# 线程的通信
线程的通信涉及到三个方法
```java
wait()：一旦执行此方法，当前线程就进入阻塞状态，并释放同步监视器（锁）。
notify()：一旦执行此方法，就会唤醒被 wait 的线程。如果有多个线程被 wait ，就换醒优先级最高的那个。
notifyAll()：一旦执行此方法，就会唤醒所有被 wait 的线程。
说明：
这三个方法是定义在 java.lang.Object 类中；
必须使用在同步代码块或同步方法中；
它们的调用者必须是同步代码块或同步方法中的同步监视器。
```
看个线程通信的例子：使用两个线程打印 1-100。线程一，线程二 交替打印。
```java
public class Main {
    public static void main(String[] args) {
        Number number = new Number();
        Thread t1 = new Thread(number);
        Thread t2 = new Thread(number);
        t1.setName("线程一");
        t2.setName("线程二");
        t1.start();
        t2.start();
    }

    static class Number implements Runnable {
        private int num = 1;
        private Object obj = new Object();// 拿来当锁

        @Override
        public void run() {
            while (true) {
                synchronized (obj) {
                    obj.notify();
                    if (num <= 100) {
                        System.out.println(Thread.currentThread().getName() + ":" + num++);
                        try {
                            obj.wait();//线程一 num++ 后 必须刹一脚； 上面线程二 进来又唤醒 线程一。
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    } else {
                        break;
                    }
                }
            }
        }
    }
}	
```
# 线程通信应用
必须掌握的经典例子：生产者 / 消费者 问题。
问题：生产者（Productor）将产品交给店员（clerk），而消费者（Customer）从店员哪里取走产品，店员一次只能持有固定数量的产品（如：20），如果生产者试图生产更多的产品，店员会叫生产者停一下，如果店中有空位放产品了再通知生产者生产；如果店中没有产品了，店员会告诉消费者等一下，如果店中有产品了在通知消费者来取走产品。
```java
class Clerk{// 共享数据（店员/产品）

    private int productCount = 0;
    //生产产品
    public synchronized void produceProduct() {

        if(productCount < 20){
            productCount++;
            System.out.println(Thread.currentThread().getName() + ":开始生产第" + productCount + "个产品");

            notify();

        }else{
            //等待
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }
    //消费产品
    public synchronized void consumeProduct() {
        if(productCount > 0){
            System.out.println(Thread.currentThread().getName() + ":开始消费第" + productCount + "个产品");
            productCount--;

            notify();
        }else{
            //等待
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }
}

class Producer extends Thread{//生产者

    private Clerk clerk;

    public Producer(Clerk clerk) {
        this.clerk = clerk;
    }

    @Override
    public void run() {
        System.out.println(getName() + ":开始生产产品.....");

        while(true){

            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            clerk.produceProduct();
        }

    }
}

class Consumer extends Thread{//消费者
    private Clerk clerk;

    public Consumer(Clerk clerk) {
        this.clerk = clerk;
    }

    @Override
    public void run() {
        System.out.println(getName() + ":开始消费产品.....");

        while(true){

            try {
                Thread.sleep(20);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            clerk.consumeProduct();
        }
    }
}

public class ProductTest {

    public static void main(String[] args) {
        Clerk clerk = new Clerk();

        Producer p1 = new Producer(clerk);
        p1.setName("生产者1");

        Consumer c1 = new Consumer(clerk);
        c1.setName("消费者1");
        Consumer c2 = new Consumer(clerk);
        c2.setName("消费者2");

        p1.start();
        c1.start();
        c2.start();

    }
} 
```
# 相关面试题
## sleep() 和 wait()的异同？
1. 相同点：都可以使当前的进程进入阻塞状态。
2. 不同点：
   ① 声明位置不同：Thread 类中声明 sleep() ，Object 类中声明 wait()。
   ② 调用的要求不同：sleep() 可以在任何需要的场景调用。wait() 必须使用在同步代码块或同步方法中。
   ③ 关于是否释放同步监视器（锁）：如果两个方法都使用在同步代码块或同步方法中，sleep() 不会释放锁，wait() 会释放锁。
## synchronized 与 Lock的异同？
1.  相同：二者都可以解决线程安全问题
2. 不同：synchronized机制在执行完相应的同步代码以后，自动的释放同步监视器，Lock需要手动的启动同步（lock()），同时结束同步也需要手动的实现（unlock()）





**参考：**[https://www.bilibili.com/video/BV1Kb411W75N](https://www.bilibili.com/video/BV1Kb411W75N)，[https://blog.csdn.net/Amosstan/article/details/120161969](https://blog.csdn.net/Amosstan/article/details/120161969)，[https://blog.csdn.net/hd12370/article/details/82814348](https://blog.csdn.net/hd12370/article/details/82814348)