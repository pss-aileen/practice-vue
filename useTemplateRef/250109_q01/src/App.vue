<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const myInput = useTemplateRef('myInput');

onMounted(() => {
  myInput.value?.focus();
});
</script>

<template>
  <div>
    <input type="text" ref="myInput" />
  </div>
</template>

<style scoped></style>
