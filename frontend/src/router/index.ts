import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnunciarView from '../views/AnunciarView.vue'
import AlugarView from '../views/alugar.vue'
import ReservaView from '../views/reserva.vue'
import LoginView from '../views/login.vue'
import InscricaoView from '../views/inscricao.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/anunciar',
      name: 'anunciar',
      component: AnunciarView
    },
    {
      path: '/alugar',
      name: 'alugar',
      component: ReservaView
    },
    {
      path: '/reserva',
      name: 'reserva',
      component: AlugarView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/inscricao',
      name: 'inscricao',
      component: InscricaoView
    }

  ]
})

export default router
