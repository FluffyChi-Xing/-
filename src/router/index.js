import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout/Layout.vue";
import HomePage from "@/views/Homepage/HomePage.vue";
import LoginPage from "@/views/Login/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Homepage',
          component: HomePage
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})

export default router
