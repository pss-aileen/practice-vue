<script setup lang="ts">
import { ref, type Ref } from 'vue';

type categoryType = {
  id: number;
  title: string;
};
const categories: Ref<categoryType[]> = ref([]);
const inputCategory: Ref<string> = ref('');

function addCategory() {
  const category = {
    id: new Date().getTime(),
    title: inputCategory.value,
  };
  categories.value.push(category);
  inputCategory.value = '';
  console.table(categories.value);
  updateLocalStorage();
}

function deleteCategory(id: number) {
  categories.value = categories.value.filter((category) => category.id !== id);

  console.table(categories.value);
  updateLocalStorage();
}

function editCategory(id: number) {
  const currentCategory = categories.value.filter((category) => {
    return category.id === id;
  })[0];

  if (currentCategory) {
    const newTitle = prompt('Edit title', currentCategory.title);

    if (currentCategory.title !== newTitle) {
      categories.value = categories.value.map((category) => {
        if (category.id === id && newTitle) {
          category.title = newTitle;
        }
        return category;
      });
      console.table(categories.value);
      updateLocalStorage();
    }
  }
}

const localStorageValue = localStorage.getItem('myTodoCategories');
if (localStorageValue) {
  categories.value = JSON.parse(localStorageValue);
}

function updateLocalStorage() {
  localStorage.setItem('myTodoCategories', JSON.stringify(categories.value));
  const localStorageValue = localStorage.getItem('myTodoCategories');
  if (localStorageValue) {
    console.log('updated: localStorage');
    console.log(JSON.parse(localStorageValue));
  }
}
</script>

<template>
  <section class="category">
    <h2>Category</h2>

    <form @submit.prevent="addCategory">
      <input type="text" v-model="inputCategory" />
      <button>add</button>
    </form>

    <ul v-if="categories.length !== 0">
      <li v-for="category in categories" :key="category.id">
        <div>
          {{ category.title }}
        </div>

        <section>
          <button @click="editCategory(category.id)">✍️</button>
          <button @click="deleteCategory(category.id)">🗑️</button>
        </section>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.category {
  form {
    margin-top: 16px;
  }

  ul {
    padding: 0;
    list-style: none;
    li {
      display: flex;

      div {
        flex: 1;
      }
      section {
      }
    }
  }
}
</style>
