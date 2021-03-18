import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import Vendedores from '@/views/Vendedores.vue'
import Vendedor from '@/views/Vendedor.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: [
        { name: 'home' }
      ]
    }
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
    meta: {
      breadcrumb: 'vendedores'
    }
  },
  {
    path: '/vendedor/:id',
    name: 'Vendedor',
    component: Vendedor,
    meta: {
      breadcrumb: 'vendedor' 
    }
  },
  {
    path: '/vendedor',
    name: 'Vendedor',
    component: Vendedor,
    meta: {
      breadcrumb: 'vendedor' 
    }
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
