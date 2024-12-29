import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  ,
  { text: "java 基础", icon: "fa-brands fa-java", link: "/posts/java/basic/" },
  {
    text: "java 框架",
    icon: "fa-solid fa-book",
    prefix: "/posts/java/",
    children: [{
      text: "netty",
      // icon: "fa-solid fa-book",
      prefix: "netty/",
      children: [
        "Netty01-nio",
        "Netty02-入门",
        "Netty03-进阶",
        "Netty04-优化与源码",
      ]
    }, {
      text: "spring",
      // icon: "pen-to-square",
      prefix: "spring/",
      children: [
        "spring",
      ]
    },
    ]
  },

  // "/posts/markdown.md",
  // "/demo/",
  // {
  //   text: "博文",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     "strawberry",
  //     "tomato",
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //   ],
  // },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
