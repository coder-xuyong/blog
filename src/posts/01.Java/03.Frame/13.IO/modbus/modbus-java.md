---
title: java 整合 modbus
# icon: pen-to-square
date: 2025-06-22
lastUpdated: true
category:
  - java
tag:
  - modbus
permalinkPattern: :year/:month/:day/:slug.html
---

## 配置 maven 依赖

```xml
<dependency>
    <groupId>com.infiniteautomation</groupId>
    <artifactId>modbus4j</artifactId>
    <version>3.1.0</version>
</dependency>
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
</dependency>
```

## ModbusServer

```java
@Slf4j
public class ModbusServer {

    public static void main(String[] args) {
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(1, 5, 500, TimeUnit.MILLISECONDS,
                new LinkedBlockingQueue<Runnable>(),
                Executors.defaultThreadFactory(),
                new ThreadPoolExecutor.AbortPolicy());
        threadPoolExecutor.execute(new Handler());
        try {
            boolean flag = threadPoolExecutor.awaitTermination(5, TimeUnit.SECONDS);
            if (flag){
                log.info("线程池关闭成功");
            }
        } catch (InterruptedException e) {
            log.error("线程池关闭异常：{}",e.toString());
            e.printStackTrace();
        }
    }

    public static TcpSlave initModbusServer() {
        TcpSlave tcpSlave = new TcpSlave(502, false);
        BasicProcessImage pImg = new BasicProcessImage(1);
        //线圈 PLC的输出位，开关量，在Modbus中可读可写
        pImg.setCoil(0, false);
        //离散量 PLC的输入位，开关量，在Modbus中只读
        pImg.setInput(1, false);
        //输入寄存器 PLC中只能从模拟量输入端改变的寄存器，在Modbus中只读
        pImg.setInputRegister(2, (short) 0);
        //保存寄存器 PLC中用于输出模拟量信号的寄存器，在Modbus中可读可写
        pImg.setHoldingRegister(3, (short) 0);
        // 此为 server 设置的值
        pImg.setNumeric(RegisterRange.HOLDING_REGISTER, 4, DataType.TWO_BYTE_INT_UNSIGNED_SWAPPED, 10086);
        tcpSlave.addProcessImage(pImg);
        return tcpSlave;
    }

    @Slf4j
    static class Handler implements Runnable {

        @Override
        public void run() {
            try {
                log.info("modbus tcp server initial start!");
                ModbusServer.initModbusServer().start();
            } catch (ModbusInitException e) {
                e.printStackTrace();
            }
        }
    }
}
```

## ModbusClient

```java
@Slf4j
public class ModbusClient {
    public static void main(String[] args) throws Exception {
        IpParameters params = new IpParameters();
        params.setHost("localhost");
        params.setPort(502);

        ModbusMaster master = new ModbusFactory().createTcpMaster(params, false);
        master.init();

        log.info("测试连接结果：{}", master.testSlaveNode(1) ? "成功": "失败");

        // Define the point locator.
        BaseLocator<Number> loc = BaseLocator.holdingRegister(1, 4, DataType.TWO_BYTE_INT_UNSIGNED_SWAPPED);
        // Get the point value
        log.info("获取slaveId：{}，offset：{} 的结果为：{}", 1, 4, master.getValue(loc));

         //Set the point value
        master.setValue(loc, 10000);
        log.info("获取slaveId：{}，offset：{} 修改后的结果为：{}", 1, 4, master.getValue(loc));

    }
}
```