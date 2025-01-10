<script setup lang="ts">
import { ref, type Ref } from 'vue';

const emit = defineEmits<{
  (e: 'add-todo', title: string): void;
}>();

const inputTitle: Ref<string> = ref('');

function handleSubmit() {
  emit('add-todo', inputTitle.value);
  inputTitle.value = '';
}
</script>

<template>
  <section>
    <h2>Add Todo</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="inputTitle" />
      <button>add</button>
    </form>
  </section>
</template>

<style scoped>
input {
  padding: 4px;
}

form {
  input {
    width: 100%;
  }

  button {
  }
}
</style>
