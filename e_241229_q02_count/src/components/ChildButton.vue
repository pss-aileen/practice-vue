<script setup lang="ts">
// const emit = defineEmits(['addCount']);

const emit = defineEmits<{
  addCount: [count: number];
}>;

function handleClick() {
  emit('addCount', 1);
}
</script>

<template>
  <button>add count</button>
</template>

<style scoped></style>
