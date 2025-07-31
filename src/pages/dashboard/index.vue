<template>
  <div class="page_container">
    <div class="block text-center" m="t-4">
      <p class="demonstration">{{ $t('global_text') }}</p>
      <p class="demonstration">{{ t('title') }}</p>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ElMessage } from 'element-plus';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  ElMessage.error(t('title'));
</script>
<style scoped>
  .demonstration {
    color: var(--el-text-color-secondary);
  }

  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
<i18n lang="yaml">
en:
  title: 'Switch when indicator is clicked'
zh:
  title: '当指示器被点击时切换'
</i18n>
