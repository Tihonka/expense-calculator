import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "PageDashboard" */ '../views/Dashboard.vue')
    },
    {
      path: '/dashboard/:page',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "PageDashboard" */ '../views/Dashboard.vue')
    },
    {
      path: '/dashboard/:action/:section/:category',
      name: 'AddPaymentFromUrl',
      component: () => import(/* webpackChunkName: "PageDashboard" */ '../views/Dashboard.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "PageAbout" */ '../views/About.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "PageNotFound" */ '../views/NotFound.vue')
    }
  ]
})

export default router
