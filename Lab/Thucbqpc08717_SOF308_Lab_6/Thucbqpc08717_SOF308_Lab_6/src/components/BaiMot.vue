<script setup>
import { ref } from 'vue'
const mark = ref(0)
</script>

<template>
  <h2>Bùi Quang Thực nè</h2>
  <div class="mb-3">
    <label for="diemTB" class="form-label">Điểm:</label>
    <input
      v-model="mark"
      type="number"
      class="form-control"
      name="diemTB"
      id="diemTB"
      aria-describedby="idHelpText"
      placeholder="Nhập điểm"
    />
    <small id="idHelpText" class="form-text text-muted" v-if="mark >= 9">Xuất sắc</small>
    <small id="idHelpText" class="form-text text-muted" v-else-if="mark >= 8">Giỏi</small>
    <small id="idHelpText" class="form-text text-muted" v-else-if="mark >= 7">Khá</small>
    <small id="idHelpText" class="form-text text-muted" v-else-if="mark >= 5">Trung bình</small>
    <small id="idHelpText" class="form-text text-muted" v-else>Yếu</small>
  </div>
</template>
