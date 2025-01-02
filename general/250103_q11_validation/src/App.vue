<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';

const name: Ref<string> = ref('');

const nameMessage: Ref<string> = ref('入力してください');

const isValid: Ref<boolean | null> = ref(null);

watch(name, (newName) => {
  if (newName.length === 0) {
    nameMessage.value = '入力してください';
    isValid.value = false;
  } else if (newName.length <= 3 || newName.length > 10) {
    isValid.value = false;
    nameMessage.value = `${newName.length} 文字`;
  } else {
    isValid.value = true;
    nameMessage.value = `${newName.length} 文字`;
  }
});
</script>

<template>
  <form>
    <table>
      <tbody>
        <tr>
          <th>
            <label for="name">お名前 <span>必須</span></label>
          </th>
          <td>
            <input type="text" id="name" v-model="name" />
            <p :class="!isValid && name.length !== 0 ? 'error' : ''">{{ nameMessage }}</p>
            <p>3文字以上、10文字以下</p>
          </td>
        </tr>
        <tr>
          <th>
            <label for="email">メールアドレス <span>必須</span></label>
          </th>
          <td>
            <input type="text" id="email" />
            <p>@gmail.comのみ受け付けます。</p>
          </td>
        </tr>
        <tr>
          <th>
            <label for="age">年齢 <span>必須</span></label>
          </th>
          <td><input type="text" id="age" /></td>
        </tr>
        <tr>
          <th>
            <label for="password">パスワード <span>必須</span></label>
          </th>
          <td><input type="text" id="password" /></td>
        </tr>
        <tr>
          <th>
            <label for="tel">電話番号 <span>必須</span></label>
          </th>
          <td><input type="text" id="tel" /></td>
        </tr>
        <tr>
          <th>
            <label for="url">URL <span>必須</span></label>
          </th>
          <td><input type="text" id="url" /></td>
        </tr>
        <tr>
          <th>
            <label for="gender">性別 <span>必須</span></label>
          </th>
          <td><input type="text" id="gender" /></td>
        </tr>
        <tr>
          <th>
            <label for="live">お住まい <span>必須</span></label>
          </th>
          <td><input type="text" id="live" /></td>
        </tr>
        <tr>
          <th>
            <label for="birthday">誕生日 <span>必須</span></label>
          </th>
          <td><input type="text" id="birthday" /></td>
        </tr>
        <tr>
          <th>
            <label for="content">お問合せ内容 <span>必須</span></label>
          </th>
          <td>
            <textarea name="" id="content"></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <button>送信</button>
  </form>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

p {
  margin: 0;
}
table {
  width: 100%;
  max-width: 480px;

  input,
  textarea {
    width: 100%;
    padding: 4px;
  }

  th {
    text-align: left;
    span {
      color: red;
      font-size: 10px;
    }
  }

  td {
    width: 64%;

    p {
      font-size: 12px;
    }

    .error {
      color: red;
    }
  }
}
</style>
