<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}
function decrement() {
  // 0以下にならないようにする
  if (count.value <= 0) {
    return;
  }
  count.value--;
}
function reset() {
  count.value = 0;
}
</script>

<template>
  <p>現在のカウント数 {{ count }}</p>
  <p v-show="count >= 10">やったね！今10以上です！</p>
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
