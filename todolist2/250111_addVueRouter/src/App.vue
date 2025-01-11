<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import InputForm from './components/InputForm.vue';
import FilterSetting from './components/FilterSetting.vue';
import TodoList from './components/TodoList.vue';
import type { categoryType, currentFilterType, TodoType } from './types';
import CategoryInput from './components/CategoryInput.vue';
import { RouterLink } from 'vue-router';

/*
  TODOS
*/

// Todosの準備
const todos: Ref<TodoType[]> = ref([]);

const localStorageValue = localStorage.getItem('myTodo');
if (localStorageValue) {
  todos.value = JSON.parse(localStorageValue);
}

// 追加機能
function addTodo(title: string, categoryId: number) {
  const todo: TodoType = {
    id: new Date().getTime(),
    title: title,
    isCompleted: false,
    categoryId: categoryId,
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

/*
  CATEGORIES
*/

const categories: Ref<categoryType[]> = ref([]);

function addCategory(title: string) {
  const category = {
    id: new Date().getTime(),
    title: title,
  };
  categories.value.push(category);
  title = '';
  console.table(categories.value);
  updateCategoriesLocalStorage();
}

function deleteCategory(id: number) {
  categories.value = categories.value.filter((category) => category.id !== id);

  console.table(categories.value);
  updateCategoriesLocalStorage();
}

function editCategory(id: number) {
  const currentCategory = categories.value.filter((category) => {
    return category.id === id;
  })[0];

  if (currentCategory) {
    const newTitle = prompt('Edit title', currentCategory.title);

    if (currentCategory.title !== newTitle) {
      categories.value = categories.value.map((category) => {
        if (category.id === id && newTitle) {
          category.title = newTitle;
        }
        return category;
      });
      console.table(categories.value);
      updateCategoriesLocalStorage();
    }
  }
}

const localStorageCategoriesValue = localStorage.getItem('myTodoCategories');
if (localStorageCategoriesValue) {
  categories.value = JSON.parse(localStorageCategoriesValue);
}

function updateCategoriesLocalStorage() {
  localStorage.setItem('myTodoCategories', JSON.stringify(categories.value));
  const localStorageCategoriesValue = localStorage.getItem('myTodoCategories');
  if (localStorageCategoriesValue) {
    console.log('updated: localStorage');
    console.log(JSON.parse(localStorageCategoriesValue));
  }
}
/*
  FILTER
*/
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

  for (let i = 0; i < categories.value.length; i++) {
    if (currentFilter.value === categories.value[i].id) {
      return todos.value.filter((todo) => todo.categoryId === categories.value[i].id);
    }
  }

  return todos.value;
});
</script>

<template>
  <section class="wrapper">
    <header>
      <h1>TODO LIST</h1>
    </header>

    <nav>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/single-todo">single-todo</RouterLink>
    </nav>

    <RouterView />

    <div>
      <main>
        <InputForm @add-todo="addTodo" :categories="categories" />
        <TodoList :todos="filteredTodos" :categories="categories" @edit-todo="editTodo" @delete-todo="deleteTodo" @update-localstorage="updateLocalStorage" />
      </main>
      <aside>
        <FilterSetting @update-current-filter="updateCurrentFilter" :current-filter="currentFilter" :categories="categories" />
        <CategoryInput :categories="categories" @add-category="addCategory" @edit-category="editCategory" @delete-category="deleteCategory" @update-category="updateCategoriesLocalStorage" />
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
      flex: 3;

      & > * + * {
        margin-top: 32px;
      }
    }

    aside {
      flex: 1;

      & > * + * {
        margin-top: 32px;
      }
    }
  }
}
</style>
