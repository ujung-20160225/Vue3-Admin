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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-svg {
        width: 500px;
        margin-bottom: 50px;
    }
}
</style>
