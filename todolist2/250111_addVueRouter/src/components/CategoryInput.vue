<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { categoryType } from '../types';

const inputCategory: Ref<string> = ref('');

const props = defineProps<{
  categories: categoryType[];
}>();

const emit = defineEmits<{
  (e: 'add-category', title: string): void;
  (e: 'edit-category', id: number): void;
  (e: 'delete-category', id: number): void;
  (e: 'update-localstorage'): void;
}>();
</script>

<template>
  <section class="category">
    <h2>Category</h2>

    <form @submit.prevent="() => emit('add-category', inputCategory)">
      <input type="text" v-model="inputCategory" />
      <button>add</button>
    </form>

    <ul v-if="props.categories.length !== 0">
      <li v-for="category in props.categories" :key="category.id">
        <div>
          {{ category.title }}
        </div>

        <section>
          <button @click="() => emit('edit-category', category.id)">✍️</button>
          <button @click="() => emit('delete-category', category.id)">🗑️</button>
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
