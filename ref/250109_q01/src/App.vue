<script setup lang="ts">
import { ref, type Ref } from 'vue';

const myInput: Ref<HTMLInputElement | null> = ref(null);

function focusInput() {
  if (myInput.value) {
    myInput.value.focus();
  }
}
</script>

<template>
  <div>
    <input type="text" ref="myInput" />
    <button @click="focusInput">フォーカスを当てる</button>
  </div>
</template>

<style scoped></style>
