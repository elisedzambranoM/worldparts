import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import Vendedores from '@/views/Vendedores.vue'
import Productos from '@/views/Vendedor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/vendedores',
    name: 'vendedores',
    component: Vendedores,
  },
  {
    path: '/vendedor',
    name: 'vendedor',
    component: Productos,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
