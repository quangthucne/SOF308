<script setup>
import { ref } from 'vue'
const message = ref('Thông điệp ban đầu')
const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!'
}
</script>
<template>
  <div class="p-5">
    <p>{{ message }}</p>
    <button class="btn btn-dark" v-on:click="updateMessage">Thay đổi thông điệp</button>
  </div>
</template>
