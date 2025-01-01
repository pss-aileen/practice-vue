<script setup>
import { computed, ref } from 'vue';

const input = ref('');

const wordCount = computed(() => {
  return input.value.length;
});
</script>

<template>
  <p>入力された文字列の文字数を算出プロパティで計算して表示する。</p>

  <input type="text" v-model="input" />
  <p>{{ wordCount }} 文字</p>
</template>

<style scoped></style>
