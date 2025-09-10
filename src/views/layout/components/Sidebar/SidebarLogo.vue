<template>
  <div class="sidebar-logo-container">
    <transition name="sidebar-logo-fade">
      <router-link key="expand" to="/" class="sidebar-logo-text">
        <img src="@/assets/vue.svg" width="30" alt="" /> 通用系统
      </router-link>
    </transition>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.sidebar-logo-container {
  position: relative;
  padding: 0 20px;
  width: 100%;
  color: #fff;
  height: var(--smart-desk-header-height);
  background-color: var(--smart-desk-sidebarlogo-bg-color);
  line-height: var(--smart-desk-header-height);

  .sidebar-logo-text {
    width: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
