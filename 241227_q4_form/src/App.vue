<script setup>
import { ref } from 'vue'
const name = ref(null)
const gender = ref(null)
const hobbies = ref([])
const favoriteFruit = ref(null)

const errorMessage = ref('フォームを入力してください。')

function submit(e) {
  e.preventDefault()
  if (!name.value) {
    console.log('名前を入力してください。')
    errorMessage.value = '名前を入力してください。'
    return
  }

  if (name.value.split('').length < 3) {
    console.log('名前は最低3文字必要です。')
    errorMessage.value = '名前は最低3文字必要です。'
    return
  }

  if (!gender.value) {
    console.log('性別を選んでください。')
    errorMessage.value = '性別を選んでください。'
    return
  }

  if (hobbies.value.length === 0) {
    console.log('趣味を選んでください。')
    errorMessage.value = '趣味を選んでください。'
    return
  }

  if (!favoriteFruit.value) {
    console.log('好きなフルーツを選んでください。')
    errorMessage.value = '好きなフルーツを選んでください。'
    return
  }

  console.log('送信完了')
  errorMessage.value = '送信完了'

  console.log('name: ', name.value)
  console.log('gender: ', gender.value)
  console.log('hobbies: ', hobbies.value)
  console.log('favoriteFruit: ', favoriteFruit.value)
}
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

      <p>{{ errorMessage }}</p>

      <form>
        <div>
          <label for="name" class="title">Name: </label>
          <input type="text" id="name" v-model="name" required />
        </div>

        <fieldset>
          <legend class="title">gender:</legend>

          <ul>
            <li>
              <input type="radio" name="gender" id="man" value="man" v-model="gender" required />
              <label for="man">man</label>
            </li>
            <li>
              <input
                type="radio"
                name="gender"
                id="woman"
                value="woman"
                v-model="gender"
                required
              />
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
                required
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
                required
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
                required
              />
              <label for="movie">watching movies</label>
            </li>
          </ul>
        </fieldset>

        <div>
          <label for="favoriteFruit" class="title">Favorite fruit: </label>

          <select id="favoriteFruit" v-model="favoriteFruit" required>
            <option disabled value="">- - - - なし - - - -</option>
            <option value="apple">りんご</option>
            <option value="banana">ばなな</option>
            <option value="grape">ぶどう</option>
          </select>
        </div>

        <button @click="submit">submit</button>
      </form>
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
    flex: 1;

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
