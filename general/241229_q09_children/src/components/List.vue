<template>
  <div>
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
  name: string;
}>();
</script>

<style scoped></style>
