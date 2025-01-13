<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="wrapper">
    <header>
      <h1>TODO LIST</h1>
    </header>

    <nav>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/single-todo">single-todo</RouterLink>
    </nav>

    <div>
      <RouterView />
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  max-width: 800px;
  margin: 32px auto;
}
</style>
