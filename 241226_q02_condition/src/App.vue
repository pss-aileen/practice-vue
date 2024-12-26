<script setup>
import { ref } from 'vue';
const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <button @click="toggle">Toggle Message</button>
  <Transition>
    <p v-show="isOpen">Hello Vue!</p>
  </Transition>
  <p>他のテキスト</p>
  <!-- <p v-show="isOpen">Goodbye Vue!</p> -->
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
