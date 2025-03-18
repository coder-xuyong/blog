import { hopeTheme, navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: " java ", 
    icon: "https://www.java.com/favicon.ico", 
    prefix: "/posts/01.Java/", 
    children: [
      { text: 'JavaSE', link: '01.JavaSE/' },
      { text: 'JavaEE', link: '02.JavaSE/' },
    ] 
  },
  { text: " 数据库 ", 
    icon: "fa-solid fa-database", 
    prefix: "/posts/02.database/", 
    children: [
      {
        text: "关系型数据库",
        // icon: "pen-to-square",
        prefix: "03.关系型数据库/",
        children: [
          { text: "mysql", icon: "https://labs.mysql.com/common/themes/sakila/favicon.ico", link: "02.Mysql/" },
        ],
      },
      {
        text: "kv数据库",
        // icon: "pen-to-square",
        prefix: "05.KV数据库/",
        children: [
          { text: "redis", icon: "https://www.redis.net.cn/Application/Home/View/Public/img/icon.png", link: "01.Redis/" },
        ],
      },
    ] 
  },
  { text: "spring", icon: "https://docs.spring.io/spring-boot/_/img/favicon.ico", link: "/posts/java/spring/" },
  {
    text: "框架",
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
    }, { text: "spring", icon: "fa-solid fa-glasses", link: "/posts/java/spring/" },
    ]
  },
  {
    text: "AI相关",
    icon: "fa-solid fa-hexagon-nodes",
    prefix: "/posts/",
    children: [{
      text: "AI",
      prefix: "AI/",
      children: [
        "AI入门",
        "deepseek本地搭建",
      ]
    }
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
