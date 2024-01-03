import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout/Layout.vue";
import HomePage from "@/views/Homepage/HomePage.vue";
import LoginPage from "@/views/Login/LoginPage.vue";
import NotFound from "@/views/404/NotFound.vue";
import TabChoice from "@/views/Tabs/TabChoice.vue";
import BaseTable from "@/views/Basetable/BaseTable.vue";
import FormBase from "@/views/Baseform/FormBase.vue";
import TextEdit from "@/views/TextEditer/TextEdit.vue";
import MarkDown from "@/views/Markdown/MarkDown.vue";
import LoadPage from "@/views/Load/LoadPage.vue";

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
        },
        {
          path: '/table',
          name: 'basetable',
          component: BaseTable
        },
        {
          path: '/tab',
          name: 'tabs',
          component: TabChoice
        },
        {
          path: '/form',
          name: 'baseform',
          component: FormBase
        },
        {
          path: '/text',
          name: 'textedit',
          component: TextEdit
        },
        {
          path: '/markdown',
          name: 'markdown',
          component: MarkDown
        },
        {
          path: '/load',
          name: 'load',
          component: LoadPage
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
      hidden: true
    }
  ]
})
router.beforeEach((to,from,next) => {
  const token = localStorage.getItem('user')
  if (token || to.path === '/login'){
    next();
  }else {
    next('/login')
  }
})
export default router
