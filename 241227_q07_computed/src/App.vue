<script setup>
import { ref, computed } from 'vue';

const userList = [
  { name: 'ちび子', birthday: '2010-05-15', hobbies: ['音楽', 'ダンス'] },
  { name: '太郎', birthday: '2000-05-15', hobbies: ['読書', '料理'] },
  { name: '花子', birthday: '1995-10-20', hobbies: ['料理', 'ダンス'] },
  { name: '次郎', birthday: '1988-03-12', hobbies: ['ダンス', '音楽'] },
];

const conditionTitle = ref('title');

const filteredList = computed(() => {
  // ここにボタンごとの条件か何かを入れる...？
});

function calcAge(birthday) {
  const now = new Date().getTime();
  const birtyday = new Date(birthday).getTime();

  const difference = now - birtyday;

  const MS_IN_YEAR = 365 * 24 * 60 * 60 * 1000; // 1年のミリ秒数
  const year = Math.floor(difference / MS_IN_YEAR);

  console.log(now, birtyday, difference);
  console.log(year);

  return year;
}

/*
まった、computedで表示する内容を変えるのかも。
*/

/*
  日付
  - 今日の日付を取得
  - 入力された日付から現在の年数を計算する
  - 表示する
*/

// ユーザー情報から趣味のリストを作成
let hobbiesList = [];
for (let i = 0; i < userList.length; i++) {
  hobbiesList = [...hobbiesList, ...userList[i].hobbies];
}
const uniquehobbiesList = [...new Set(hobbiesList)];

let isShowAll = ref(false);
let isHobbyFilter = ref(false);
let isAgeFilter = ref(false);

function showAll() {
  conditionTitle.value = 'UserList';
  isShowAll.value = true;
  isHobbyFilter.value = false;
  isAgeFilter.value = false;
}

function showHobbyFilter() {
  conditionTitle.value = 'HobbyFilter: ';
  isShowAll.value = false;
  isHobbyFilter.value = true;
  isAgeFilter.value = false;
}

function showAgeFilter() {
  conditionTitle.value = 'AgeFilter: ';
  isShowAll.value = false;
  isHobbyFilter.value = false;
  isAgeFilter.value = true;
}
</script>

<template>
  <section class="wrapper">
    <h1>User Info</h1>

    <div class="container">
      <section>
        <h2>Condition:</h2>
        <h3>{{ conditionTitle }}</h3>
        <ul v-if="isShowAll">
          <li v-for="(user, index) in userList" :key="index">{{ user.name }}: {{ calcAge(user.birthday) }}歳</li>
        </ul>
        <ul v-if="isHobbyFilter">
          <li v-for="(user, index) in userList" :key="index">{{ user.name }}: {{ user.birthday }}</li>
          hobby
        </ul>
        <ul v-if="isAgeFilter">
          <li v-for="(user, index) in userList" :key="index">{{ user.name }}: {{ user.birthday }}</li>
          age
        </ul>
      </section>

      <section>
        <h2>Menu:</h2>
        <ul>
          <li>
            ユーザー一覧
            <ul>
              <li><button @click="showAll">ユーザー一覧表示</button></li>
            </ul>
          </li>
          <li>
            趣味でフィルター
            <ul>
              <li v-for="(item, index) in uniquehobbiesList" :key="index">
                <!-- ここで itemの値を渡してフィルタリングする -->
                <button @click="showHobbyFilter">{{ item }}</button>
              </li>
            </ul>
          </li>
          <li>
            年齢層でフィルター
            <ul>
              <li><button @click="showAgeFilter">10歳以上</button></li>
              <li><button>20歳以上</button></li>
              <li><button>30歳以上</button></li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

h1,
h2,
h3,
p {
  margin: 0;
}

button {
  cursor: pointer;
}

ul {
  margin: 0;
  padding-left: 1.25em;

  li {
    margin-top: 4px;
    & > ul {
      margin-bottom: 12px;
    }
  }
}

.wrapper {
  max-width: 640px;
  margin: 48px auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  h1 {
    font-size: 32px;
    text-align: center;
  }
  .container {
    display: flex;
    margin-top: 24px;
    gap: 24px;

    section {
      flex: 1;
      padding: 24px;

      h2 + * {
        margin-top: 16px;
      }

      h3 + * {
        margin-top: 16px;
      }
    }

    section:nth-child(2) {
      background: #f8f8f8;
    }
  }
}
</style>
