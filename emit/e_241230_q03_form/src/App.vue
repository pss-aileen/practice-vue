<script setup lang="ts">
import { ref } from 'vue';
import ChildComp from './components/ChildComp.vue';

const message = ref('');

function deleteMessage() {
  message.value = '';
}
</script>

<template>
  <input type="text" v-model="message" />
  <p>parentMessage: {{ message }}</p>
  <ChildComp :message="message" @delete-message="deleteMessage" />
</template>

<style scoped></style>
