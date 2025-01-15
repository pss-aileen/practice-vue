<script setup lang="ts">
import { onMounted, ref, watch, type Ref } from 'vue'

/*
  - 要素を作ってイメージを作る
  - Vueで動きを実装する
*/

interface todosType {
  id: number
  title: string
  isCompleted: boolean
}

const todos: Ref<todosType[]> = ref([])

const todoTitleInput: Ref<string> = ref('')

function addTodo() {
  if (!todoTitleInput.value.trim()) {
    return
  }
  todos.value.push({
    id: new Date().getTime(),
    title: todoTitleInput.value,
    isCompleted: false,
  })

  todoTitleInput.value = ''
}

function editTodo(id: number) {
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) {
      let newTodo = ''
      do {
        newTodo = prompt('Edit Title', todo.title) as string
      } while (!newTodo)

      todo.title = newTodo
    }
    return todo
  })
}

function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => {
    return todo.id !== id
  })
}

onMounted(() => {
  // コンポーネントが用意されたら、todoを読み込んで反映する
  const localStorageTodos = localStorage.getItem('myTodos')
  if (localStorageTodos) {
    todos.value = JSON.parse(localStorageTodos)
  }
})

watch(
  todos,
  (newTodos) => {
    localStorage.setItem('myTodos', JSON.stringify(newTodos))
  },
  {
    // trueにすることで、オブジェクトの変更まで見てくれる
    deep: true,
  },
)
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
        <li v-for="todo in todos" :key="todo.id">
          <div>
            <input type="checkbox" v-model="todo.isCompleted" />
            {{ todo.title }}
          </div>
          <div>
            <button @click="editTodo(todo.id)">edit</button>
            <button @click="deleteTodo(todo.id)">delete</button>
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
      button {
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
        div:nth-of-type(1) {
        }
      }

      li + li {
        margin-top: 8px;
      }
    }
  }
}
</style>
