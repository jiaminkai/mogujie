import Vue from 'vue'
import VueRouter from 'vue-router'
import Cary from '../views/Cary.vue'
import Cart from '../views/Cart.vue'
import My from '../views/My.vue'
import Main from '../views/main.vue';
import Details from '../views/Dateils.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name:'main',
    component: Main
  },
  {
    path: '/cary',
    name: 'cary',
    component: Cary
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/details:id',
    name: 'details',
    component: Details
  },
  {
    path: '/home',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/main.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
