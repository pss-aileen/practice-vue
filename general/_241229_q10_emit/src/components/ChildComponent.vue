<script setup lang="ts">
const emit = defineEmits(['response']);
emit('response', 'CHILD MESSAGE!');
</script>
<template>
  <div></div>
</template>

<style scoped></style>
