<script setup lang="ts">
import type { categoryType, currentFilterType } from '../types';

const props = defineProps<{
  currentFilter: currentFilterType;
  categories: categoryType[];
}>();

const emit = defineEmits<{
  (e: 'update-current-filter', filterName: currentFilterType): void;
}>();

function handleClick(filterName: currentFilterType) {
  emit('update-current-filter', filterName);
}
</script>

<template>
  <section class="filter">
    <h2>Filter</h2>

    <ul>
      <li><button @click="handleClick('all')" :disabled="props.currentFilter === 'all'">全部</button></li>
      <li><button @click="handleClick('completed')" :disabled="props.currentFilter === 'completed'">完了のみ</button></li>
      <li><button @click="handleClick('incompleted')" :disabled="props.currentFilter === 'incompleted'">未完了のみ</button></li>
      <li v-for="category in props.categories" :key="category.id">
        <button @click="handleClick(category.id)" :disabled="props.currentFilter === category.id">
          {{ category.title }}
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.filter {
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
