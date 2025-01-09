<script setup lang="ts">
import { ref, type Ref } from 'vue';

/* 
  基本のTODO作成
  - 追加
  - 表示
  - 削除
  - 編集
  - ローカルストレージ保存
*/

const inputTitle = ref('');

type TodoType = {
  title: string;
};

const todos: Ref<TodoType[]> = ref([]);

function addTodo() {
  const todo: TodoType = {
    title: inputTitle.value,
  };

  todos.value.push(todo);

  console.table(todos.value);

  inputTitle.value = '';
}
</script>

<template>
  <section>
    <h1>TODO LIST</h1>

    <form @submit.prevent="addTodo">
      <input type="text" v-model="inputTitle" />
      <button>add</button>
    </form>

    <ul v-if="todos.length !== 0">
      <li v-for="(todo, index) in todos" :key="index">{{ todo.title }}</li>
    </ul>
  </section>
</template>

<style scoped>
section {
  max-width: 480px;
  margin: 0 auto;

  form {
    input {
      width: 100%;
    }

    button {
    }
  }
}
</style>
