<script setup>
import { ref } from 'vue'
const month = ref(0)
</script>

<template>
  <div class="mb-3">
    <label for="month" class="form-label">Nhập một tháng bất kì:</label>
    <input
      v-model="month"
      type="text"
      class="form-control"
      name="month"
      id="month"
      aria-describedby="helpId"
      placeholder="Nhập một tháng bất kì"
    />
    <small id="helpId" class="form-text text-muted" v-if="month >= 1 || month <= 3">Mùa Xuân</small>
    <small id="helpId" class="form-text text-muted" v-else-if="month >= 4 || month <= 6"
      >Mùa Hạ</small
    >
    <small id="helpId" class="form-text text-muted" v-else-if="month >= 7 || month <= 9"
      >Mùa Thu</small
    >
    <small id="helpId" class="form-text text-muted" v-else>Mùa Đông</small>
  </div>
</template>
