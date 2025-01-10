<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';

const list = ref([1, 2, 3]);

const itemRefs = useTemplateRef('items');

onMounted(() => {
  console.log(itemRefs.value);
  console.log(itemRefs.value?.[1]);
  itemRefs.value?.[0].classList.add('test');
});
</script>

<template>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped>
.test {
  background: red;
}
</style>
