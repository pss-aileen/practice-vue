import { defineStore } from 'pinia';
import type { categoryType } from '../types';

export const useTodoCategories = defineStore('categories', {
  state: () => {
    const localStorageCategoriesValue = localStorage.getItem('myTodoCategories');
    if (localStorageCategoriesValue) {
      return { categories: JSON.parse(localStorageCategoriesValue) as categoryType[] };
    }
    return { categories: [] as categoryType[] };
  },
  actions: {
    saveLocalStorageData() {
      localStorage.setItem('myTodoCategories', JSON.stringify(this.categories));
      const localStorageCategoriesValue = localStorage.getItem('myTodoCategories');
      if (localStorageCategoriesValue) {
        console.log('updated: localStorage');
        console.log(JSON.parse(localStorageCategoriesValue));
      }
    },
    addCategory(title: string) {
      const category = {
        id: new Date().getTime(),
        title: title,
      };
      this.categories.push(category);
      title = '';
      this.saveLocalStorageData();
      console.table(this.categories);
    },
    editCategory(id: number) {
      const currentCategory = this.categories.filter((category) => {
        return category.id === id;
      })[0];

      if (currentCategory) {
        const newTitle = prompt('Edit title', currentCategory.title);

        if (currentCategory.title !== newTitle) {
          this.categories = this.categories.map((category) => {
            if (category.id === id && newTitle) {
              category.title = newTitle;
            }
            return category;
          });
          console.table(this.categories);
          this.saveLocalStorageData();
        }
      }
    },
    deleteCategory(id: number) {
      this.categories = this.categories.filter((category) => category.id !== id);
      console.table(this.categories);
      this.saveLocalStorageData();
    },
  },
});
