import { defineStore } from 'pinia';

export const useTodosFilter = defineStore('filter', {
  state: () => {
    return {
      filter: [
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
    };
  },
  actions: {
    
  }
});
