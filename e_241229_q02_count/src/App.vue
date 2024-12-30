<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const count = ref(0);

// 4.結果的にここでカウントが追加される
function addCount() {
  count.value++;
}
</script>

<template>
  <h2>Count: {{ count }}</h2>

  <p>
    <button @click="addCount">親コンポーネント追加</button>
  </p>
  <!-- 3.子コンポーネントのincrementがクリック？放出されたら、addCountを発火する -->
  <ChildComponent @increment="addCount" />
</template>

<style scoped></style>
