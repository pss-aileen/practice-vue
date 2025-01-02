<script setup lang="ts">
import { ref } from 'vue';

const input = ref('');

const message = ref('itemを追加してください');

const emit = defineEmits<{
  (e: 'add', input: string): void;
  (e: 'remove'): void;
}>();

function add(e: Event) {
  e.preventDefault();
  const item = input.value.trim();
  if (item === '') {
    message.value = 'itemが入力されていません';
    return;
  }

  emit('add', item);
  message.value = `「${item}」 が追加されました！`;
  input.value = '';
  console.log(item);
}

function remove(e: Event) {
  e.preventDefault();
  emit('remove');
}
</script>

<template>
  <p>{{ message }}</p>
  <form>
    <input type="text" v-model="input" />
    <div>
      <button @click="add" type="submit">追加</button>
    </div>
    <div>
      <button @click="remove" type="button">削除</button>
    </div>
  </form>
</template>

<style scoped></style>
