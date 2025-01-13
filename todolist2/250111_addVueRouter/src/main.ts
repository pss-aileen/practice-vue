import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import HomeView from './HomeView.vue';
import SingleTodo from './SingleTodo.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

const routes = [
  { path: '/', component: HomeView },
  { path: '/single-todo/:id', component: SingleTodo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
