import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../views/Dashboard'
import About from '../views/About'
import NotFound from '../views/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/:page',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/:action/:section/:category',
      name: 'AddPaymentFromUrl',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    }
    // {
    //   path: '*',
    //   component: NotFound
    // }
  ]
})

export default router
