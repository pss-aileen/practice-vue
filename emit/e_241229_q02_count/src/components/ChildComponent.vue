<script setup lang="ts">
// 1. イベント "increment" を定義（親コンポーネントに通知するための命令）
const emit = defineEmits(['increment']);

// 2. ボタンをクリックしたら "increment" イベントを親コンポーネントに送る
function handleClick() {
  emit('increment');
  console.log('emit'); // 確認用のログ
}
</script>

<template>
  <p>
    <button @click="handleClick">子コンポーネント追加</button>
  </p>
</template>

<style scoped></style>
