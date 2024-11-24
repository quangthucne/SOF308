<script setup></script>

<template>
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
          <button class="btn btn-warning" v-on:click="editStudent">Sửa</button>
        </td>
        <td>
          <button class="btn btn-danger" v-on:click="deleteStudent">Xóa</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
