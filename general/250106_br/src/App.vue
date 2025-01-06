<script setup>
const text = 'こんにちは！テストですよ！/nここで改行がはいってほしいんです！！！/nお願いします！';
const splitedLines = text.split('/n');
</script>

<template>
  <p>
    <span v-for="(line, index) in splitedLines" :key="index">{{ line }}<br v-if="index !== splitedLines.length - 1" /> </span>
  </p>
</template>

<style scoped></style>
