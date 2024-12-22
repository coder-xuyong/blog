---
title: redis 使用过程中的bug记录
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
category:
  - redis

tag:
  - java
  - spring
  - springboot
  - redis

---

redis 使用过程中的bug记录
<!-- more -->

# redisBUG

标签（空格分隔）： redis

---

## Windows环境

1、Could not connect to Redis at 127.0.0.1:6379: 由于目标计算机积极拒绝，无法连接。
``


2、报错如下
```shell
D:\Redis-x64-5.0.14.1>redis-server.exe redis.windows.conf
[7948] 29 Jan 10:06:50.399 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
[7948] 29 Jan 10:06:50.399 # Redis version=5.0.14.1, bits=64, commit=ec77f72d, modified=0, pid=7948, just started
[7948] 29 Jan 10:06:50.400 # Configuration loaded
[7948] 29 Jan 10:06:50.402 # Could not create server TCP listening socket 127.0.0.1:6379: bind: 操作成功完成。
```
解决：
```shell
redis-cli.exe      # 进入客户端
shutdown  # 关闭该redis服务
exit       # 退出
redis-server.exe redis.windows.conf  # 重新启动reids 服务
```
## MISCONF Redis is configured to save RDB snapshots, but it is currently not able to persist on disk. Commands that may modify the data set are disabled, because this instance is configured to report errors during writes if RDB snapshotting fails (stop-writes-on-bgsave-error option). Please check the Redis logs for details about the RDB error.
Redis配置为保存RDB快照，但它当前无法在磁盘上持久化。可以修改数据集的命令被禁用，因为此实例配置为在RDB快照失败时报告写入期间的错误（停止对bgsave error的写入选项）

原因是因为强制关闭 Redis 快照导致不能持久化（之前部署Redis的机器断电过，猜测是因为这个导致的）

解决方案就是重启Redis后，登录进去，将stop-writes-on-bgsave-error设置为no

```shell
127.0.0.1:6379> config set stop-writes-on-bgsave-error no
```
但需要注意的是，执行这个命令只能暂时解决无法 set 的问题，具体的问题还是要看 Redis 的 log 信息详细排查错误才行