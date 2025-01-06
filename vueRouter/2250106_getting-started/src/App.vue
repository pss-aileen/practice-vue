<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h1>App.vue</h1>
  <nav>
    <RouterLink to="/">HOME</RouterLink>
    <RouterLink to="/about">ABOUT</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
