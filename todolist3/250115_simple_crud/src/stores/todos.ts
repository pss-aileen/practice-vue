import { defineStore } from 'pinia'
import { onMounted, ref, watch, type Ref } from 'vue'

export const usetodosStore = defineStore('todos', () => {
  interface todosType {
    id: number
    title: string
    isCompleted: boolean
  }

  const todos: Ref<todosType[]> = ref([])

  function addTodo(todoTitleInput: string) {
    if (!todoTitleInput.trim()) {
      return
    }
    todos.value.push({
      id: new Date().getTime(),
      title: todoTitleInput,
      isCompleted: false,
    })
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
    todos.value = todos.value.filter((todo) => todo.id !== id)
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
  return {
    todos,
    addTodo,
    editTodo,
    deleteTodo,
  }
})
