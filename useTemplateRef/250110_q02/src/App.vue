<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const input1 = useTemplateRef('input1');
const input2 = useTemplateRef('input2');

function focusSecondInput() {
  input2.value?.focus();
}

onMounted(() => {
  input1.value?.focus();
});
</script>

<template>
  <div>
    <input type="text" ref="input1" placeholder="1" />
    <input type="text" ref="input2" placeholder="2" />
    <button @click="focusSecondInput">2番目にフォーカス</button>
  </div>
</template>

<style scoped></style>
