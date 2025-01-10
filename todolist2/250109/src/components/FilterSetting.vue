<script setup lang="ts">
const props = defineProps<{
  currentFilter: 'all' | 'incompleted' | 'completed';
}>();

const emit = defineEmits<{
  (e: 'update-current-filter', filterName: 'all' | 'incompleted' | 'completed'): void;
}>();

function handleClick(filterName: 'all' | 'incompleted' | 'completed') {
  emit('update-current-filter', filterName);
}
</script>

<template>
  <section>
    <h2>filter</h2>
    <button @click="handleClick('completed')" :disabled="props.currentFilter === 'completed'">完了のみ</button>
    <button @click="handleClick('incompleted')" :disabled="props.currentFilter === 'incompleted'">未完了のみ</button>
    <button @click="handleClick('all')" :disabled="props.currentFilter === 'all'">全部</button>
  </section>
</template>

<style scoped></style>
