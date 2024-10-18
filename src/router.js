import { createRouter, createWebHistory } from 'vue-router'

import Home from './View/Home.vue';



const routes = [
  {

    path: '/',
    name: 'home',
    component: Home

  },
  {

    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ './components/TSJcommunity.component/registro.vue')

  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
