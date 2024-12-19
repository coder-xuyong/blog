# github pages 使用
访问：https://pages.github.com/ 查看详细攻略
# 使用 vuepress
访问：https://theme-hope.vuejs.press/zh/get-started/
其中创建项目的流程如下：
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
