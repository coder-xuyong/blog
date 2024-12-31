import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/blog/",
  lang: "zh-CN",
  title: "coder-xuyong",
  description: "以 vuepress-theme-hope 为模板的博客",
  theme:theme,  
  head: [
    [
      "script",
      {},
      `
      // console.log(666)
      `
    ],
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      { rel: 'icon', href: 'logo.png' }
    ]
  ],

alias: {
    "@DemoComponent": path.resolve(__dirname, "components/Demo.vue"),
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
plugins: [
  searchPlugin({
    // 允许搜索 Frontmatter 中的 `tags`
    getExtraFields: (page) => page.frontmatter.tags ?? [],
  }),
],
});
