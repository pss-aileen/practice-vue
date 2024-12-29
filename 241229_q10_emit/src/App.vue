<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const childMessage = ref('I do not recieve message.');
</script>

<template>
  <ChildComponent @response="(msg) => (childMessage = msg)" />
  <p>{{ childMessage }}</p>
</template>

<style scoped></style>
