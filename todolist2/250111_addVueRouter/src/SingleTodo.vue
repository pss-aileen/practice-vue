<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useTodosStore } from './stores/todos';

const todos = useTodosStore();

const route = useRoute();
const singleTodo = todos.getSingleTodo(route.params.id);
console.table(singleTodo);
</script>

<template>
  <div>single todo {{ $route.params.id }}</div>

  <dl>
    <dt>id</dt>
    <dd>{{ singleTodo?.id }}</dd>
    <dt>title</dt>
    <dd>{{ singleTodo?.title }}</dd>
    <dt>isCompleted</dt>
    <dd>{{ singleTodo?.isCompleted }}</dd>
    <dt>categoryId</dt>
    <dd>{{ singleTodo?.categoryId }}</dd>
  </dl>
</template>

<style scoped>
dl {
  dt {
    font-weight: bold;
  }

  dd {
    margin: 0;
  }

  dd + dt {
    margin-top: 16px;
  }
}
</style>
