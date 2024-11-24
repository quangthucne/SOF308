<script setup>
import { ref } from 'vue'

const students = ref([
  { name: 'Bùi Quang Thực', score: 9, dob: '2005-10-03' },
  { name: 'Bùi Quang Thọt', score: 9, dob: '2005-10-03' },
])

const student = ref({
  name: '',
  score: null,
  dob: '',
})
let isEditing = ref(false)
let editingIndex = ref(null)

function submitForm() {
  if (isEditing.value) {
    students.value[editingIndex.value] = { ...student.value }
    isEditing.value = false
    editingIndex.value = null
    console.log(students.value)
  } else {
    students.value.push({ ...student.value })
    console.log(students.value)
  }
  resetForm()
}
function editStudent(index) {
  student.value = { ...students.value[index] }
  isEditing.value = true
  editingIndex.value = index
}

function deleteStudent(index) {
  students.value.splice(index, 1)
}

function resetForm() {
  student.value = {
    name: '',
    score: null,
    dob: '',
  }
}
</script>

<template>
  <h1>Bài bốn lab 6</h1>
  <section class="row">
    <div class="col-4">
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
            pattern="\d{2}-\d{2}-\d{4}"
            max="24-11-2024"
          />
        </div>

        <div class="mb-3">
          <button type="submit" class="btn btn-success">
            {{ isEditing ? 'Cập nhật' : 'Thêm' }}
          </button>
        </div>
      </form>
    </div>
    <div class="col-8">
      <h3 class="table-title">Danh sách học sinh</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Họ và tên</th>
            <th>Điểm</th>
            <th>Ngày sinh</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(stu, index) in students" v-bind:ref="index">
            <td>{{ stu.name }}</td>
            <td>{{ stu.score }}</td>
            <td>{{ stu.dob }}</td>
            <td>
              <button class="btn btn-warning" v-on:click="editStudent(index)">Sửa</button>
            </td>
            <td>
              <button class="btn btn-danger" v-on:click="deleteStudent(index)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
