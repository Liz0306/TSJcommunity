import { createRouter, createWebHistory } from 'vue-router'

import Home from './View/Home.vue';
import TSJ_Community from './View/TSJ_Community.vue';
import RegistroUsuario from './View/registro.vue';
import StudentLogin from './View/login.vue';
import BecasViw from './View/BecasApartado.vue';
import RaiteMain from './View/Raite.vue';
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
  {
    path: '/Becas',
    name: 'Becas',
    component: BecasViw,
  },
  {
    path: '/Raite',
    name: 'Raite',
    component: RaiteMain,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
