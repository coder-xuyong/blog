---
title: java 整合 modbus
# icon: pen-to-square
date: 2025-06-22
lastUpdated: true
order: 2
category:
  - java
tag:
  - modbus
permalinkPattern: :year/:month/:day/:slug.html
---

## 整合 modbus 小 demo

### 配置 maven 依赖

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

### ModbusServer

```java
@Slf4j
public class ModbusServer {

    public static void main(String[] args) {
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(1, 5, 500, TimeUnit.MILLISECONDS,
                new LinkedBlockingQueue<Runnable>(),
                Executors.defaultThreadFactory(),
                new ThreadPoolExecutor.AbortPolicy());
        threadPoolExecutor.execute(new Handler());
        // try {
        //     boolean flag = threadPoolExecutor.awaitTermination(5, TimeUnit.SECONDS);
        //     if (flag){
        //         log.info("线程池关闭成功");
        //     }
        // } catch (InterruptedException e) {
        //     log.error("线程池关闭异常：{}",e.toString());
        //     e.printStackTrace();
        // }
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

### ModbusClient

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

## ModbusReadUtils

```java
@Slf4j
public class ModbusReadUtils {

    /**
     * 工厂。
     */
    static ModbusFactory modbusFactory;

    static {
        if (modbusFactory == null) {
            modbusFactory = new ModbusFactory();
        }
    }

    /**
     * 获取master
     *
     * @return
     * @throws ModbusInitException
     */
    public static ModbusMaster getMaster(String host, Integer port, Boolean isRtu) throws ModbusInitException {
        IpParameters params = new IpParameters();
        params.setHost(host);
        params.setPort(port);
        params.setEncapsulated(isRtu);//这个属性确定了协议帧是否是通过tcp封装的RTU结构，采用modbus tcp/ip时，要设为false, 采用modbus rtu over tcp/ip时，要设为true
        //
        // modbusFactory.createRtuMaster(wapper); //RTU 协议
        // modbusFactory.createUdpMaster(params);//UDP 协议
        // modbusFactory.createAsciiMaster(wrapper);//ASCII 协议
        ModbusMaster master = modbusFactory.createTcpMaster(params, true);// TCP 协议
        master.setTimeout(3000);
        master.setRetries(3);
        master.init();

        return master;
    }

    /**
     * 读取[01 Coil Status 0x]类型 开关数据
     *
     * @param slaveId slaveId
     * @param offset  位置
     * @return 读取值
     * @throws ModbusTransportException 异常
     * @throws ErrorResponseException   异常
     * @throws ModbusInitException      异常
     */
    public static Boolean readCoilStatus(String host, Integer port, int slaveId, int offset)
            throws ModbusTransportException, ErrorResponseException, ModbusInitException {
        // 01 Coil Status
        BaseLocator<Boolean> loc = BaseLocator.coilStatus(slaveId, offset);
        Boolean value = getMaster(host, port, false).getValue(loc);
        return value;
    }

    /**
     * 读取[02 Input Status 1x]类型 开关数据
     *
     * @param slaveId
     * @param offset
     * @return
     * @throws ModbusTransportException
     * @throws ErrorResponseException
     * @throws ModbusInitException
     */
    public static Boolean readInputStatus(String host, Integer port, int slaveId, int offset)
            throws ModbusTransportException, ErrorResponseException, ModbusInitException {
        // 02 Input Status
        BaseLocator<Boolean> loc = BaseLocator.inputStatus(slaveId, offset);
        Boolean value = getMaster(host, port, false).getValue(loc);
        return value;
    }

    /**
     * 读取[03 Holding Register类型 2x]模拟量数据
     *
     * @param slaveId  slave Id
     * @param offset   位置
     * @param dataType 数据类型,来自com.serotonin.modbus4j.code.DataType
     * @return
     * @throws ModbusTransportException 异常
     * @throws ErrorResponseException   异常
     * @throws ModbusInitException      异常
     */
    public static Number readHoldingRegister(String host, Integer port, Boolean isRtu, int slaveId, int offset, int dataType)
            throws ModbusTransportException, ErrorResponseException, ModbusInitException {
        // 03 Holding Register类型数据读取
        BaseLocator<Number> loc = BaseLocator.holdingRegister(slaveId, offset, dataType);
        ModbusMaster master = getMaster(host, port, isRtu);
        Number value = master.getValue(loc);
        if (!ObjectUtils.isEmpty(master)) {
            master.destroy();
        }
        return value;
    }

