<script setup>
import { computed, ref } from 'vue';

const input = ref('');

const userList = ref(['太郎', '花子', '次郎', '三郎', 'ねこ', 'いぬ', 'あられ', '子太郎']);

const filteredUserList = computed(() => {
  if (input.value === '') {
    return userList.value;
  } else {
    return userList.value.filter((user) => {
      return user.includes(input.value);
    });
  }
});
</script>

<template>
  <input type="text" v-model="input" />
  <ul>
    <li v-for="(user, index) in filteredUserList" :key="index">
      {{ user }}
    </li>
  </ul>
</template>

<style scoped></style>
