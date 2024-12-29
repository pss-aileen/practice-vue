<template>
  <div>
    {{ props.name }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';


const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
