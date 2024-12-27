<script setup>
import { ref } from 'vue';
const tasks = ref([]);
const input = ref(null);

function addTask(e) {
  e.preventDefault();

  if (!input.value || input.value.trim() === '') {
    alert('タスクを入力してください');
    return;
  }
  tasks.value.push(input.value.trim());
  input.value = null;
}

function removeTask(index) {
  tasks.value.splice(index, 1);
}
</script>

<template>
  <h1>リスト</h1>

  <form>
    <label>
      tasks
      <input type="text" v-model="input" />
    </label>
    <button @click="addTask">add</button>
  </form>

  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      {{ task }}

      <button @click="removeTask(index)">x</button>
    </li>
  </ul>
</template>

<style scoped></style>