    /**
     * 读取[03 Holding Register类型 2x]模拟量数据
     *
     * @param master   读取客户端
     * @param slaveId  slave Id
     * @param offset   位置
     * @param dataType 数据类型,来自com.serotonin.modbus4j.code.DataType
     * @return
     * @throws ModbusTransportException 异常
     * @throws ErrorResponseException   异常
     * @throws ModbusInitException      异常
     */
    public static Number readHoldingRegister(ModbusMaster master, int slaveId, int offset, int dataType)
            throws ModbusTransportException, ErrorResponseException, ModbusInitException {
        // 03 Holding Register类型数据读取
        BaseLocator<Number> loc = BaseLocator.holdingRegister(slaveId, offset, dataType);
        Number value = master.getValue(loc);
        return value;
    }


    /**
     * 读取[04 Input Registers 3x]类型 模拟量数据
     *
     * @param slaveId  slaveId
     * @param offset   位置
     * @param dataType 数据类型,来自com.serotonin.modbus4j.code.DataType
     * @return 返回结果
     * @throws ModbusTransportException 异常
     * @throws ErrorResponseException   异常
     * @throws ModbusInitException      异常
     */
    public static Number readInputRegisters(String host, Integer port, Boolean isRtu, int slaveId, int offset, int dataType)
            throws ModbusTransportException, ErrorResponseException, ModbusInitException {
        // 04 Input Registers类型数据读取
        BaseLocator<Number> loc = BaseLocator.inputRegister(slaveId, offset, dataType);
        ModbusMaster master = getMaster(host, port, isRtu);
        Number value = master.getValue(loc);
        if (!ObjectUtils.isEmpty(master)) {
            master.destroy();
        }
        return value;
    }

    /**
     * 读取[04 Input Registers 3x]类型 模拟量数据
     *
     * @param master   读取客户端
     * @param slaveId  slaveId
     * @param offset   位置
     * @param dataType 数据类型,来自com.serotonin.modbus4j.code.DataType
     * @return 返回结果
     * @throws ModbusTransportException 异常
     * @throws ErrorResponseException   异常
     * @throws ModbusInitException      异常
     */
    public static Number readInputRegisters(ModbusMaster master, int slaveId, int offset, int dataType)
            throws ModbusTransportException, ErrorResponseException, ModbusInitException {
        // 04 Input Registers类型数据读取
        BaseLocator<Number> loc = BaseLocator.inputRegister(slaveId, offset, dataType);
        Number value = master.getValue(loc);

        return value;
    }

    /**
     * 批量读取使用方法
     *
     * @throws ModbusTransportException
     * @throws ErrorResponseException
     * @throws ModbusInitException
     */
    public static void batchRead(String host, Integer port) throws ModbusTransportException, ErrorResponseException, ModbusInitException {

        BatchRead<Integer> batch = new BatchRead<Integer>();

        batch.addLocator(0, BaseLocator.holdingRegister(1, 1, DataType.FOUR_BYTE_FLOAT));
        batch.addLocator(1, BaseLocator.inputStatus(1, 0));

        ModbusMaster master = getMaster(host, port, false);

        batch.setContiguousRequests(false);
        BatchResults<Integer> results = master.send(batch);
    }

    /**
     * 批量读取使用方法
     *
     * @throws ModbusTransportException
     * @throws ErrorResponseException
     * @throws ModbusInitException
     */
    public static void batchRead(ModbusMaster master) throws ModbusTransportException, ErrorResponseException, ModbusInitException {

        BatchRead<Integer> batch = new BatchRead<Integer>();

        batch.addLocator(0, BaseLocator.holdingRegister(1, 1, DataType.FOUR_BYTE_FLOAT));
        batch.addLocator(1, BaseLocator.inputStatus(1, 0));

        batch.setContiguousRequests(false);
        BatchResults<Integer> results = master.send(batch);
    }

