<script setup>
import { ref, computed } from 'vue';
const input = ref('');
// この状態だと toUpperCaseがfunctionではないと表示がでる
// const upppercase = computed(() => {
//   return input.toUpperCase();
// });
// ref null だと toUpperCaseではエラーになる
// なので ref は "" でから文字にする
// 内容の呼び出しには value を使う
const upppercase = computed(() => {
  return input.value.toUpperCase();
});
</script>

<template>
  <p>入力された文字列を算出プロパティで大文字に変換して表示する。</p>

  <input type="text" v-model="input" />
  <p>{{ upppercase }}</p>
</template>

<style scoped></style>
