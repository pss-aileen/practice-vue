<script setup>
import { ref, watch } from 'vue';

const inputText = ref('');

watch(inputText, (newVal, oldVal) => {
  console.log(`値が変わりました: ${oldVal} → ${newVal}`);
});

const textLength = ref(0);
watch(inputText, (newVal) => {
  textLength.value = newVal.length;
});
</script>

<template>
  <p>{{ textLength }}</p>
  <input type="text" v-model="inputText" />
</template>

<style scoped></style>
