<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { usetodosStore } from './stores/todos'

const todoStore = usetodosStore()

const todoTitleInput: Ref<string> = ref('')

function addTodo() {
  todoStore.addTodo(todoTitleInput.value)
  todoTitleInput.value = ''
}

interface currentCategoryType {
  id: 'uncategorized' | number
  title: string
}

const currentCategory: Ref<currentCategoryType> = ref({
  id: 'uncategorized',
  title: 'Uncategorized',
})

const modalIsOpen: Ref<boolean> = ref(false)

const categories: Ref<currentCategoryType[]> = ref([
  {
    id: 'uncategorized',
    title: 'Uncategorized',
  },
  {
    id: 12345,
    title: 'test2',
  },
])

const categoryTitleInput: Ref<string> = ref('')

function addCategory() {
  categories.value.push({
    id: new Date().getTime(),
    title: categoryTitleInput.value,
  })

  categoryTitleInput.value = ''
}

function selectCategory(id: 'uncategorized' | number) {
  currentCategory.value = categories.value.filter((category) => category.id === id)[0]
}

function editCategory(id: 'uncategorized' | number) {
  categories.value = categories.value.map((category) => {
    if (category.id === id) {
      let newCategory = ''
      do {
        newCategory = prompt('Edit Title', category.title) as string
      } while (!newCategory)

      category.title = newCategory
    }
    return category
  })
}

function deleteCategory(id: 'uncategorized' | number) {
  categories.value = categories.value.filter((category) => category.id !== id)
}
</script>

<template>
  <section class="wrapper">
    <h1>Todo List</h1>

    <section class="add-todo">
      <h2>Add Todo</h2>
      <form @submit.prevent="addTodo">
        <section>
          <input type="text" v-model="todoTitleInput" />
          <button>Add</button>
        </section>
        <section>
          <p @click="() => (modalIsOpen = !modalIsOpen)">
            <!-- あとでここはcomputedがいいかも -->
            {{ currentCategory.title }}
          </p>

          <div class="modal-overlay" v-if="modalIsOpen"></div>
          <section class="modal-category" v-if="modalIsOpen">
            <form @submit.prevent="addCategory">
              <input type="text" v-model="categoryTitleInput" />
              <button>add</button>
            </form>
            <ul>
              <li v-for="category in categories" :key="category.id">
                <!-- カテゴリー名をクリックしたらカテゴリー名とidがアップデートされる -->
                <div
                  :class="currentCategory.id === category.id ? 'is-selected' : ''"
                  @click="selectCategory(category.id)"
                >
                  {{ category.title }}
                </div>
                <div v-if="category.id !== 'uncategorized'">
                  <button @click="editCategory(category.id)">edit</button>
                  <button @click="deleteCategory(category.id)">delete</button>
                </div>
              </li>
            </ul>
            <footer>
              <button @click="() => (modalIsOpen = !modalIsOpen)">close</button>
            </footer>
          </section>
          <!-- カテゴリー追加ボタンを押したらpromptが出て、追加される -->
          <!-- 削除編集は....ポップアップ画面で -->
        </section>
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
      // display: flex;
      // input {
      //   flex: 1;
      // }

      section {
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          background: #000;
          opacity: 0.4;
          width: 100%;
          height: 100%;
        }
        .modal-category {
          background: #fff;
          padding: 24px;
          border-radius: 8px;
          position: fixed;
          top: 50%;
          left: 50%;
          width: 50%;
          transform: translateY(-50%) translateX(-50%);

          ul {
            list-style: none;
            padding: 0;
            margin-top: 16px;

            li {
              display: flex;

              div:nth-of-type(1) {
                flex: 1;
              }

              div.is-selected {
                background: #eee;
              }
            }

            li + li {
              margin-top: 8px;
            }
          }

          footer {
            text-align: right;
            button {
              margin-top: 16px;
            }
          }
        }
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
