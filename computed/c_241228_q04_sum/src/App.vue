<script setup>
import { computed, ref } from 'vue';

const numbers = ref([]);
const inputNumber = ref('');

function addNumber(e) {
  e.preventDefault();
  numbers.value.push(inputNumber.value);
  console.log(numbers.value);
  inputNumber.value = '';
}

const sum = computed(() => numbers.value.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0));
</script>

<template>
  <p>{{ numbers }}</p>
  <p>{{ sum }}</p>
  <form>
    <input type="number" v-model="inputNumber" />
    <button @click="addNumber">追加</button>
  </form>
</template>

<style scoped></style>
