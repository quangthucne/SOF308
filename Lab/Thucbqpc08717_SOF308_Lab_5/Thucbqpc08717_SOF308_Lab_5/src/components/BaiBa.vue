<script setup>
import { reactive } from 'vue'

// Dữ liệu phản ứng
const reactiveData = reactive({
  name: 'Nguyễn Văn A',
  age: 21,
})

// Dữ liệu thường
const normalData = {
  name: 'Nguyễn Văn B',
  age: 30,
}

// Cập nhật dữ liệu phản ứng
const updateReactiveData = () => {
  reactiveData.name = 'Trần Thị C'
  reactiveData.age += 1
}

// Cập nhật dữ liệu thường (không tự động cập nhật UI)
const updateNormalData = () => {
  normalData.name = 'Phạm Văn D'
  normalData.age += 1
  alert('Dữ liệu thông thường đã thay đổi, nhưng UI không tự cập nhật!')
}
</script>

<template>
  <div class="p-5">
    <h3>Sử dụng reactive</h3>
    <p><strong>Tên:</strong> {{ reactiveData.name }}</p>
    <p><strong>Tuổi:</strong> {{ reactiveData.age }}</p>
    <button class="btn btn-dark mb-3" @click="updateReactiveData">Cập nhật dữ liệu reactive</button>

    <h3>Không sử dụng reactive</h3>
    <p><strong>Tên:</strong> {{ normalData.name }}</p>
    <p><strong>Tuổi:</strong> {{ normalData.age }}</p>
    <button class="btn btn-warning" @click="updateNormalData">Cập nhật dữ liệu thông thường</button>
  </div>
</template>
