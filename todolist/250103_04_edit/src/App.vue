<script setup lang="ts">
import { ref, type Ref } from 'vue'

let idCount: number = 0

const taskInput: Ref<string> = ref('')

type taskType = {
  id: number
  title: string
  isCompleted: boolean
}

const tasks: Ref<taskType[]> = ref([])

function addTask(e: Event) {
  e.preventDefault()
  const task: taskType = {
    id: idCount++,
    title: taskInput.value,
    isCompleted: false,
  }
  tasks.value.push(task)
  taskInput.value = ''
  console.log(tasks.value)
}

function deleteTask(id: number) {
  const newTasks = tasks.value.filter((task) => task.id !== id)
  tasks.value = newTasks
}

function changeCompleted(boolean: boolean) {
  console.log(boolean)
}

function editTask(id: number) {
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
  } else {
    console.log('There is no change.')
  }
}
</script>

<template>
  <section class="wrapper">
    <h1>TASKS LIST</h1>

    <form>
      <input type="text" v-model="taskInput" />
      <button @click="addTask">add</button>
    </form>

    <ul v-if="tasks.length !== 0">
      <li v-for="task in tasks" :key="task.id">
        <input
          type="checkbox"
          v-model="task.isCompleted"
          @change="changeCompleted(task.isCompleted)"
        />
        {{ task.title }}
        <button @click="editTask(task.id)">✍️</button>
        <button @click="deleteTask(task.id)">🗑️</button>
      </li>
    </ul>
    <p v-else>There is no task.</p>
  </section>
</template>

<style scoped>
.wrapper {
  max-width: 400px;
  margin: 0 auto;

  form {
    display: flex;
    gap: 4px;

    input {
      flex: 1;
      padding: 4px;
    }

    button {
      width: 80px;
      padding: 4px;
    }
  }
}
</style>
