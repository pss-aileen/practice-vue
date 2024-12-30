<script setup lang="ts">
// 1.命令、イベントを定義する
const emit = defineEmits(['increment']);

// 2.ボタンをクリックしたら、イベント定義したものを親コンポーネントに渡す
function handleClick() {
  emit('increment');
  console.log('emit');
}
</script>
<template>
  <p>
    <button @click="handleClick">子コンポーネント追加</button>
  </p>
</template>

<style scoped></style>
