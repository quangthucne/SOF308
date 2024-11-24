<script setup>
import img1 from '../assets/img/image1.png'
import img2 from '../assets/img/image2.png'
import img3 from '../assets/img/image.png'
const items = [
  { title: '8 loại rau củ quả giàu canxi', content: 'Canxi là...', image: img1 },
  { title: 'Các loại gia vị tốt cho sức...', content: 'Một số loại...', image: img2 },
  { title: '9 loại đậu bổ dưỡng nên dùng', content: 'Đậu lăng...', image: img3 },
]
</script>
<template>
  <div class="container mt-5">
    <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card">
          <img :src="item.image" alt="Hình ảnh" height="100" />
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
