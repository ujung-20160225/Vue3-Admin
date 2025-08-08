<template>
  <div class="navigation-bar">
    <div class="right-menu">
      <div class="op op--lang" @click="onToggleLang">
        <div class="icon icon--language">
          <img v-show="language === 'zh'" src="@/assets/img/lang-zh.svg" />
          <img v-show="language === 'en'" src="@/assets/img/lang-en.svg" />
        </div>
      </div>
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
import { ref } from 'vue';
import router from '@/router/index';
import { useUserStoreHook } from '@/store/modules/user';
import { useI18n } from 'vue-i18n';

const userStore = useUserStoreHook();
const username = userStore.username;

//languageChange
const { locale } = useI18n();
const langVal = localStorage.getItem('v_form_locale') || 'zh';
if (langVal) {
  locale.value = langVal;
}
const language = ref(locale);
const onToggleLang = () => {
  if (language.value === 'en') {
    language.value = 'zh';
  } else {
    language.value = 'en';
  }
  localStorage.setItem('v_form_locale', language.value);
};
// 登出
const logout = () => {
  userStore.logout();
  router.push('/login');
};
</script>

<style lang="less" scoped>
.navigation-bar {
  overflow: hidden;
  height: var(--smart-desk-navigationbar-height);
  background: #fff;

  .hamburger {
    display: flex;
    align-items: center;
    float: left;
    padding: 0 15px;
    height: 100%;
    cursor: pointer;
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    margin-right: 10px;
    height: 100%;
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
