import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../components/pages/home/Home.vue';
import Categories from '../components/pages/breeds/Categories.vue';
import RandomCatfacts from '../components/pages/catfacts/RandomCatfacts.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/catfacts',
    name: 'RandomCatfacts',
    component: RandomCatfacts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
