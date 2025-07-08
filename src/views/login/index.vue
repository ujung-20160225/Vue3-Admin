<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item label="remember me">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import router from '@/router';
  import { reactive } from 'vue';

  // do not use same name with ref
  const form = reactive({
    name: '',
    password: '',
    delivery: false
  });

  const onSubmit = () => {
    console.log(form);
    sessionStorage.setItem('userInfo', JSON.stringify(form));
    router.push('/dashboard');
  };
</script>
