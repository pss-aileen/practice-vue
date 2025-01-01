<script setup lang="ts">
import { ref, type Ref } from 'vue';
import InputForm from './components/InputForm.vue';

interface itemsProps {
  id: number;
  title: string;
  createdAt: number;
}

const items: Ref<itemsProps[]> = ref([]);

let count = 0;
function addItem(title: string) {
  const item: itemsProps = {
    id: count++,
    title: title,
    createdAt: new Date().getTime(),
  };

  items.value.push(item);

  console.log(items.value);
}
</script>

<template>
  <h1>タスク一覧</h1>
  <InputForm @add-task="addItem" />
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.id }}: {{ item.title }} - {{ item.createdAt }}</li>
  </ul>
</template>

<style scoped></style>
