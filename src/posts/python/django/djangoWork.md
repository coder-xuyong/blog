---
title: django 使用过程中发生的问题
icon: pen-to-square
date: 2024-05-29
lastUpdated: true
category:
  - python
tag:
  - djgango
---

在工作中遇到了 django  框架，记录一些使用过程中遇到的问题

<!-- more -->

## django  为何 只允许127.0.0.1 访问服务，电脑的实际ip确不行

Django服务默认只允许从127.0.0.1（也被称为本地回环地址或localhost）访问，这通常是因为Django的设置文件中ALLOWED_HOSTS配置的限制。为了允许电脑的实际IP地址访问Django服务，需要进行以下几步操作：

### 1. 修改ALLOWED_HOSTS设置：
Django的settings.py文件中有一个ALLOWED_HOSTS配置，它指定了哪些主机名或IP地址可以访问Django服务。默认情况下，它可能只包含['localhost']或['127.0.0.1']。要允许电脑的实际IP地址访问，你需要将ALLOWED_HOSTS修改为包含你的实际IP地址，或者设置为['*']（注意：'*'允许所有IP地址访问，但出于安全考虑，通常不推荐在生产环境中使用）。
例如：

```python
ALLOWED_HOSTS = ['你的实际IP地址']  # 只允许指定IP访问  
# 或者  
ALLOWED_HOSTS = ['*']  # 允许所有IP访问（不推荐用于生产环境）
```
### 2. 运行Django服务时指定监听地址：
当你使用python manage.py runserver命令启动Django开发服务器时，默认情况下它只会监听127.0.0.1（localhost）。如果你想让Django服务监听你的电脑的实际IP地址，你需要指定一个不同的地址，如0.0.0.0，这会让Django服务监听所有可用的网络接口。
例如：

```bash
python manage.py runserver 0.0.0.0:8000
````
这样，Django服务就会监听所有可用的IP地址，并通过端口8000提供服务。
### 3. 防火墙和网络设置：
如果你的电脑上有防火墙或网络访问控制设置，确保它们允许从你的实际IP地址到Django服务的访问。你可能需要配置防火墙规则或路由器设置来允许流量通过。
### 4. DNS和主机名：
如果你尝试通过域名或主机名访问Django服务而不是直接通过IP地址，你还需要确保DNS设置正确，并且主机名可以被解析为你的电脑的实际IP地址。
总结来说，Django默认只允许从127.0.0.1访问是因为ALLOWED_HOSTS设置的限制。要允许从电脑的实际IP地址访问，你需要修改ALLOWED_HOSTS设置，并在运行Django服务时指定监听地址。同时，确保防火墙和网络设置允许从你的实际IP地址到Django服务的访问。





