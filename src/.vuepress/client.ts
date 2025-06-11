import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import {changeBannerClient} from "./plugins/vuepress-plugin-hitokoto/common.js";
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
    
    setupSnowFall({
      count: 10
    });

    // onMounted(() => {
    //   changeBannerClient();
    // });
      // return () =>changeBannerClient();
  },
  
  enhance({ router }) {
    router.afterEach(() => {

      let count = 0;
      const intervalId = setInterval(() => {
        // 执行你的任务
        changeBannerClient();  
        count++;
        if (count >= 10) {
          clearInterval(intervalId);
        }
      }, 100);
    })
  },

});
