<template>
  <div class="has-logo">
    <SidebarLogo />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="sidebarMenuBgColor"
        :text-color="sidebarMenuTextColor"
        :active-text-color="sidebarMenuActiveTextColor"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in permissionStore.routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePermissionStore } from '@/store/modules/permission';
import SidebarItem from './SidebarItem.vue';
import SidebarLogo from './SidebarLogo.vue';

const sidebarMenuBgColor = '#001428';
const sidebarMenuTextColor = '#c0c4cc';
const sidebarMenuActiveTextColor = '#409eff';

const route = useRoute();
const permissionStore = usePermissionStore();

const activeMenu = computed(() => {
  const {
    meta: { activeMenu },
    path
  } = route;
  return activeMenu ? activeMenu : path;
});

const isCollapse = false;
</script>
<style lang="less" scoped>
.has-logo {
  .el-scrollbar {
    height: calc(100% - var(--smart-desk-header-height));
  }
}

.el-scrollbar {
  height: 100%;

  :deep(.scrollbar-wrapper) {
    // 限制水平宽度
    overflow-x: hidden !important;

    .el-scrollbar__view {
      height: 100%;
    }
  }
  // 滚动条
  :deep(.el-scrollbar__bar) {
    &.is-horizontal {
      // 隐藏水平滚动条
      display: none;
    }
  }
}

.el-menu {
  width: 100% !important;
  min-height: 100%;
  border: none;
}

:deep(.el-menu-item),
:deep(.el-sub-menu__title),
:deep(.el-sub-menu .el-menu-item) {
  display: block;
  display: flex;
  height: var(--smart-desk-sidebar-menu-item-height);
  line-height: var(--smart-desk-sidebar-menu-item-height);

  &.is-active,
  &:hover {
    background-color: var(--smart-desk-sidebar-menu-hover-bg-color);
  }

  * {
    vertical-align: middle;
  }
}
</style>
