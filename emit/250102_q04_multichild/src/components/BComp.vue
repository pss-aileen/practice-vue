<script setup lang="ts">
const emit = defineEmits(['remove']);
function handleClick() {
  emit('remove');
}
</script>

<template>
  <button @click="handleClick">B: Remove item</button>
</template>

<style scoped></style>
