<template>
  <div class="navigation-bar">
    <div class="right-menu">
      <el-dropdown class="right-menu-item">
        <div class="right-menu-avatar">
          <span>👨🏻‍💻 {{ username }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import router from '@/router/index';
  import { useUserStoreHook } from '@/store/modules/user';
  const userStore = useUserStoreHook();
  const username = userStore.username;

  // 登出
  const logout = () => {
    userStore.logout();
    router.push('/login');
  };
</script>

<style lang="less" scoped>
  .navigation-bar {
    height: var(--smart-desk-navigationbar-height);
    overflow: hidden;
    background: #fff;
    .hamburger {
      display: flex;
      align-items: center;
      height: 100%;
      float: left;
      padding: 0 15px;
      cursor: pointer;
    }
    .right-menu {
      float: right;
      margin-right: 10px;
      height: 100%;
      display: flex;
      align-items: center;
      color: #606266;
      .right-menu-item {
        padding: 0 10px;
        cursor: pointer;
        .right-menu-avatar {
          display: flex;
          align-items: center;
          .el-avatar {
            margin-right: 10px;
          }
          span {
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
