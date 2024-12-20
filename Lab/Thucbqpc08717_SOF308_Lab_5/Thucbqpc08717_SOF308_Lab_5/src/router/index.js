import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BaiMotLab5 from '@/views/BaiMotLab5.vue'
import BaiHaiLab5 from '@/views/BaiHaiLab5.vue'
import BaiBaLab5 from '@/views/BaiBaLab5.vue'
import BaiBonLab5 from '@/views/BaiBonlab5.vue'

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
      component: BaiMotLab5,
    },
    {
      path: '/bai-hai',
      name: 'bai-hai',
      component: BaiHaiLab5,
    },
    {
      path: '/bai-ba',
      name: 'bai-ba',
      component: BaiBaLab5,
    },
    {
      path: '/bai-bon',
      name: 'bai-bon',
      component: BaiBonLab5,
    },
  ],
})

export default router
