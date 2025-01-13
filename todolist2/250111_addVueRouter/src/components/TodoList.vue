<script setup lang="ts">
import { onMounted } from 'vue';
import type { categoryType } from '../types';
import { useTodosStore } from '../stores/todos';

const todos = useTodosStore();

const props = defineProps<{
  categories: categoryType[];
}>();

onMounted(() => {
  console.log(props.categories[0].title);
});
</script>

<template>
  <section class="todos">
    <h2>Todos</h2>

    <ul v-if="todos.todos.length !== 0">
      <li v-for="todo in todos.todos" :key="todo.id">
        <label>
          <input type="checkbox" v-model="todo.isCompleted" @change="() => todos.saveLocalStorageData()" />
          {{ todo.title }}
        </label>
        <section>
          <span>
            {{ props.categories.find((item) => item.id === todo.categoryId)?.title }}
          </span>
          <button @click="() => todos.editTodo(todo.id)">✍️</button>
          <button @click="() => todos.deleteTodo(todo.id)">🗑️</button>
        </section>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.todos {
  ul {
    list-style: none;
    padding: 0;

    li + li {
      margin-top: 8px;
    }

    li {
      display: flex;
      label {
        flex: 1;
      }

      section {
        span {
          display: inline-block;
          font-size: 12px;
          padding: 4px 16px;
          background: #eee;
          border-radius: 999px;
          margin-right: 8px;
          width: 80px;
          text-align: center;
        }
      }
    }
  }
}
</style>
