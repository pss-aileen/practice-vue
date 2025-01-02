<script setup lang="ts">
import { ref, type Ref } from 'vue';
import ChildComp from './components/ChildComp.vue';

const items: Ref<string[]> = ref([]);

function addItem(item: string) {
  items.value.push(item);
}

function removeItem() {
  items.value.pop();
}
</script>

<template>
  <ChildComp @add="addItem" @remove="removeItem" />

  <ul v-if="items.length !== 0">
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
  <p v-else>Itemがありません。</p>
</template>

<style scoped></style>
