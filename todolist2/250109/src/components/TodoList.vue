<script setup lang="ts">
import type { TodoType } from '../types';

const props = defineProps<{
  todos: TodoType[];
}>();

const emit = defineEmits<{
  (e: 'edit-todo', id: number): void;
  (e: 'delete-todo', id: number): void;
  (e: 'update-localstorage'): void;
}>();
</script>

<template>
  <section class="todos">
    <h2>Todos</h2>

    <ul v-if="props.todos.length !== 0">
      <li v-for="todo in props.todos" :key="todo.id">
        <label>
          <input type="checkbox" v-model="todo.isCompleted" @change="() => emit('update-localstorage')" />
          {{ todo.title }}
        </label>
        <section>
          <span>
            {{ todo.category }}
          </span>
          <button @click="() => emit('edit-todo', todo.id)">✍️</button>
          <button @click="() => emit('delete-todo', todo.id)">❌</button>
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
