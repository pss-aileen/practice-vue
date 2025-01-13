<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import InputForm from './components/InputForm.vue';
import FilterSetting from './components/FilterSetting.vue';
import TodoList from './components/TodoList.vue';
import CategoryInput from './components/CategoryInput.vue';
import { RouterLink } from 'vue-router';
import { useTodosStore } from './stores/todos';
import { useTodoCategories } from './stores/category';
import type { currentFilterType } from './types';

/*
  TODOS
*/

const todos = useTodosStore();
const categories = useTodoCategories();
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
        <InputForm />
        <TodoList />
      </main>
      <aside>
        <FilterSetting />
        <CategoryInput />
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
