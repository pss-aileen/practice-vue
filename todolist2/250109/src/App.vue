<script setup lang="ts">
import { ref, type Ref, type VNodeRef } from 'vue';

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
  isEditing: boolean;
};

// Todosの準備
const todos: Ref<TodoType[]> = ref([]);

// 追加機能
function addTodo() {
  const todo: TodoType = {
    id: new Date().getTime(),
    title: inputTitle.value,
    isEditing: false,
  };

  todos.value.push(todo);
  inputTitle.value = '';

  console.table(todos.value);
}

// 削除機能
function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id);

  console.table(todos.value);
}

// 編集機能
function editTodo(id: number) {
  // editTodoをおすと、入力欄に変わる
  // まず、フォーカスされるようにする、んでフォーカスがはずれたら保存されるようにする
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) {
      todo.isEditing = true;
    }
    return todo;
  });

  console.log(id);
}

function editFinish(id: number) {
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) {
      todo.isEditing = false;
    }
    return todo;
  });
}
</script>

<template>
  <section>
    <h1>TODO LIST</h1>

    <form @submit.prevent="addTodo">
      <input type="text" v-model="inputTitle" />
      <button>add</button>
    </form>

    <ul v-if="todos.length !== 0">
      <li v-for="todo in todos" :key="todo.id">
        <span @click="editTodo(todo.id)" v-if="!todo.isEditing">
          {{ todo.title }}
        </span>
        <input
          type="text"
          :value="todo.title"
          v-else
          @blur="editFinish(todo.id)"
          :ref="
            (el) => {
              console.log(el);
              if (el) {
                el.focus();
              }
            }
          "
        />
        <button @click="deleteTodo(todo.id)">❌</button>
      </li>
    </ul>
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
