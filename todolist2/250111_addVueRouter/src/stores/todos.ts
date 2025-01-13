import { defineStore } from 'pinia';
import type { TodoType } from '../types';

export const useTodosStore = defineStore('todos', {
  state: () => {
    const localStorageValue = localStorage.getItem('myTodo');
    if (localStorageValue) {
      return { todos: JSON.parse(localStorageValue) as TodoType[] };
    }
    return { todos: [] as TodoType[] };
  },
  getters: {
    jsonTodos(state) {
      return JSON.stringify(state.todos);
    },
    filteredTodos(state) {
      // if (currentFilter.value === 'incompleted') {
      //   return this.todos.filter((todo) => !todo.isCompleted);
      // }
      // if (currentFilter.value === 'completed') {
      //   return this.todos.filter((todo) => todo.isCompleted);
      // }

      // for (let i = 0; i < categories.value.length; i++) {
      //   if (currentFilter.value === categories.value[i].id) {
      //     return this.todos.filter((todo) => todo.categoryId === categories.value[i].id);
      //   }
      // }
      return state.todos;
    },
  },
  actions: {
    saveLocalStorageData() {
      localStorage.setItem('myTodo', JSON.stringify(this.todos));
      const localStorageValue = localStorage.getItem('myTodo');
      if (localStorageValue) {
        console.log('updated: localStorage');
        console.log(JSON.parse(localStorageValue));
      }
    },
    addTodo(title: string, categoryId: number) {
      const todo: TodoType = {
        id: new Date().getTime(),
        title: title,
        isCompleted: false,
        categoryId: categoryId,
      };

      this.todos.push(todo);
      console.table(this.todos);
      this.saveLocalStorageData();
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);

      console.table(this.todos);
      this.saveLocalStorageData();
    },
    editTodo(id: number) {
      const currentTodo = this.todos.filter((todo) => {
        return todo.id === id;
      })[0];

      if (currentTodo) {
        const newTitle = prompt('Edit title', currentTodo.title);

        if (currentTodo.title !== newTitle) {
          this.todos = this.todos.map((todo) => {
            if (todo.id === id && newTitle) {
              todo.title = newTitle;
            }
            return todo;
          });
          console.table(this.todos);
          this.saveLocalStorageData();
        }
      }
    },
  },
});
