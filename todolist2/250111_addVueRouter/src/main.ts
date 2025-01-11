import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import HomeView from './HomeView.vue';
import SingleTodo from './SingleTodo.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: HomeView },
  { path: '/single-todo', component: SingleTodo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
