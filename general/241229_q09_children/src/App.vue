<script setup lang="ts">
import List from './components/List.vue';

const lists: string[] = ['いち', 'にー', 'さん', 'しー', 'ご'];
</script>

<template>
  <ul>
    <li v-for="(item, index) in lists" :key="index">
      <List :name="item" />
    </li>
  </ul>
</template>

<style scoped></style>
