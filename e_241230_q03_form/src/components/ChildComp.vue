<script setup lang="ts">
// const props = defineProps({
//   message: String,
// });

const props = defineProps<{
  message: string;
}>();
const emit = defineEmits(['delete-message']);

function handleClick() {
  emit('delete-message');
  console.log('Event emitted: delete-message');
}
</script>
<template>
  <p>childComponent: {{ props.message }}</p>
  <button @click="handleClick">delete message</button>
</template>

<style scoped></style>
