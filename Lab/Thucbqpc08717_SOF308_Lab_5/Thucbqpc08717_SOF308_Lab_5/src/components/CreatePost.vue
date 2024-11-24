<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-post'])
const title = ref('')
const content = ref('')
const author = ref('')

function submitPost() {
  if (title.value && content.value && author.value) {
    console.log('nút đã dc clicking')
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
    }
    emit('add-post', newPost)

    title.value = ''
    content.value = ''
    author.value = ''
  }
}
</script>

<template>
  <div class="create-post">
    <div class="mb-3">
      <label for="title" class="form-label">Tiêu đề bài viết:</label>
      <input
        v-model="title"
        type="text"
        class="form-control"
        name="title"
        id="title"
        aria-describedby="helpId"
        placeholder="Nhập tiêu đề bài viết"
      />
      <small id="helpId" class="form-text text-muted">Help text</small>
    </div>
    <div class="mb-3">
      <label for="author" class="form-label">Tên tác giả:</label>
      <input
        v-model="author"
        type="text"
        class="form-control"
        name="author"
        id="author"
        aria-describedby="helpId"
        placeholder="Nhập tên tác giả"
      />
      <small id="helpId" class="form-text text-muted">Help text</small>
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">Nội dung bài viết: </label>
      <textarea
        v-model="content"
        name="content"
        id="content"
        placeholder="Nhập nội dung bài viết..."
      ></textarea>
    </div>

    <button @click="submitPost">Đăng bài</button>
  </div>
</template>

<style>
input,
textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
}
button {
  padding: 10px 20px;
  background-color: darkturquoise;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
