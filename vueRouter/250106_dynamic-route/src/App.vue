<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <h1>top</h1>
  <nav>
    <RouterLink to="/user/1">User1</RouterLink>
    <RouterLink to="/user/2">User2</RouterLink>
    <RouterLink to="/user/3">User3</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
