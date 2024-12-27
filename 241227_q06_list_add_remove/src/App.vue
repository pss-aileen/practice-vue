<script setup>
import { ref } from 'vue';
const tasks = ref([]);
const input = ref(null);

function addTask(e) {
  e.preventDefault();
  tasks.value.push(input.value);
  input.value = null;
}

function removeTask(e) {
  const parentNode = e.target.parentNode;
  parentNode.remove();
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

      <button @click="removeTask">x</button>
    </li>
  </ul>
</template>

<style scoped></style>
