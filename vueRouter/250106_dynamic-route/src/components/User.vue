<script setup lang="ts">
import { computed, ref } from 'vue';

import allUser from './../data.json';
import { useRoute } from 'vue-router';

const route = useRoute();

const data = computed(() => {
  return allUser.find((user) => {
    if (route.params.id.length > 1) {
      return undefined;
    }
    return user.id === parseInt(route.params.id[0]);
  });
});

console.log(allUser);
</script>

<template>
  <ul>
    <li>
      {{ $route.params.id }}
    </li>
    <li v-if="data">Hello {{ data.user }}!</li>
    <li v-else>There is no data related with {{ $route.params.id }}</li>
  </ul>
</template>

<style scoped></style>
