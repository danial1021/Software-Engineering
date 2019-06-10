import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./views/main.vue')
    },
    {
      path: '/inquire',
      name: 'inquire',
      component: () => import('./views/inquire.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('./views/store.vue')
    },
    {
      path: '/usage-information',
      name: 'usage-information',
      component: () => import('./views/usage-information.vue')
    },
    {
      path: '/send-feedback',
      name: 'send-feedback',
      component: () => import('./views/send-feedback.vue')
    },
    {
      path: '/web-development-course',
      name: 'web-development-course',
      component: () => import('./views/web-development-course.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/signup.vue')
    },
    {
      path: '/my-page',
      name: 'my-page',
      component: () => import('./views/my-page.vue')
    }
  ]
})
