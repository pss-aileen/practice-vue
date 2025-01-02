<script setup lang="ts">
import { computed, ref, type ComputedRef, type Ref } from 'vue';

const filteringSetting: Ref<'all' | 'hobby' | 'age'> = ref('all');

const filteringName = computed(() => {
  if (filteringSetting.value === 'hobby') {
    return '趣味がが映画の人:';
  }
  if (filteringSetting.value === 'age') {
    return '年齢が30歳以上の人:';
  }
  return 'ユーザー一覧';
});

type userProps = {
  name: string;
  birthday: string;
  hobbies: string[];
};

const users: Ref<userProps[]> = ref([
  { name: '太郎', birthday: '2000-05-15', hobbies: ['読書', '映画'] },
  { name: '花子', birthday: '1995-10-20', hobbies: ['料理', '旅行'] },
  { name: '次郎', birthday: '1988-03-12', hobbies: ['スポーツ', '音楽'] },
]);

const filteredUsers: ComputedRef<userProps[]> = computed(() => {
  if (filteringSetting.value === 'hobby') {
    const filteredUserByHobby = users.value.filter((user) => {
      const sameHobby = user.hobbies.filter((hobby) => {
        return hobby === '映画';
      });
      console.log(sameHobby);
      return sameHobby.length > 0;
    });
    console.log('hobbyです');
    return filteredUserByHobby;
  }

  if (filteringSetting.value === 'age') {
    const filteredUserByAge = users.value.filter((user) => {
      const now = new Date();
      const birthday = new Date(user.birthday);
      const age = now.getFullYear() - birthday.getFullYear();
      return age >= 30; // 例: 25歳以上をフィルタリング
    });
    return filteredUserByAge;
  }

  console.log('all です。');
  const editedUsers = users.value.map((user) => {
    const now = new Date();
    const birthday = new Date(user.birthday);
    const nowYear = now.getFullYear();
    const birthdayYear = birthday.getFullYear();
    const age = nowYear - birthdayYear;
    console.log(age);
    console.log(user.name);

    return { ...user, birthday: String(age) }; // 新しいオブジェクトを返す
  });

  return editedUsers;
});
</script>

<template>
  <h1>user filtering</h1>

  <button @click="() => (filteringSetting = 'all')">list users</button>
  <button @click="() => (filteringSetting = 'hobby')">hobby filtering</button>
  <button @click="() => (filteringSetting = 'age')">age filtering</button>

  <p>フィルタリング: {{ filteringName }}</p>
  <ul v-if="filteredUsers.length > 0">
    <li v-for="user in filteredUsers" :key="user.name">
      {{ user.name }}
    </li>
  </ul>
  <p v-else>該当のユーザーが存在しません。</p>
</template>

<style scoped></style>
