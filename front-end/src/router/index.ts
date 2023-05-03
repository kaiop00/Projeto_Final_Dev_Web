import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { userAuth } from '@/stores/userAuthStore'
import AlugarView from '@/views/AlugarView.vue'
import CreateUserFormView from '@/views/CreateUserFormView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        auth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/alugar',
      name: 'alugar',
      component: AlugarView
    },
    {
      path: '/inscrever',
      name: 'inscrever',
      component: CreateUserFormView
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  const auth = userAuth();
  console.log(auth.user)
  if(to.meta?.auth && auth) {
    console.log('entrou')
    if (auth.token && auth.user){
      const isAuthenticated = await auth.validate();
      if(isAuthenticated) {
        next()
      }
      else{
        next({name: 'login'});
      }
    }else{
      next({name: 'login'});
    }
  }else{
    next();
  }
})

export default router
