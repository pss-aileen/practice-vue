<script setup lang="ts">
import InputForm from './components/InputForm.vue';
import FilterSetting from './components/FilterSetting.vue';
import TodoList from './components/TodoList.vue';
import CategoryInput from './components/CategoryInput.vue';
</script>

<template>
  <div>
    <main>
      <InputForm />
      <TodoList />
    </main>
    <aside>
      <FilterSetting />
      <CategoryInput />
    </aside>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 32px;
  margin-top: 32px;

  main {
    flex: 3;

    & > * + * {
      margin-top: 32px;
    }
  }

  aside {
    flex: 1;

    & > * + * {
      margin-top: 32px;
    }
  }
}
</style>
