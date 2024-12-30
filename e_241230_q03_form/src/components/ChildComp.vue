<script setup lang="ts">
const props = defineProps({
  message: String,
});

const emit = defineEmits(['deleteMessage']);

function handleClick() {
  emit('deleteMessage');
  console.log('emit delete Message');
}
</script>
<template>
  <p>childComponent: {{ props.message }}</p>
  <button @click="handleClick">delete message</button>
</template>

<style scoped></style>
