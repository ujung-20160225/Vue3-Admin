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
    min-height: calc(100vh - var(--smart-desk-navigationbar-height));
    flex: 1;
    position: relative;
    overflow: hidden;
    background-color: var(--smart-desk-body-bg-color);
  }

  .app-scrollbar {
    height: 100%;
    overflow: auto;
    // @include scrollbar;
  }

  .fixed-header + .app-main {
    padding-top: var(--smart-desk-navigationbar-height);
    height: 100vh;
    overflow: auto;
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
