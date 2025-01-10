<script setup lang="ts">
import { ref, type Ref } from 'vue';

/*
  基本のTODO作成
  - 追加: done
  - 表示: done
  - 削除: done
  - 編集
  - ローカルストレージ保存
*/

// todoのtitleの準備
const inputTitle = ref('');

// Todoの型
type TodoType = {
  id: number;
  title: string;
};

// Todosの準備
const todos: Ref<TodoType[]> = ref([]);

// 追加機能
function addTodo() {
  const todo: TodoType = {
    id: new Date().getTime(),
    title: inputTitle.value,
  };

  todos.value.push(todo);
  inputTitle.value = '';

  console.table(todos.value);
}

// 削除機能
function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id);

  console.table(todos.value);
}

// 編集機能
function editTodo(id: number) {
  const currentTodo = todos.value.filter((todo) => {
    return todo.id === id;
  })[0];

  if (currentTodo) {
    const newTitle = prompt('Edit title', currentTodo.title);

    if (currentTodo.title !== newTitle) {
      todos.value = todos.value.map((todo) => {
        if (todo.id === id && newTitle) {
          todo.title = newTitle;
        }
        return todo;
      });
      console.table(todos.value);
    }
  }
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
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
        <button @click="editTodo(todo.id)">✍️</button>
        <button @click="deleteTodo(todo.id)">❌</button>
      </li>
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
