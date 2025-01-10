<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import InputForm from './components/InputForm.vue';
import FilterSetting from './components/FilterSetting.vue';
import TodoList from './components/TodoList.vue';
import type { currentFilterType, TodoType } from './types';

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
  <section class="wrapper">
    <header>
      <h1>TODO LIST</h1>
    </header>

    <div>
      <main>
        <InputForm @add-todo="addTodo" />
        <TodoList :todos="filteredTodos" @edit-todo="editTodo" @delete-todo="deleteTodo" @update-localstorage="updateLocalStorage" />
      </main>
      <aside>
        <FilterSetting @update-current-filter="updateCurrentFilter" :current-filter="currentFilter" />
      </aside>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  max-width: 800px;
  margin: 32px auto;

  & > div {
    display: flex;
    gap: 32px;
    margin-top: 32px;

    main {
      flex: 1;

      & > * + * {
        margin-top: 32px;
      }
    }

    aside {
    }
  }
}
</style>
