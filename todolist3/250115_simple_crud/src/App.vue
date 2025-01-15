<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { usetodosStore } from './stores/todos'

const todoStore = usetodosStore()

const todoTitleInput: Ref<string> = ref('')

function addTodo() {
  todoStore.addTodo(todoTitleInput.value)
  todoTitleInput.value = ''
}
</script>

<template>
  <section class="wrapper">
    <h1>Todo List</h1>

    <section class="add-todo">
      <h2>Add Todo</h2>
      <form @submit.prevent="addTodo">
        <input type="text" v-model="todoTitleInput" />
        <button>Add</button>
      </form>
    </section>
    <section class="todo-list">
      <h2>List</h2>
      <ul>
        <li v-for="todo in todoStore.todos" :key="todo.id">
          <div>
            <input type="checkbox" v-model="todo.isCompleted" />
            {{ todo.title }}
          </div>
          <div>
            <button @click="todoStore.editTodo(todo.id)">edit</button>
            <button @click="todoStore.deleteTodo(todo.id)">delete</button>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 400px;
  margin: 48px auto;

  h1 {
    font-size: 32px;
    text-align: center;
  }

  & > * + section {
    margin-top: 32px;
  }

  & > section {
    h2 {
      font-size: 16px;
    }
    h2 + * {
      margin-top: 16px;
    }
  }

  .add-todo {
    form {
      display: flex;
      input {
        flex: 1;
      }
    }
  }

  .todo-list {
    ul {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        gap: 8px;

        div:nth-of-type(1) {
          flex: 1;
        }
      }

      li + li {
        margin-top: 8px;
      }
    }
  }
}
</style>
