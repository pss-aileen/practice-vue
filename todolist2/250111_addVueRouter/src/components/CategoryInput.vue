<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useTodoCategories } from '../stores/category';

const inputCategory: Ref<string> = ref('');
const categories = useTodoCategories();
</script>

<template>
  <section class="category">
    <h2>Category</h2>

    <form @submit.prevent="() => categories.addCategory(inputCategory)">
      <input type="text" v-model="inputCategory" />
      <button>add</button>
    </form>

    <ul v-if="categories.categories.length !== 0">
      <li v-for="category in categories.categories" :key="category.id">
        <div>
          {{ category.title }}
        </div>

        <section>
          <button @click="() => categories.editCategory(category.id)">✍️</button>
          <button @click="() => categories.deleteCategory(category.id)">🗑️</button>
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
