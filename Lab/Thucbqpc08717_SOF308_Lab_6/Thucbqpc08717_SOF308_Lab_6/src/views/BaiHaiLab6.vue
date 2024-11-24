<script setup>
import { ref } from 'vue'
const month = ref(0)
console.log(month.value)
</script>

<template>
  <div class="mb-3">
    <label for="month" class="form-label">Nhập một tháng bất kì:</label>
    <input
      v-model="month"
      type="number"
      class="form-control"
      name="month"
      id="month"
      aria-describedby="idHelpText"
      placeholder="Nhập một tháng bất kì"
    />
    <small class="form-text text-muted" id="idHelpText" v-if="month < 1 || month > 12"
      >Không có tháng này</small
    >
    <small id="idHelpText" class="form-text text-muted" v-else-if="month >= 1 && month <= 3"
      >Mùa Xuân</small
    >
    <small id="idHelpText" class="form-text text-muted" v-else-if="month >= 4 && month <= 6"
      >Mùa Hạ</small
    >
    <small id="idHelpText" class="form-text text-muted" v-else-if="month >= 7 && month <= 9"
      >Mùa Thu</small
    >
    <small id="idHelpText" class="form-text text-muted" v-else>Mùa Đông</small>
  </div>
</template>
