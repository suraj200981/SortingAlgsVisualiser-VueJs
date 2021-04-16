import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BubbleSort from '../views/BubbleSort.vue'
import InsertionSort from '../views/InsertionSort.vue'


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
  },
  {
    path: '/insertionsort',
    name: 'InsertionSort',
    component: InsertionSort
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
