import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'
// import { searchPlugin } from "@vuepress/plugin-search";
// import { cut } from 'nodejs-jieba'
// import { slimsearchPlugin } from "@vuepress/plugin-slimsearch";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  //以下三个参数均为本地测试环境，不会影响线上环境
  host: '0.0.0.0',
  //此端口为本地端口
  port:54088,
  //启动之后是否打开浏览器
  open: false,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  base: "/",
  lang: "zh-CN",
  title: "coder-xuyong",
  description: "以 vuepress-theme-hope 为模板的博客",
  theme:theme,  
  // 文章显示和隐藏规则,github pages 要将隐藏的放在后面，也就是索引 1 才有效
  pagePatterns:['**/*.md','!**/_*.md'],
  head: [
    [
      "script",
      {},
      `
      // console.log(666)
      `
    ],
    // [
    //   'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
    //   { rel: 'icon', href: 'logo.png' }
    // ]
  ],

alias: {
    "@DemoComponent": path.resolve(__dirname, "components/Demo.vue"),
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
    plugins: [
      // searchPlugin({
      //   locales: {
      //     '/': {
      //       placeholder: 'Search',
      //     }
      //   },

      //   maxSuggestions: 10,

        
      // }),
      // slimsearchPlugin({
      //   // 索引全部内容
      //   indexContent: true,
      //   indexOptions: {
      //     // 使用 nodejs-jieba 进行分词
      //     tokenize: (text, fieldName) =>
      //       fieldName === 'id' ? [text] : cut(text, true),
      //   },
      // }),
    ],
});
