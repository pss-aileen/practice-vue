<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { categoryType } from '../types';
import { useTodosStore } from '../stores/todos';

const toods = useTodosStore();

// const emit = defineEmits<{
//   (e: 'add-todo', title: string, category: number): void;
// }>();

const props = defineProps<{
  categories: categoryType[];
}>();

const inputTitle: Ref<string> = ref('');
const inputCategoryId: Ref<number> = ref(props.categories[0].id);

function handleSubmit() {
  // emit('add-todo', inputTitle.value, inputCategoryId.value);
  toods.addTodo(inputTitle.value, inputCategoryId.value);
  inputTitle.value = '';
}
</script>

<template>
  <section>
    <h2>Add Todo</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="inputTitle" />
      <select v-if="props.categories.length !== 0" v-model="inputCategoryId">
        <option v-for="category in props.categories" :value="category.id">{{ category.title }}</option>
      </select>
      <button>add</button>
    </form>
  </section>
</template>

<style scoped>
form {
  margin-top: 16px;
}
</style>
