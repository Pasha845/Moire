import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      name: 'main',
      path: '/',
      component: () => import('@/views/MainView.vue')
    },
    {
      name: 'product',
      path: '/product/:id',
      component: () => import('@/views/ProductView.vue')
    },
    {
      name: 'basket',
      path: '/basket',
      component: () => import('@/views/CartPage.vue')
    }
  ]
});

export default router
