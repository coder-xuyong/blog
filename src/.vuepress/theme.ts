import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
// import { cut } from 'nodejs-jieba'
export default hopeTheme({
  darkmode: "toggle", // 或 "toggle", "auto", "enable", "disable"
  hostname: "https://coder-xuyong.github.io/blog/",
  author: {
    name: "xuyong",
    url: "https://github.com/coder-xuyong",
  },

  // 修改 icon 来源
  iconAssets: "fontawesome-with-brands",
  // iconAssets: "iconify",

  logo: "/logo.svg",

  repo: "coder-xuyong/blog",

  docsDir: "src",
  //专注模式
  focus: false,
  //纯净模式
  pure:false,
  //因此打印按钮
  print: false,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "coder-xuyong 的小破站",
  displayFooter: true,
  // copyright: true,
  // copyright: "自定义版权信息",
  // 导航栏布局配置
  navbarLayout: {
    start: ["Brand"],
    // center: ["Links"],
    end: ["Links", "Repo", "Outlook","Search"],
  },

  // 博客相关
  blog: {
    description: "重生之我在提瓦特大陆当牛做马",
    intro: "/intro.html",
    medias: {
      Baidu: "https://www.baidu.com",
      BiliBili: "https://www.bilibili.com",

      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "mailto:info@example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com",
      Overflow: {
        icon: "https://stackoverflow.co/favicon.ico",
        link: "https://stackoverflow.co"
      },
      Tongyi: {
        icon: "https://img.alicdn.com/imgextra/i1/O1CN01asLYeX1WhbsyEZn5u_!!6000000002820-55-tps-56-56.svg",
        link: "https://tongyi.aliyun.com",
      },
      Vuepress: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://vuepress.vuejs.org/zh/",
      },
      Yuanshen:{
        icon:"https://ys.mihoyo.com/main/favicon.ico",
        link: "https://ys.mihoyo.com/",
      },
      StarRail:{
        icon:"https://sr.mihoyo.com/favicon-mi.ico",
        link: "https://sr.mihoyo.com/",
      },
      Mingchao:{
        icon: "https://mc.kurogames.com/static4.0/favicon.ico",
        link: "https://mc.kurogames.com/main#resonators",
      },
      fontawesome:{
        icon: "https://fontawesome.com/favicon.ico",
        link:"https://fontawesome.com/search?ic=free",
      },
      // iconify:{
      //   icon:"https://icon-sets.iconify.design/favicon.ico",
      //   link:"https://icon-sets.iconify.design",
      // },
      yuque:{
        icon : "https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*vMxOQIh4KBMAAAAAAAAAAAAADvuFAQ/original",
        link: "https://www.yuque.com/"
      },
      Doubao:{
        icon:"https://img-s.msn.cn/tenant/amp/entityid/BB1qZI2R.img",
        link:"https://www.doubao.com/",
      },
      ChatGPT:{
        icon:"https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg",
        link:"https://chatgpt.com/",
      },
      MarkDown:{
        icon:"https://markdownlivepreview.com/favicon.png",
        link:"https://theme-hope.vuejs.press/zh/cookbook/markdown/"
      },
      ProcessOn:{
        icon:"https://www.processon.com/v5_editor/static/assets/images/logo-react.svg",
        link:"https://www.processon.com/"
      }
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    //开启 mermaid，用于画图，可以参考netty部分
    mermaid:true,
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    // demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    highlighter:{      
      type: "shiki",
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff','sql', 'xml', 'java', 'tex', 'cmd', 'properties', 'yaml','mermaid', 'python', 'kotlin', 'csharp', 'jsx', 'dart', 'php', 'less','scss', 'yml', 'groovy', 'powershell','c','cpp','ruby','batch','lua','http','properties','nginx','scala','vim'],
      langAlias: { 
        mysql: 'sql',
      },
      
    }
    // 取消注释它们如果你需要 TeX 支持
    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },
  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用搜索框插件
    // search:true,
    search: {
      // 插件选项
        isSearchable: (page) => page.path !== '/',
    },
    slimsearch: false,
    // slimsearch:{
    //   hotReload: true,
    //   indexContent: true,
    //   // suggestion: true,
      
    //   indexOptions: {
    //     // 使用 nodejs-jieba 进行分词
    //     tokenize: (text, fieldName) =>
    //       fieldName === 'id' ? [text] : cut(text, true),
    //   },
    // },
    // search: true,
    // search: {
    //   // 插件选项
    //   maxSuggestions: 10,
    //   getExtraFields: (page) => {
    //                 // 返回整个文档内容
    //                 return [page.content];
    //             },
    //      locales: {
    //                 '/': {
    //                     getPreview: (page, matched) => {
    //                         let previewContent = '';
    //                         const lines = page.content.split('\n');
    //                         let count = 0;
    //                         for (const line of lines) {
    //                             if (matched.some(match => line.includes(match))) {
    //                                 previewContent += line + '\n';
    //                                 count++;
    //                                 // 控制展示的包含搜索内容的行数，这里设为3行
    //                                 if (count === 3) {
    //                                     break;
    //                                 }
    //                             }
    //                         }
    //                         if (previewContent === '') {
    //                             // 如果没有找到包含搜索词的内容，返回文档开头部分作为预览
    //                             previewContent = lines.slice(0, 3).join('\n');
    //                         }
    //                         return previewContent;
    //                     }
    //                 }
    //      },
    // },


    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
},{custom: true});
