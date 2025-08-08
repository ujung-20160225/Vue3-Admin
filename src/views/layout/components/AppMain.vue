<template>
  <section class="app-main">
    <div class="app-scrollbar">
      <router-view v-slot="{ Component }">
        <!-- <transition name="el-fade-in" mode="out-in" :duration="120"> -->
        <!-- <keep-alive> -->
        <component :is="Component" :key="key" />
        <!-- </keep-alive> -->
        <!-- </transition> -->
      </router-view>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const key = computed(() => {
  return route.fullPath;
});
</script>

<style lang="less" scoped>
.app-main {
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - var(--smart-desk-navigationbar-height));
  background-color: var(--smart-desk-body-bg-color);
  flex: 1;
}

.app-scrollbar {
  overflow: auto;
  height: 100%;
  // @include scrollbar;
}

.fixed-header + .app-main {
  overflow: auto;
  padding-top: var(--smart-desk-navigationbar-height);
  height: 100vh;
}

.hasTagsView {
  .app-main {
    min-height: calc(100vh - var(--smart-desk-header-height));
  }

  .fixed-header + .app-main {
    padding-top: var(--smart-desk-header-height);
  }
}
</style>
