<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { categoryType } from '../types';

const emit = defineEmits<{
  (e: 'add-todo', title: string, category: categoryType): void;
}>();

const inputTitle: Ref<string> = ref('');
const inputCategory: Ref<categoryType> = ref('work');

function handleSubmit() {
  emit('add-todo', inputTitle.value, inputCategory.value);
  inputTitle.value = '';
}
</script>

<template>
  <section>
    <h2>Add Todo</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="inputTitle" />
      <select v-model="inputCategory">
        <option value="work">work</option>
        <option value="private">private</option>
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
