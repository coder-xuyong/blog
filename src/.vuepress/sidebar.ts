import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
     "intro",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "markdown 使用说明",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/page",
    // },
    {
      text: "java",
      icon: "fa-brands fa-java",
      prefix: "posts/01.Java/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "mysql",
      icon: "fa-solid fa-database",
      prefix: "posts/02.mysql/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "linux",
      icon: "fa-brands fa-linux",
      prefix: "posts/03.linux/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "network",
      icon: "fa-solid fa-network-wired",
      prefix: "posts/04.network/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "AI",
      icon: "fa-brands fa-airbnb",
      prefix: "posts/AI/",
      collapsible: true,
      children: "structure",  
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      collapsible: true,
      children: "structure",
    },
   
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
