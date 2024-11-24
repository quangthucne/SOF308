<script setup>
import { ref } from 'vue'
const userInput = ref('Bùi Quang Thực')
</script>
<template>
  <div>
    <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
    <p>Giá trị bạn nhập: {{ userInput }}</p>
  </div>
</template>
