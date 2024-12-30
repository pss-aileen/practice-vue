<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const count = ref(0);

// 3. 子コンポーネントのイベント "increment" を受け取り、カウントを増やす関数
function addCount() {
  count.value++;
}
</script>

<template>
  <!-- 親コンポーネントのカウント表示 -->
  <h2>Count: {{ count }}</h2>

  <!-- 親コンポーネント自身のボタン -->
  <p>
    <button @click="addCount">親コンポーネント追加</button>
  </p>

  <!-- 4. 子コンポーネントが "increment" を発火したら、addCount を実行 -->
  <ChildComponent @increment="addCount" />
</template>

<style scoped></style>
