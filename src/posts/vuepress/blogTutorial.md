---
title: blog 搭建教程
icon: pen-to-square
cover: https://webstatic.mihoyo.com/upload/contentweb/2022/07/04/cb95a5b5d57165a4970d801c5dcf0435_8788044469681939890.png
date: 2025-01-12
lastUpdated: true
order: 1
isOriginal: true
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
category:
  - vuepress
tag:
  - vuepress
  - vscode
  - github
  - github pages
sticky: true
# 此页面会出现在星标文章中
star: true
---

白嫖！记录 vuepress 搭建博客部署到 GitHub pages 的过程

<!-- more -->

## 安装 vs code

下载地址：https://code.visualstudio.com/

## 安装 node.js

最好装 2X 的版本

下载地址：https://nodejs.org/zh-cn

### 可能会遇见的问题
```shell
npm : 无法加载文件 D:\Program Files\nodejs\npm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ npm -v
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```
解决方法：使用管理员运行 powershell，运行以下命令
```shell
PS C:\WINDOWS\system32> get-ExecutionPolicy
Restricted
PS C:\WINDOWS\system32> set-ExecutionPolicy RemoteSigned

执行策略更改
执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID=135170
中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”): Y
PS C:\WINDOWS\system32> get-ExecutionPolicy
RemoteSigned
PS C:\WINDOWS\system32>
```
### 使用 vite 打包可能会遇见的问题
```shell
E:\workspace_mine\blog> npm run docs:build

> blog@1.0.0 docs:build  
> vuepress-vite build src

✔ Initializing and preparing data - done in 28.21s
x Build failed in 13.23s
✖ Compiling with vite - failed in 13.48s
error [vite]: Rollup failed to resolve import "img/0031.jpg" from "E:/workspace_mine/blog/src/.vuepress/.temp/pages/posts/java/netty/Netty03-进阶.html.vue".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
    at viteWarn (file:///E:/workspace_mine/blog/node_modules/vite/dist/node/chunks/dep-DP_yvx5y.js:51216:17)
    at onRollupWarning (file:///E:/workspace_mine/blog/node_modules/vite/dist/node/chunks/dep-DP_yvx5y.js:51248:5)
    at onwarn (file:///E:/workspace_mine/blog/node_modules/vite/dist/node/chunks/dep-DP_yvx5y.js:50914:7)
    at file:///E:/workspace_mine/blog/node_modules/rollup/dist/es/shared/node-entry.js:19606:13
    at Object.logger [as onLog] (file:///E:/workspace_mine/blog/node_modules/rollup/dist/es/shared/node-entry.js:21329:9)
    at ModuleLoader.handleInvalidResolvedId (file:///E:/workspace_mine/blog/node_modules/rollup/dist/es/shared/node-entry.js:20218:26)
```

解决方案：使用绝对路径或者相对路径。路径规范比webpack严格
## 创建项目

在cmd中切换到一个目录，执行命令`npm init vuepress-theme-hope@latest my-docs`，会出现下面的过程：

```shell
E:\workspace\vsocde>npm init vuepress-theme-hope@latest blog
Need to install the following packages:
create-vuepress-theme-hope@2.0.0-rc.66
Ok to proceed? (y) y

> npx
> create-vuepress-theme-hope blog

√ Select a language to display / 选择显示语言 简体中文
√ 选择包管理器 npm
√ 你想要使用哪个打包器？ webpack
生成 package.json...
√ 设置应用名称 blog
√ 设置应用描述 徐勇的博客
√ 设置应用版本号 1.0.0
√ 设置协议 MIT
生成 tsconfig.json...
√ 你想要创建什么类型的项目？ blog
√ 项目需要用到多语言么? No
生成模板...
√ 是否初始化 Git 仓库? Yes
√ 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
√ 选择你想使用的源 国内镜像源
安装依赖...
这可能需要数分钟，请耐心等待.
我们无法正确输出子进程的进度条，所以进程可能会看似未响应

added 766 packages in 41s

169 packages are looking for funding
  run `npm fund` for details
模板已成功生成!
√ 是否想要现在启动 Demo 查看? Yes
启动开发服务器...
启动成功后，请在浏览器输入给出的开发服务器地址(默认为 'localhost:8080')

> blog@1.0.0 docs:dev
> vuepress-webpack dev src

success VuePress webpack dev server is listening at http://localhost:8080/
webpack compiled successfully
```

## 创建 GitHub 仓库
1.创建名为 blog 的仓库，选择 public
2.创建完成仓库后，创建一个新的分支 blog_pages ,用于存放编译打包后的静态文件
3.完成新分支的创建后，进入 blog 的 setting，选在 pages 菜单，选择 blog_pages 分支映射为可访问的静态站点。
4.上述执行完成后，稍等一会儿，访问：https://GitHub用户名.github.io/blog/ 就可以访问了。

## 新增 Access Token 

1.去 GitHub 的 setting 里面，找到 Developer Settings，选择 Personal access tokens 中的 Tokens(classic)，点击右上角 Generate new token(classic) ，按需选择生成 token。
2.将生成的 token 放到 blog 仓库的 settings/security/Secrets and variables/actions。然后选择 new repository secret，将创建的 token 粘贴到此，名称建议设置为 ACCESS_TOKEN。

## 修改页面配置，设置 access token

找到 blog/.github.workflows/deploy-docs.yml，将最后面的 branch 的值改为 blog_pages，在将密钥设置过到里面：
```shell
      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        # 设置密钥
        env:
          GITHUB_TOKEN: $({secrets.ACCESS_TOKEN})
        with:
          # 部署文档
          branch: blog_pages
          folder: src/.vuepress/dist
```
在blog/src/config.ts 里面修改 base："/blog/",

```shell
export default defineUserConfig({
  base: "/blog/",
  //……
})
```
## 使用 VS code 将代码发送到 GitHub

设置后上面的过程后，选择 vscode 左边第三个 git 功能，先点击 source control 右边的三个点，选择 remote/add remote，将远程仓库的地址复制粘贴进去，此处是：https://github.com/coder-xuyong/blog.git 。粘贴进去后回车，输入一个别名：blog。成功之后，将本地代码与GitHub上的main分支进行合并，选择branch/merge。同步成功后，commit 提交代码，再点击 sync changes 同步代码。

然后再去GitHub上查看代码，发现已经提交过来了。再点击 action 可以看见代码的提交记录和打包地址。

## 后续修改就查看 vuepress 官网进行修改
https://theme-hope.vuejs.press/zh/


## 参考

> https://www.bilibili.com/video/BV16Z4heUEgi/?spm_id_from=333.1391.0.0&vd_source=963c8f327c417497fa7a2e119c546395