    /**
     * 测试
     *
     * @param args
     */
    public static void main(String[] args) {
        try {
            ModbusMaster master = getMaster("127.0.0.1", 502, false);
//            BigInteger number1 = (BigInteger) readCustomeHoldingRegister(master, 1, 0, 10);
            ReadHoldingRegistersRequest request = new ReadHoldingRegistersRequest(1, 0, 5);
            //Response: 00 01 00 00 00 0B 01 03 08 FA 5F A9 68 91 01 00 00
            //Response: 00 01 00 00 00 0D 01 03 0A FA 5F A9 68 91 01 00 00 6F 00
            ReadHoldingRegistersResponse response = (ReadHoldingRegistersResponse) master.send(request);
            byte[] data = response.getData();
            System.out.println(response);

//            Float number = (Float)readHoldingRegister("127.0.0.1", 502, 1, 398, 8);
//            System.out.println(number);
//            float aFloat = ByteBuffer.wrap(ByteUtils.toBytes(number)).order(ByteOrder.BIG_ENDIAN).getFloat();
//            System.out.println(aFloat);
//            Double number1 = (Double) readHoldingRegister("127.0.0.1", 502, 1, 494, 14);
//            System.out.println(number1);
//            Double aFloat1 = ByteBuffer.wrap(ByteUtils.toBytes(number1)).order(ByteOrder.BIG_ENDIAN).getDouble();
//            System.out.println(aFloat1);
//
//
//
//            Integer number2 = (Integer) readHoldingRegister("127.0.0.1", 502, 1, 594, 5);
//            System.out.println(number2);
//            Integer aFloat2 = ByteBuffer.wrap(ByteUtils.toBytes(number2)).order(ByteOrder.BIG_ENDIAN).getInt();
//            System.out.println(aFloat2);
//
//
//
//            Long number3 = (Long) readHoldingRegister("127.0.0.1", 502, 1, 596, 4);
//            System.out.println(number3.intValue());
//            Integer aFloat3 = ByteBuffer.wrap(ByteUtils.toBytes(number3)).order(ByteOrder.BIG_ENDIAN).getInt();
//            ModbusWriteUtils.writeHoldingRegister("127.0.0.1", 502, 1, 598, number3,4);
//            System.out.println(aFloat3);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static BigInteger fromLittleEndian(byte[] littleEndianBytes) {
        byte[] bigEndianBytes = toLittleEndian(littleEndianBytes); // 先转回大端字节数组
        return new BigInteger(bigEndianBytes);
    }

    static byte[] toLittleEndian(byte[] bigEndianBytes) {
        byte[] littleEndianBytes = new byte[bigEndianBytes.length];
        for (int i = 0; i < bigEndianBytes.length; i++) {
            littleEndianBytes[i] = bigEndianBytes[bigEndianBytes.length - 1 - i];
        }
        return littleEndianBytes;
    }
}

```

## ModbusWriteUtils

```java
@Slf4j
public class ModbusWriteUtils {

    /**
     * 工厂。
     */
    static ModbusFactory modbusFactory;

    static {
        if (modbusFactory == null) {
            modbusFactory = new ModbusFactory();
        }
    }

    /**
     * 获取tcpMaster
     *
     * @return
     * @throws ModbusInitException
     */
    public static ModbusMaster getMaster(String host, Integer port,Boolean isRtu) throws ModbusInitException {
        IpParameters params = new IpParameters();
        params.setHost(host);
        params.setPort(port);
        params.setEncapsulated(isRtu);
        ModbusMaster tcpMaster = modbusFactory.createTcpMaster(params, true);
        tcpMaster.setTimeout(3000);
        tcpMaster.setRetries(3);
        tcpMaster.init();

        return tcpMaster;
    }

