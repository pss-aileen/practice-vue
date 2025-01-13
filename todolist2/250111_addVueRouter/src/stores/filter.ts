import { defineStore } from 'pinia';
import { useTodoCategories } from './category';
import type { currentFilterType } from '../types';

export const useTodosFilter = defineStore('filter', {
  state: () => {
    const categories = useTodoCategories();
    const categoriesFilter = [];
    for (let i = 0; i < categories.categories.length; i++) {
      const filter = {
        filterName: categories.categories[i].id,
        displayName: categories.categories[i].title,
      };
      categoriesFilter.push(filter);
    }

    return {
      currentFilter: 'all' as string | number,
      baseFilter: [
        {
          filterName: 'all',
          displayName: 'All',
        },
        {
          filterName: 'completed',
          displayName: 'Completed',
        },
        {
          filterName: 'incompleted',
          displayName: 'Incompleted',
        },
      ],
      categoryFilter: categoriesFilter,
    };
  },
  actions: {
    updateCurrentFilter(filterName: currentFilterType) {
      this.currentFilter = filterName;
    },
  },
});
