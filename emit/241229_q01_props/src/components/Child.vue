<script setup lang="ts">
const props = defineProps({
  text: String,
});

function Notice() {
  console.log(props.text);
}
</script>
<template>
  <p>Child: {{ text }}</p>
  <button @click="Notice">Notice</button>
</template>

<style scoped></style>
