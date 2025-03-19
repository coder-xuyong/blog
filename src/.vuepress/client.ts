import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import { onMounted, watch } from "vue";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
// import "vuepress-theme-hope/presets/left-blog-info.scss";
import "vuepress-theme-hope/presets/squircle-blogger-avatar.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";
// 隐藏导航栏图标
// import "vuepress-theme-hope/presets/hide-navbar-icon.scss";
//隐藏侧边栏图标
// import "vuepress-theme-hope/presets/hide-sidebar-icon.scss";
// 为所有 hr 元素添加驾驶的车图标
import "vuepress-theme-hope/presets/hr-driving-car.scss";
export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2024-12-18"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
        // "/": "Running time: :day days :hour hours :minute minutes :second seconds",
        // "/zh/": "小破站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true
    );
    setupSnowFall();

    
    onMounted(() => {
      // // 获取目标容器
      // const blogMask = document.querySelector(".vp-blog-mask");
      // // 创建视频元素
      // const video = document.createElement("video");
      // video.id = "bg-video";
      // video.autoplay = true;
      // video.muted = true;
      // video.loop = true;
      // video.playsInline = true;
      

      // // 设置视频源
      // const source = document.createElement("source");
      // source.src = "https://ys.mihoyo.com/main/_nuxt/videos/bg.3e78e80.mp4"; // 测试用视频
      // source.type = "video/mp4";
      
      // // 插入元素
      // video.appendChild(source);
      // blogMask.appendChild(video);
    });
  },
});
