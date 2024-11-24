<script setup></script>

<template>
  <div class="create-post">
    <div class="mb-3">
      <label for="title" class="form-label">Tiêu đề bài viết:</label>
      <input
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
      <textarea name="content" id="content" placeholder="Nhập nội dung bài viết..."></textarea>
    </div>
  </div>
</template>
