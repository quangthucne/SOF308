import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BaiMotLab6 from '@/views/BaiMotLab6.vue'
import BaiHaiLab6 from '@/views/BaiHaiLab6.vue'
import BaiBaLab6 from '@/views/BaiBaLab6.vue'
import BaiBonLab6 from '@/views/BaiBonLab6.vue'
import BaiNamLab6 from '@/views/BaiNamLab6.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/bai-mot',
      name: 'bai-mot',
      component: BaiMotLab6,
    },
    {
      path: '/bai-hai',
      name: 'bai-hai',
      component: BaiHaiLab6,
    },
    {
      path: '/bai-ba',
      name: 'bai-ba',
      component: BaiBaLab6,
    },
    {
      path: '/bai-bon',
      name: 'bai-bon',
      component: BaiBonLab6,
    },
    {
      path: '/bai-nam',
      name: 'bai-nam',
      component: BaiNamLab6,
    },
  ],
})

export default router
