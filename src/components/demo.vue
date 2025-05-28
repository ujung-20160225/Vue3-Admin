<template>
    <h1>{{ msg }}</h1>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{ modelValue: string; msg: string }>(), { msg: '默认值' });
const emit = defineEmits<{ (e: 'update:modelValue', value: any): void }>();
</script>
<style scoped>
.read-the-docs {
    color: #888;
}
</style>
