<script setup lang="ts">
import { ref, type Ref } from 'vue';
import AComp from './components/AComp.vue';
import BComp from './components/BComp.vue';

const items: Ref<string[]> = ref(['りんご', 'ばなな', 'なし', 'ルレクチェ']);

let count = 0;

function addItem() {
  items.value.push(`New Item ${count++}`);
}
function removeItem() {
  items.value.pop();
}
</script>

<template>
  <ul>
    <li>
      <AComp @add="addItem" />
    </li>
    <li>
      <BComp @remove="removeItem" />
    </li>
  </ul>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped></style>
