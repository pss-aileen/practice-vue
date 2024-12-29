<script setup lang="ts">
import Child from './components/Child.vue';

const text: string = 'Hello Vue!';
</script>

<template>
  <p>Parent: {{ text }}</p>

  <Child :text="text" />
</template>

<style scoped></style>
