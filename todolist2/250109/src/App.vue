<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue';

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
  isCompleted: boolean;
};

// Todosの準備
const todos: Ref<TodoType[]> = ref([]);

const localStorageValue = localStorage.getItem('myTodo');
if (localStorageValue) {
  todos.value = JSON.parse(localStorageValue);
}

// 追加機能
function addTodo() {
  const todo: TodoType = {
    id: new Date().getTime(),
    title: inputTitle.value,
    isCompleted: false,
  };

  todos.value.push(todo);
  inputTitle.value = '';

  console.table(todos.value);
  updateLocalStorage();
}

// 削除機能
function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id);

  console.table(todos.value);
  updateLocalStorage();
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
      updateLocalStorage();
    }
  }
}

// save on localStorage
function updateLocalStorage() {
  localStorage.setItem('myTodo', JSON.stringify(todos.value));
  const localStorageValue = localStorage.getItem('myTodo');
  if (localStorageValue) {
    console.log(JSON.parse(localStorageValue));
  }
}

const currentFilter: Ref<'all' | 'incompleted' | 'completed'> = ref('all');

const filteredTodos = computed(() => {
  if (currentFilter.value === 'incompleted') {
    return todos.value.filter((todo) => !todo.isCompleted);
  }
  if (currentFilter.value === 'completed') {
    return todos.value.filter((todo) => todo.isCompleted);
  }

  return todos.value;
});
</script>

<template>
  <section>
    <h1>TODO LIST</h1>

    <form @submit.prevent="addTodo">
      <input type="text" v-model="inputTitle" />
      <button>add</button>
    </form>

    <section>
      <h2>setting</h2>
      <button @click="() => (currentFilter = 'completed')" :disabled="currentFilter === 'completed'">完了のみ</button>
      <button @click="() => (currentFilter = 'incompleted')" :disabled="currentFilter === 'incompleted'">未完了のみ</button>
      <button @click="() => (currentFilter = 'all')" :disabled="currentFilter === 'all'">全部</button>
    </section>

    <section>
      <h2>todos</h2>

      <ul v-if="filteredTodos.length !== 0">
        <li v-for="todo in filteredTodos" :key="todo.id">
          <label>
            <input type="checkbox" v-model="todo.isCompleted" @change="() => updateLocalStorage()" />
            {{ todo.title }}
          </label>
          <button @click="editTodo(todo.id)">✍️</button>
          <button @click="deleteTodo(todo.id)">❌</button>
        </li>
      </ul>
    </section>
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
