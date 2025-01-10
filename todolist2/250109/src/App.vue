<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import InputForm from './components/InputForm.vue';
import FilterSetting from './components/FilterSetting.vue';
import TodoList from './components/TodoList.vue';
import type { currentFilterType, TodoType } from './types';

// Todoの型

// Todosの準備
const todos: Ref<TodoType[]> = ref([]);

const localStorageValue = localStorage.getItem('myTodo');
if (localStorageValue) {
  todos.value = JSON.parse(localStorageValue);
}

// 追加機能
function addTodo(title: string) {
  const todo: TodoType = {
    id: new Date().getTime(),
    title: title,
    isCompleted: false,
  };

  todos.value.push(todo);

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
    console.log('updated: localStorage');
    console.log(JSON.parse(localStorageValue));
  }
}

const currentFilter: Ref<currentFilterType> = ref('all');

function updateCurrentFilter(filterName: currentFilterType) {
  currentFilter.value = filterName;
}

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

    <InputForm @add-todo="addTodo" />
    <FilterSetting @update-current-filter="updateCurrentFilter" :current-filter="currentFilter" />
    <TodoList :todos="filteredTodos" @edit-todo="editTodo" @delete-todo="deleteTodo" @update-localstorage="updateLocalStorage" />
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
section {
  max-width: 480px;
  margin: 0 auto;
}
</style>
