<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
function reset() {
  count.value = 0;
}
</script>

<template>
  <p>現在のカウント数 {{ count }}</p>
  <ul>
    <li>
      <button @click="increment">increment counter</button>
    </li>
    <li>
      <button @click="decrement">decrement counter</button>
    </li>
    <li>
      <button @click="reset">reset counter</button>
    </li>
  </ul>
</template>

<style scoped></style>
