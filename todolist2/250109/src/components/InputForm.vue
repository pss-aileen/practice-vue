<script setup lang="ts">
import { ref, type Ref } from 'vue';

const emit = defineEmits<{
  (e: 'add-todo', title: string): void;
}>();

const inputTitle: Ref<string> = ref('');

// function handleClick() {
//   emit('add-todo', inputTitle.value);
//   inputTitle.value = '';
// }
</script>

<template>
  <div>
    <!-- <form @submit.prevent="addTodo"> -->
    <form @submit.prevent="() => emit('add-todo', inputTitle)">
      <input type="text" v-model="inputTitle" />
      <button>add</button>
    </form>
  </div>
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
