<template>
  <div class="login_container">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="name">
        <el-input v-model="form.userName" />
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.userPwd" />
      </el-form-item>
      <el-form-item label="remember me">
        <el-switch v-model="form.rememberMe" />
      </el-form-item>
      <el-form-item label=" ">
        <el-button style="width: 100%" type="primary" @click="onSubmit">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router/index';
import { reactive } from 'vue';
import { useUserStoreHook } from '@/store/modules/user';

const userStore = useUserStoreHook();
// do not use same name with ref
const form = reactive({
  userName: '',
  userPwd: '',
  rememberMe: false
});

const onSubmit = async () => {
  await userStore.storeUserLogin(form);
  router.push('/dashboard');
};
</script>
<style lang="less" scoped>
.login_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
