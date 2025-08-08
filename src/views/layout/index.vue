<template>
  <div class="app-wrapper">
    <!-- 左侧边栏 -->
    <Sidebar class="sidebar-container" />
    <!-- 主容器 -->
    <div class="main-container">
      <!-- 头部导航栏和标签栏 -->
      <div class="fixed-header">
        <NavigationBar />
      </div>
      <!-- 页面主体内容 -->
      <AppMain :key="$route.fullPath" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { AppMain, NavigationBar, Sidebar } from './components';
</script>

<style lang="less" scoped>
@transition-time: 0.35s;

.app-wrapper {
  position: relative;
  width: 100%;
}

.showGreyMode {
  filter: grayscale(1);
}

.showColorWeakness {
  filter: invert(0.8);
}

.drawer-bg {
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
}

.main-container {
  position: relative;
  margin-left: var(--smart-desk-sidebar-width);
  min-height: 100%;
  transition: margin-left @transition-time;
}

.sidebar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  width: var(--smart-desk-sidebar-width) !important;
  height: 100%;
  font-size: 0;
  transition: width @transition-time;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - var(--smart-desk-sidebar-width));
  transition: width @transition-time;
}

.hideSidebar {
  .main-container {
    margin-left: var(--smart-desk-sidebar-hide-width);
  }

  .sidebar-container {
    width: var(--smart-desk-sidebar-hide-width) !important;
  }

  .fixed-header {
    width: calc(100% - var(--smart-desk-sidebar-hide-width));
  }
}

.withoutAnimation {
  .main-container,
  .sidebar-container {
    transition: none;
  }
}
</style>
