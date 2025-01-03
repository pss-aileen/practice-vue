<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'

const taskInput: Ref<string> = ref('')
const message: Ref<string> = ref('')
const taskInputCount = computed(() => {
  return taskInput.value.length
})
const validatedInput = computed(() => {
  return taskInput.value.trim()
})
type taskType = {
  id: number
  title: string
  isCompleted: boolean
}

const tasks: Ref<taskType[]> = ref([])

const localStorageValue = localStorage.getItem('myTodo')
if (localStorageValue) {
  tasks.value = JSON.parse(localStorageValue)
}

function updateLocalStorage() {
  localStorage.setItem('myTodo', JSON.stringify(tasks.value))
  const localStorageValue = localStorage.getItem('myTodo')
  if (localStorageValue) {
    console.log(JSON.parse(localStorageValue))
  }
}

function addTask(e: Event) {
  e.preventDefault()
  console.log(validatedInput.value.length)

  if (validatedInput.value.length <= 3) {
    console.log('文字数が足りません')
    return
  } else if (validatedInput.value.length > 30) {
    console.log('文字数が30文字を超えています。')
    return
  }

  const task: taskType = {
    id: new Date().getTime(),
    title: validatedInput.value,
    isCompleted: false,
  }
  tasks.value.push(task)
  message.value = `「${task.title}」を追加しました。`
  taskInput.value = ''
  // console.log(tasks.value)
  updateLocalStorage()
}

function deleteTask(id: number, title: string) {
  const newTasks = tasks.value.filter((task) => task.id !== id)
  tasks.value = newTasks
  message.value = `「${title}」を削除しました。`
  updateLocalStorage()
}

function changeCompleted(boolean: boolean) {
  console.log(boolean)
  updateLocalStorage()
}

function editTask(id: number, title: string) {
  const newTaskTitle: string | null = prompt('Edit here')
  console.log(newTaskTitle)

  if (newTaskTitle !== '') {
    const newTasks = tasks.value.map((task) => {
      if (task.id === id) {
        const newTask = {
          ...task,
          title: newTaskTitle as string,
        }

        return newTask
      }

      return task
    })

    tasks.value = newTasks
    message.value = `「${title}」を「${newTaskTitle}」に変更しました`
    updateLocalStorage()
  } else {
    console.log('There is no change.')
    message.value = `「${title}」は変更されませんでした`
  }
}
</script>

<template>
  <section class="wrapper">
    <h1>TASKS LIST</h1>

    <section class="add-task">
      <h2>タスクを追加する</h2>
      <form>
        <!-- <input type="text" v-model="taskInput" /> -->
        <textarea v-model="taskInput"></textarea>
        <button @click="addTask">add</button>
      </form>
      <p>{{ taskInputCount }} / 30 文字</p>
    </section>

    <p class="message">{{ message }}</p>

    <ul v-if="tasks.length !== 0">
      <li v-for="task in tasks" :key="task.id">
        <input
          type="checkbox"
          v-model="task.isCompleted"
          @change="changeCompleted(task.isCompleted)"
        />

        <span>
          {{ task.title }}
        </span>
        <div>
          <button @click="editTask(task.id, task.title)">✍️</button>
          <button @click="deleteTask(task.id, task.title)">🗑️</button>
        </div>
      </li>
    </ul>
    <p v-else>There is no task.</p>
  </section>
</template>

<style scoped>
.wrapper {
  max-width: 400px;
  margin: 32px auto;

  h1 {
  }

  .add-task {
    margin-top: 16px;
    h2 {
      font-size: 14px;
    }

    p {
      text-align: right;
      font-size: 12px;
    }

    form {
      display: flex;
      gap: 4px;
      margin-top: 8px;

      textarea {
        flex: 1;
        padding: 4px;
      }

      button {
        width: 80px;
        padding: 4px;
      }
    }
  }

  .message {
    background: #eee;

    padding: 16px;
    margin-top: 16px;
    border-radius: 4px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 24px;
    li {
      display: flex;
      gap: 8px;
      align-items: start;

      span {
        flex: 1;
      }

      div {
        width: fit-content;
        margin-left: auto;
        margin-right: 0;
        display: flex;
        gap: 4px;
      }
    }

    li + li {
      margin-top: 8px;
    }
  }
}
</style>