    /**
     * 写 [01 Coil Status(0x)]写一个 function ID = 5
     *
     * @param slaveId     slave的ID
     * @param writeOffset 位置
     * @param writeValue  值
     * @return 是否写入成功
     * @throws ModbusTransportException
     * @throws ModbusInitException
     */
    public static boolean writeCoil(String host, Integer port, int slaveId, int writeOffset, boolean writeValue)
            throws ModbusTransportException, ModbusInitException {
        // 获取master
        ModbusMaster tcpMaster = getMaster(host, port,false);
        // 创建请求
        WriteCoilRequest request = new WriteCoilRequest(slaveId, writeOffset, writeValue);
        // 发送请求并获取响应对象
        WriteCoilResponse response = (WriteCoilResponse) tcpMaster.send(request);
        if (response.isException()) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 写[01 Coil Status(0x)] 写多个 function ID = 15
     *
     * @param slaveId     slaveId
     * @param startOffset 开始位置
     * @param bdata       写入的数据
     * @return 是否写入成功
     * @throws ModbusTransportException
     * @throws ModbusInitException
     */
    public static boolean writeCoils(String host, Integer port, int slaveId, int startOffset, boolean[] bdata)
            throws ModbusTransportException, ModbusInitException {
        // 获取master
        ModbusMaster tcpMaster = getMaster(host, port,false);
        // 创建请求
        WriteCoilsRequest request = new WriteCoilsRequest(slaveId, startOffset, bdata);
        // 发送请求并获取响应对象
        WriteCoilsResponse response = (WriteCoilsResponse) tcpMaster.send(request);
        if (response.isException()) {
            return false;
        } else {
            return true;
        }

    }

    /***
     * 写[03 Holding Register(4x)] 写一个 function ID = 6
     *
     * @param slaveId
     * @param writeOffset
     * @param writeValue
     * @return
     * @throws ModbusTransportException
     * @throws ModbusInitException
     */
    public static boolean writeRegister(String host, Integer port, int slaveId, int writeOffset, short writeValue)
            throws ModbusTransportException, ModbusInitException {
        // 获取master
        ModbusMaster tcpMaster = getMaster(host, port,false);
        // 创建请求对象
        WriteRegisterRequest request = new WriteRegisterRequest(slaveId, writeOffset, writeValue);
        WriteRegisterResponse response = (WriteRegisterResponse) tcpMaster.send(request);
        if (response.isException()) {
            log.error("错误信息 {} {} {}", response.getExceptionMessage(), response.getWriteOffset(), response.getWriteValue());
            return false;
        } else {
            return true;
        }

    }

    /**
     * 写入[03 Holding Register(4x)]写多个 function ID=16
     *
     * @param slaveId     modbus的slaveID
     * @param startOffset 起始位置偏移量值
     * @param sdata       写入的数据
     * @return 返回是否写入成功
     * @throws ModbusTransportException
     * @throws ModbusInitException
     */
    public static boolean writeRegisters(String host, Integer port, int slaveId, int startOffset, short[] sdata)
            throws ModbusTransportException, ModbusInitException {
        // 获取master
        ModbusMaster tcpMaster = getMaster(host, port,false);
        log.info("host {}  port {} ", host, port);
        // 创建请求对象
        WriteRegistersRequest request = new WriteRegistersRequest(slaveId, startOffset, sdata);
        // 发送请求并获取响应对象
        ModbusResponse response = tcpMaster.send(request);
        if (response.isException()) {
            log.error("发送失败 {}", response.getExceptionMessage());
            return false;
        } else {
            return true;
        }
    }

    /**
     * 写入数字类型的模拟量（如:写入Float类型的模拟量、Double类型模拟量、整数类型Short、Integer、Long）
     *
     * @param slaveId
     * @param offset
     * @param value    写入值,Number的子类,例如写入Float浮点类型,Double双精度类型,以及整型short,int,long
     * @param dataType ,com.serotonin.modbus4j.code.DataType
     * @throws ModbusTransportException
     * @throws ErrorResponseException
     * @throws ModbusInitException
     */
    public static void writeHoldingRegister(String host, Integer port, Boolean isRtu,int slaveId, int offset, Number value, int dataType)
            throws ModbusTransportException, ErrorResponseException, ModbusInitException {
        // 获取master
        ModbusMaster tcpMaster = getMaster(host, port,isRtu);
        // 类型
        log.info("Modbus 数据写入中ip {} port{} slaveId {} offset {} value {} dataType {}", host, port, slaveId, offset, value, dataType);
        BaseLocator<Number> locator = BaseLocator.holdingRegister(slaveId, offset, dataType);
        log.info(JSONUtils.toJSONString(locator));
        tcpMaster.setValue(locator, value);
        if (!ObjectUtils.isEmpty(tcpMaster)){
            tcpMaster.destroy();
        }
    }

    /**
     * 写入数字类型的模拟量（如:写入Float类型的模拟量、Double类型模拟量、整数类型Short、Integer、Long）
     *
     * @param slaveId
     * @param offset
     * @param value    写入值,Number的子类,例如写入Float浮点类型,Double双精度类型,以及整型short,int,long
     * @param dataType ,com.serotonin.modbus4j.code.DataType
     * @throws ModbusTransportException
     * @throws ErrorResponseException
     * @throws ModbusInitException
     */
    public static void writeHoldingRegister(ModbusMaster master, int slaveId, int offset, Number value, int dataType)
            throws ModbusTransportException, ErrorResponseException, ModbusInitException {
        // 类型
        log.info("Modbus 数据写入中 slaveId {} offset {} value {} dataType {}", slaveId, offset, value, dataType);
        BaseLocator<Number> locator = BaseLocator.holdingRegister(slaveId, offset, dataType);
        log.info(JSONUtils.toJSONString(locator));
        master.setValue(locator, value);
    }

    public static void main(String[] args) {
        try {
            //@formatter:off
            // 测试01
//			boolean t01 = writeCoil(1, 0, true);
//			System.out.println("T01:" + t01);

            // 测试02
//			boolean t02 = writeCoils(1, 0, new boolean[] { true, false, true });
//			System.out.println("T02:" + t02);

            // 测试03
//			short v = -3;
//			boolean t03 = writeRegister(1, 0, v);
//			System.out.println("T03:" + t03);
            // 测试04
//			boolean t04 = writeRegisters(1, 0, new short[] { -3, 3, 9 });
//			System.out.println("t04:" + t04);
            //写模拟量
            for (int i = 0; i < 103; i++) {
                int i1 = new Random().nextInt(103 - 0) + 0;
                writeHoldingRegister("127.0.0.1", 504,false, 1, 0, i, DataType.TWO_BYTE_INT_SIGNED);
            }

            //@formatter:on
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
```