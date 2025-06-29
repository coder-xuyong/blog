import { onClickOutside, useStorage } from "@vueuse/core";
import { Transition, computed, defineComponent, h, onMounted, ref, shallowRef, } from "vue";
import { ClientOnly, usePageLang } from "vuepress/client";
import {changeBannerClient} from "./../vuepress-plugin-hitokoto/common.js";
// import { useDarkMode } from "vuepress-theme-hope/client";
import "./bing-hero-background.scss";
const bingStorage = useStorage("bing-image", {
    index: 0,
    data: [],
});
export default defineComponent({
    name: "BingHeroBackground",
    /*
     * TODO: Add download button
     * props: {
     *   download: Boolean,
     * },
     */
    setup() {
        // const isDarkMode = useDarkMode();
        const lang = usePageLang();
        const bingInfo = shallowRef();
        const showInfo = ref(false);
        const currentWallpaper = computed(() => {
            const { index, data } = bingStorage.value;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const langCode = lang.value.toLowerCase().split("-").shift();
            if (data[index]) {
                const { url, wallpaper, downloadable, locales } = data[index];
                return {
                    url,
                    wallpaper,
                    downloadable,
                    ...(locales[langCode] ?? locales.en),
                };
            }
            return null;
        });
        const getImage = () => fetch("https://bing-wallpaper.vuejs.press/api/wallpaper").then((response) => response.json());
        const prev = () => {
            bingStorage.value.index -= 1;
        };
        const next = () => {
            bingStorage.value.index += 1;
        };
        onClickOutside(bingInfo, () => {
            showInfo.value = false;
        });
        // function isMobileDevice() {
        //     // 用户代理字符串检测
        //     const userAgent = navigator.userAgent.toLowerCase();
        //     const mobileKeywords = [
        //       "android",
        //       "iphone",
        //       "ipod",
        //       "ipad",
        //       "windows phone",
        //       "blackberry",
        //       "webos",
        //       "opera mini",
        //       "iemobile",
        //       "mobile",
        //     ];
      
        //     // 检查用户代理是否包含移动设备关键词
        //     const isMobileUA = mobileKeywords.some((keyword) =>
        //       userAgent.includes(keyword)
        //     );
      
        //     // 检查屏幕尺寸和触摸支持
        //     const isSmallScreen = window.innerWidth <= 768;
        //     const isTouchScreen =
        //       "ontouchstart" in window || navigator.maxTouchPoints > 0;
      
        //     // 综合判断条件
        //     return isMobileUA || (isSmallScreen && isTouchScreen);
        //   }
        onMounted(() => {
            // void getImage().then((res) => {
            //     bingStorage.value.data = res;
            // });
            // changeBannerClient();
        });
        return () => {
            const { title, headline, url, backstage, quickFact, copyright } = currentWallpaper.value ?? {};
            return h(ClientOnly, () => url
                ? [
                    // h("div", {
                    //     class: "vp-blog-mask",
                    //     style: {
                    //         background: `url(${url}) center/cover no-repeat`,
                    //     },
                    // }),
                    // h("div", {
                    //     class: "bing-switch",
                    //     onClick: () => {
                    //         showInfo.value = true;
                    //     },
                    // }, [
                    //     h(Transition, { name: "fade" }, () => showInfo.value
                    //         ? h("div", { class: "bing-info", ref: bingInfo }, [
                    //             h("a", {
                    //                 href: backstage,
                    //                 target: "_blank",
                    //                 class: "bing-info-header",
                    //             }, headline),
                    //             h("hr"),
                    //             h("div", { class: "bing-info-body" }, quickFact),
                    //             h("div", { class: "bing-info-copyright" }, copyright),
                    //         ])
                    //         : null),
                    //     h("div", { class: "bing-location" }, [
                    //         h("span", { class: "bing-location-icon" }),
                    //         title,
                    //     ]),
                    //     h("button", {
                    //         class: "bing-switch-prev",
                    //         title: "prev image",
                    //         type: "button",
                    //         disabled: bingStorage.value.index === 0,
                    //         onClick: () => {
                    //             prev();
                    //         },
                    //     }),
                    //     h("button", {
                    //         class: "bing-switch-next",
                    //         title: "next image",
                    //         type: "button",
                    //         disabled: bingStorage.value.index ===
                    //             bingStorage.value.data.length - 1,
                    //         onClick: () => {
                    //             next();
                    //         },
                    //     }),
                    // ]),
                ]
                : null);
        };
    },
});
