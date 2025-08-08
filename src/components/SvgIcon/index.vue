<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  prefix?: string;
  name: string;
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon'
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg class="svg-icon" aria-hidden="false">
    <use :href="symbolId" />
  </svg>
</template>

<style lang="less" scoped>
.svg-icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  fill: currentcolor;
}
</style>
