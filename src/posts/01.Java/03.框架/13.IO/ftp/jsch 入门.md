---
title: jsch 入门
date: 2025-04-16
lastUpdated: true
isOrigin: true
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
category:
  - io

tag:
  - ftp
  - sftp
order: 1
star: true
permalinkPattern: :year/:month/:day/:slug.html
---

## 下载依赖

```shell
<dependency>
    <groupId>com.github.mwiede</groupId>
    <artifactId>jsch</artifactId>
    <version>0.2.25</version>
</dependency>
```
## sftp 案例

```java
public static void main(String[] args) {
    try(Sftp sftp = JschUtil.createSftp("10.100.50.21",22, "root", "Windit2022")) {
        sftp.mkDirs("/tmp/gyfdc/20250315/FJ001"); // 创建文件夹
        ftp.upload("/tmp/sss/", new File("D:\\CMSFTPServer\\gyfdc\\20250321\\FJ001\\gyfdc_FJ001_主轴承_后_径向_2560.0_加速度_1551.49RPM_20250321063302.txt"));
    } catch (Exception e) {
        log.error("发送文件失败 {}", ExceptionUtil.stacktraceToString(e));
    }
}
```

## ftp 案例

```java
public static void main(String[] args) {
        Ftp ftp = new Ftp("10.100.50.21",22, "root", "Windit2022", StandardCharsets.UTF_8);
        try {
            ftp.getClient().sendCommand("OPTS UTF8", "ON");
            ftp.uploadFileOrDirectory("/tmp/gyfdc/20250315/FJ001", "localPath");
        } catch (Exception e) {
            log.error("发送文件失败 {}", ExceptionUtil.stacktraceToString(e));
        } finally {
            try {
                ftp.close();
            } catch (IOException e) {
                log.error("ftp 关闭失败 {}", ExceptionUtil.stacktraceToString(e));
            }
        }
    }
```