import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2024-12-18"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
        // "/": "Running time: :day days :hour hours :minute minutes :second seconds",
        // "/zh/": "小破站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
  },
});