import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BubbleSort from '../views/BubbleSort.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bubblesort',
    name: 'BubbleSort',
    component: BubbleSort
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
