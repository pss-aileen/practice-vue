<script setup lang="ts">
import { useTodoCategories } from '../stores/category';
import { useTodosFilter } from '../stores/filter';
import type { currentFilterType } from '../types';

const categories = useTodoCategories();
const filter = useTodosFilter();

function handleClick(filterName: currentFilterType) {
  filter.updateCurrentFilter(filterName);
}
</script>

<template>
  <section class="filter">
    <h2>Filter</h2>

    <ul>
      <li><button @click="handleClick('all')" :disabled="filter.currentFilter === 'all'">全部</button></li>
      <li><button @click="handleClick('completed')" :disabled="filter.currentFilter === 'completed'">完了のみ</button></li>
      <li><button @click="handleClick('incompleted')" :disabled="filter.currentFilter === 'incompleted'">未完了のみ</button></li>
      <li v-for="category in categories.categories" :key="category.id">
        <button @click="handleClick(category.id)" :disabled="filter.currentFilter === category.id">
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
