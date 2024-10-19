import { createRouter, createWebHistory } from 'vue-router'

import Home from './View/Home.vue';
import TSJ_Community from './View/TSJ_Community.vue';
import RegistroUsuario from './View/registro.vue'
import StudentLogin from './View/login.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/communityTSJZ',
    name: 'communityTSJZ',
    component: TSJ_Community,
    children: [{
      path: 'register',
      name: 'register',
      component: RegistroUsuario
    },
    {
      path: 'login',
      name: 'StudentLogin',
      component: StudentLogin
    }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
