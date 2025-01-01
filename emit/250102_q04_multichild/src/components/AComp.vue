<script setup lang="ts">
const emit = defineEmits(['add']);
function handleClick() {
  emit('add');
}
</script>
<template>
  <button @click="handleClick">A: Add Item</button>
</template>

<style scoped></style>
