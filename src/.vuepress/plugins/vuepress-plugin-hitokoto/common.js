function isMobileDevice() {
  // 用户代理字符串检测
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    "android",
    "iphone",
    "ipod",
    "ipad",
    "windows phone",
    "blackberry",
    "webos",
    "opera mini",
    "iemobile",
    "mobile",
  ];

  // 检查用户代理是否包含移动设备关键词
  const isMobileUA = mobileKeywords.some((keyword) =>
    userAgent.includes(keyword)
  );

  // 检查屏幕尺寸和触摸支持
  // 判断 window 是否存在
  const isSmallScreen = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  // const isSmallScreen = window.innerWidth <= 768;
  // const isTouchScreen ="ontouchstart" in window || navigator.maxTouchPoints > 0;
  // 安全访问 navigator 和 window
  const isTouchScreen =
    typeof window !== 'undefined' &&
    (
      'ontouchstart' in window ||
      (navigator && navigator.maxTouchPoints > 0)
    );

  // 综合判断条件
  return isMobileUA || (isSmallScreen && isTouchScreen);
}

function changeBanner() {
    
  // 使用条件判断包裹 DOM 操作
  if (typeof document !== 'undefined') {
    // 使用示例
    if (isMobileDevice()) {
    //   console.log("当前设备是手机或平板");

      // 使用类型断言强制指定类型（跳过空值检查）
      document.querySelector(".vp-blog-hero.fullscreen").style.cssText = ` height:auto;`;
      document.querySelector(".hitokoto-text").style.cssText = `height:3rem;`;
      document.querySelector(".hitokoto-text>span").style.cssText = ` font-size:1.8rem;`;
    } else {
    //   console.log("当前设备是电脑");
      const hitokoto = document.querySelector(".hitokoto-text>span")
      if (hitokoto) {
        hitokoto.style.cssText = ` font-size:2rem;`;
      }
      // 获取目标容器
      const blogMask = document.querySelector(".vp-blog-mask");
      if (blogMask) {
        const isVideo = document.querySelector("#bg-video");
        if(isVideo){
            return;
        }
        // 创建视频元素
        const video = document.createElement("video");
        video.id = "bg-video";
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;

        // 设置视频源
        const source = document.createElement("source");
        source.src = "https://ys.mihoyo.com/main/_nuxt/videos/bg.3e78e80.mp4"; // 测试用视频
        source.type = "video/mp4";

        // 插入元素
        video.appendChild(source);
        blogMask.appendChild(video);
      }

      const blogPage = document.querySelector("#main-content");
      if (blogPage) {
        // console.log(blogPage)
        const isVideo = document.querySelector("#bg-video2");
        // console.log(isVideo)
        if(isVideo){
            return;
        }
        const video2 = document.createElement("video");
        video2.id = "bg-video2";
        video2.autoplay = true;
        video2.muted = true;
        video2.loop = true;
        video2.playsInline = true;

        // 设置视频源
        const source2 = document.createElement("source");
        source2.src = "https://ys.mihoyo.com/main/_nuxt/videos/bg.3e78e80.mp4"; // 测试用视频
        source2.type = "video/mp4";

        video2.appendChild(source2);
        blogPage.appendChild(video2)
        
      } else {
        console.log("too early")
      }
    }


  }else{
    console.log("document is undefined")
  }
}

export const changeBannerClient = changeBanner;