<script setup lang="ts">
import type { currentFilterType } from '../types';

const props = defineProps<{
  currentFilter: currentFilterType;
}>();

const emit = defineEmits<{
  (e: 'update-current-filter', filterName: currentFilterType): void;
}>();

function handleClick(filterName: currentFilterType) {
  emit('update-current-filter', filterName);
}
</script>

<template>
  <section>
    <h2>Filter</h2>
    <button @click="handleClick('completed')" :disabled="props.currentFilter === 'completed'">完了のみ</button>
    <button @click="handleClick('incompleted')" :disabled="props.currentFilter === 'incompleted'">未完了のみ</button>
    <button @click="handleClick('all')" :disabled="props.currentFilter === 'all'">全部</button>
  </section>
</template>

<style scoped></style>
