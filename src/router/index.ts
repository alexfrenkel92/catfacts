import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../components/pages/movies/Home.vue';
import Categories from '../components/pages/breeds/Categories.vue';
import Randomizer from '../components/pages/catfacts/Randomizer.vue';

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
    path: '/randomizer',
    name: 'Randomizer',
    component: Randomizer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
