<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useTodosStore } from '../stores/todos';
import { useTodoCategories } from '../stores/category';

const toods = useTodosStore();
const categories = useTodoCategories();

const inputTitle: Ref<string> = ref('');
const inputCategoryId: Ref<number> = ref(categories.categories[0].id);

function handleSubmit() {
  toods.addTodo(inputTitle.value, inputCategoryId.value);
  inputTitle.value = '';
}
</script>

<template>
  <section>
    <h2>Add Todo</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="inputTitle" />
      <select v-if="categories.categories.length !== 0" v-model="inputCategoryId">
        <option v-for="category in categories.categories" :value="category.id">{{ category.title }}</option>
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
