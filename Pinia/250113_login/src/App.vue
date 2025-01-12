<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from './stores/user'

const user = useUserStore()
const username = ref('')

function login() {
  user.login(username.value)
  username.value = ''
}
</script>

<template>
  <div>
    <form @submit.prevent="login" v-if="!user.isLoggedIn">
      <input type="text" v-model="username" />
      <button>login</button>
    </form>
    <section v-else>
      <h1>Welcome, {{ user.name }}</h1>
      <button @click="user.logout">logout</button>
    </section>
  </div>
</template>

<style scoped></style>
