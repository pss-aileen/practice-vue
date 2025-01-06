import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import User from './components/User.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/user/:id',
      component: User,
    },
  ],
});

createApp(App).use(router).mount('#app');
