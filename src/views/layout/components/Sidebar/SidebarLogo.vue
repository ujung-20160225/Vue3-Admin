<template>
  <div class="sidebar-logo-container">
    <transition name="sidebar-logo-fade">
      <router-link key="expand" to="/">
        <img src="@/assets/img/logo.png" class="sidebar-logo-text" />
      </router-link>
    </transition>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: var(--smart-desk-header-height);
    line-height: var(--smart-desk-header-height);
    background-color: var(--smart-desk-sidebarlogo-bg-color);
    padding: 0 20px;

    .sidebar-logo-text {
      width: 100%;
      vertical-align: middle;
    }
  }
</style>
