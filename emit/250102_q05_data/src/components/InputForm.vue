<script setup lang="ts">
import { ref, type Ref } from 'vue';

const emit = defineEmits<{
  (e: 'add-task', title: string): void;
}>();

const title: Ref<string> = ref('');

function handleClick(e: Event) {
  e.preventDefault();
  emit('add-task', title.value);
  title.value = '';
}
</script>
<template>
  <form>
    <input type="text" v-model="title" />

    <button @click="handleClick">add item</button>
  </form>
</template>

<style scoped></style>
