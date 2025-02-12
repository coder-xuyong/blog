<!-- .vuepress/layouts/Layout.vue -->
<script setup>
import ParentLayout from "vuepress-theme-hope/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <!-- 覆盖页脚插槽 -->
    <template #footer>
      <footer class="custom-footer">
        Your Custom Footer Content
      </footer>
    </template>
  </ParentLayout>
</template>

<style>
.custom-footer {
    background-color: red;
  /* 自定义样式 */
}
</style>