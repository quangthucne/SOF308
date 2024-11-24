<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import BaiMot from './components/BaiMot.vue'
import BaiHai from './components/BaiHai.vue'
import BaiBa from './components/BaiBa.vue'
import BaiBon from './components/BaiBon.vue'
</script>

<template>
  <main>
    <section class="bai-mot">
      <BaiMot />
    </section>
    <section class="bai-hai">
      <BaiHai />
    </section>
    <section class="bai-ba">
      <BaiBa />
    </section>
    <section class="bai-bon">
      <BaiBon />
    </section>
  </main>
</template>

<style scoped></style>
