<script setup>
const movies = ['Inception', 'The Matrix', 'Interstellar', 'Spirited Away', 'The Godfather'];
</script>

<template>
  <h1>Favorite Movies</h1>
  <ul>
    <li v-for="(movie, index) in movies" :key="index">
      {{ movie }}
    </li>
  </ul>
</template>

<style scoped></style>
