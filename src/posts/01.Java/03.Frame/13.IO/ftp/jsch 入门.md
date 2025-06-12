---
title: 从零到一的 sftp 和 ftp 发送文件
date: 2025-04-16
cover: https://webstatic.mihoyo.com/upload/contentweb/2022/07/04/1ae0d0aaad9ee9b55652ea7ec67f0465_624394286022075834.png
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
**用这个:**

```xml
<dependency>
    <groupId>com.github.mwiede</groupId>
    <artifactId>jsch</artifactId>
    <version>0.2.25</version>
</dependency>
<!-- sftp的工具类来自这个依赖 -->
<dependency>
    <groupId>cn.hutool</groupId>
    <artifactId>hutool-all</artifactId>
    <version>5.8.18</version>
</dependency>
```

需要注意，下面这个依赖在某些时候有问题，尽量不要使用（具体啥问题忘了，遇到再补充）
```xml
<dependency>
    <groupId>com.jcraft</groupId>
    <artifactId>jsch</artifactId>
    <version>0.1.55</version>
</dependency>
```
## sftp 案例

```java
private void sendBySftp(String remotePath, File localPath,FileConfigurationProperties fileConfigurationProperties) {
        try (Sftp sftp = JschUtil.createSftp(fileConfigurationProperties.getHost(), fileConfigurationProperties.getPort(), fileConfigurationProperties.getUsername(),
                fileConfigurationProperties.getPassword())) {
            sftp.mkDirs(remotePath);
            // 验证目录是否存在
            if (sftp.exist(remotePath)) {
                sftp.upload(remotePath, localPath);
                log.info("成功发送文件到 {}", remotePath + File.separator + localPath.getName());
                if (localPath.delete()) {
                    log.info("本地文件已删除 {}", localPath.getAbsolutePath());
                }
            } else {
                log.error("目录创建失败: {}", remotePath);
                throw new RuntimeException("目录创建失败: " + remotePath);
            }
        } catch (Exception e) {
            log.error("{},发送文件到{}失败 {}", localPath, remotePath, ExceptionUtil.stacktraceToString(e));
        }
    }
```

## ftp 案例

```java
private void sendByFtp(String remotePath, File localPath，FileConfigurationProperties fileConfigurationProperties) {
        Ftp ftp = new Ftp(fileConfigurationProperties.getHost(), fileConfigurationProperties.getPort(), fileConfigurationProperties.getUsername(),
                fileConfigurationProperties.getPassword(), StandardCharsets.UTF_8);
        try {
            // ftp.getClient().sendCommand("OPTS UTF8", "ON");
            ftp.uploadFileOrDirectory(remotePath, localPath);
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