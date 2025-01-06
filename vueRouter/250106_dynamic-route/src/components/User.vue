<script setup lang="ts">
import { computed, ref } from 'vue';

import allUser from './../data.json';
import { useRoute } from 'vue-router';

const route = useRoute();

const userInfo = ref([]);

const data = computed(() => {
  return allUser.find((user) => user.id === parseInt(route.params.id));
});

console.log(allUser);
</script>

<template>
  {{ $route.params.id }}
  {{ data }}
</template>

<style scoped></style>
