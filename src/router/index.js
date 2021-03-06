import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register')
    },
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: () => import('@/views/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home')
        },
        {
          path: '/company',
          name: 'company',
          component: () => import('@/views/company')
        },
        {
          path: '/moreCompany',
          name: 'moreCompany',
          component: () => import('@/views/moreCompany')
        }
      ],
    }
  ]
})
