<script setup lang="ts">
import { ref } from 'vue';
import ChildButton from './components/ChildButton.vue';

const count = ref(0);
</script>

<template>
  <h1>Count</h1>
  <p>{{ count }}</p>
  <ChildButton @addCount="(c) => count + c" />
</template>

<style scoped></style>
