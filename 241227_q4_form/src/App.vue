<script setup>
import { ref } from 'vue'
const name = ref(null)
const gender = ref(null)
const hobbies = ref([])
const favoriteFruit = ref(null)

// 名前の必須入力チェック
// 名前の文字数2文字以上10文字以下
// 趣味の選択肢を1つ選ぶ
// 送信ボタンを押すと、コンソールに情報が表示されるようにする
// プレースホルダーの設定
</script>
<template>
  <!-- labelのforとinputのidが同じである必要がある -->
  <div class="wrapper">
    <section>
      <h1>あなたについて</h1>

      <p>あなたの名前は {{ name }} です。</p>
      <p>あなたの性別は {{ gender }} です。</p>
      <p>あなたの趣味は {{ hobbies.join(' と ') }} です。</p>
      <p>あなたの好きなフルーツは {{ favoriteFruit }} です。</p>
    </section>

    <section>
      <h2>入力フォーム</h2>

      <div>
        <label for="name" class="title">Name: </label>
        <input type="text" id="name" v-model="name" />
      </div>

      <fieldset>
        <legend class="title">gender:</legend>

        <ul>
          <li>
            <input type="radio" name="gender" id="man" value="man" v-model="gender" />
            <label for="man">man</label>
          </li>
          <li>
            <input type="radio" name="gender" id="woman" value="woman" v-model="gender" />
            <label for="woman">woman</label>
          </li>
        </ul>
      </fieldset>

      <fieldset>
        <legend class="title">Hobbies:</legend>

        <ul>
          <li>
            <input
              type="checkbox"
              name="hobbies"
              id="reading"
              value="reading books"
              v-model="hobbies"
            />
            <label for="reading">reading books</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="hobbies"
              id="sports"
              value="playing sports"
              v-model="hobbies"
            />
            <label for="sports">playing sports</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="hobbies"
              id="movie"
              value="watching movies"
              v-model="hobbies"
            />
            <label for="movie">watching movies</label>
          </li>
        </ul>
      </fieldset>

      <div>
        <label for="favoriteFruit" class="title">Favorite fruit: </label>

        <select id="favoriteFruit" v-model="favoriteFruit">
          <option disabled value="">- - - - なし - - - -</option>
          <option value="apple">りんご</option>
          <option value="banana">ばなな</option>
          <option value="grape">ぶどう</option>
        </select>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

h1,
h2,
p {
  margin: 0;
}

fieldset {
  padding: 0;
  border: none;
}

legend {
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.wrapper {
  display: flex;
  max-width: 640px;
  font-size: 14px;
  margin: 24px auto 0;
  gap: 24px;
  justify-content: space-between;

  section:nth-child(1) {
    flex: 2;

    & > * + * {
      margin-top: 16px;
    }
  }

  section:nth-child(2) {
    flex: 1;
    background: #f8f8f8;
    padding: 24px;

    & > * + * {
      margin-top: 16px;
    }

    .title {
      display: block;
      font-weight: bold;
    }

    .title + * {
      margin-top: 8px;
    }
  }
}
</style>
