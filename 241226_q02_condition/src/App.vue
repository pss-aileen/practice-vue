<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<template>
  <!-- <button @click="toggle">Toggle Message</button> -->
  <button @click="isOpen = !isOpen">Toggle Message</button>

  <p v-if="isOpen">Hello Vue!</p>
</template>

<style scoped></style>
