<script setup lang="ts"></script>
<template>
  <div class="app-container">
    <div class="error-page">
      <h2>首页</h2>
      <img class="error-page-svg" src="@/assets/img/home.png" />
    </div>
  </div>
</template>
<style scoped lang="less">
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  &-svg {
    margin-bottom: 50px;
    width: 500px;
  }
}
</style>
