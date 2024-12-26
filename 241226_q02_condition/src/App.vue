<script setup>
import { ref } from 'vue';
const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <button @click="toggle">Toggle Message</button>

  <p v-show="isOpen">Hello Vue!</p>
  <!-- <p v-show="isOpen">Goodbye Vue!</p> -->
</template>

<style scoped></style>
