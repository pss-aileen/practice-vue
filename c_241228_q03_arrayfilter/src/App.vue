<script setup>
import { computed, ref } from 'vue';

const array = ref([1, 2, 3, 4, 5, 6, 7, 8]);

const filteredArray = computed(() => {
  return array.value.filter((number) => {
    return number % 2 === 0;
  });
});
</script>

<template>
  <p>配列の中から偶数だけ出力する</p>

  <ul>
    <li v-for="(number, index) in filteredArray" :key="index">
      {{ number }}
    </li>
  </ul>
</template>

<style scoped></style>
