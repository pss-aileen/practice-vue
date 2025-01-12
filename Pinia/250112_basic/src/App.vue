<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

counter.increment()
</script>

<template>
  <div>Current Count: {{ counter.count }}</div>
  <div>{{ counter.double }}</div>
  <button @click="counter.increment">increment</button>
</template>

<style scoped></style>
