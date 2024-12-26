<script setup>
import { ref } from 'vue';
const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <button @click="toggle">Toggle Message</button>

  <p v-if="isOpen">Hello Vue!</p>
</template>

<style scoped></style>
