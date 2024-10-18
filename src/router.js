import { createRouter, createWebHistory } from 'vue-router'

import Principal from './components/Principal.vue';



const routes = [
  {
    
    path: '/',
    name: 'home',
    component: Principal
  
},
{
    
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../src/components/registro.vue')
    
}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
