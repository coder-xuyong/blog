<!-- 自动获取bing 壁纸 -->
<!-- <script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
</script>
<template>
  <BlogHero>
    <template #bg>
      <BingHeroBackground />
    </template>
  </BlogHero>
</template> -->

<!-- 自动获取名言金句 -->
<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
// import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
import HitokotoBlogHero from "../plugins/vuepress-plugin-hitokoto/HitokotoBlogHero.js";
// import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import BingHeroBackground from "../plugins/vuepress-plugin-bingbackground/BingHeroBackground.js";
</script>

<template>
    <BlogHero>
        <template #info="info" >
            <BingHeroBackground />
            <HitokotoBlogHero v-bind="info" />
        </template>
    </BlogHero>
</template>