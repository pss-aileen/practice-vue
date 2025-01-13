<script setup lang="ts">
import { useTodosStore } from '../stores/todos';
import { useTodoCategories } from '../stores/category';

const todos = useTodosStore();
const categories = useTodoCategories();
</script>

<template>
  <section class="todos">
    <h2>Todos</h2>

    <ul v-if="todos.filteredTodos.length !== 0">
      <li v-for="todo in todos.filteredTodos" :key="todo.id">
        <label>
          <input type="checkbox" v-model="todo.isCompleted" @change="() => todos.saveLocalStorageData()" />
          {{ todo.title }}
        </label>
        <section>
          <span>
            {{ categories.categories.find((item) => item.id === todo.categoryId)?.title }}
          </span>
          <button @click="() => todos.editTodo(todo.id)">✍️</button>
          <button @click="() => todos.deleteTodo(todo.id)">🗑️</button>
        </section>
      </li>
    </ul>
    <p v-else>There is no todos.</p>
  </section>
</template>

<style scoped>
.todos {
  p {
    margin-top: 16px;
  }
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
