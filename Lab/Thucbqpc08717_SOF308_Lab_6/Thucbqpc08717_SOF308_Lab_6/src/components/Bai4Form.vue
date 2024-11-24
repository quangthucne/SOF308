<script setup>
import { ref } from 'vue'
</script>

<template>
  <form v-on:submit.prevent="submitForm">
    <h1 class="title-form text-center">Thêm học sinh</h1>
    <div class="mb-3">
      <label for="fullname" class="form-label">Họ tên:</label>
      <input
        v-model="student.name"
        type="text"
        class="form-control"
        name="fullname"
        id="fullname"
        aria-describedby="nameHelpId"
        placeholder="Nhập họ và tên"
      />
    </div>
    <div class="mb-3">
      <label for="mark" class="form-label">Điểm:</label>
      <input
        v-model="student.score"
        type="number"
        class="form-control"
        name="mark"
        id="mark"
        aria-describedby="markHelpId"
        placeholder="Nhập điểm"
        min="0"
        max="10"
      />
    </div>
    <div class="mb-3">
      <label for="date" class="form-label">Ngày sinh</label>
      <input
        v-model="student.dob"
        type="date"
        class="form-control"
        name="date"
        id="date"
        aria-describedby="dateHelpId"
        placeholder=""
      />
    </div>

    <div class="mb-3">
      <button type="submit" class="btn btn-success">{{ isEditing ? 'Cập nhật' : 'Thêm' }}</button>
    </div>
  </form>
</template>
