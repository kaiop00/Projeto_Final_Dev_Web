import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue"
import alugar from "../views/alugar.vue"
import anunciar from "../views/anunciar.vue"
import comprar from "../views/comprar.vue"
import inscricao from "../views/inscricao.vue"
import login from "../views/login.vue"
import reserva from "../views/reserva.vue"
import teste from "../views/teste.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/teste",
      name: "teste",
      component: teste,
    },
    {
      path: "/alugar",
      name: "alugar",
      component: alugar,
    },
    

    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/compra",
      name: "compra",
      component: comprar,
    },
    {
      path: "/anunciar",
      name: "anunciar",
      component:anunciar,
    },
    {
      path: "/inscricao",
      name: "inscricao",
      component:inscricao,
    },
    {
      path: "/reserva",
      name: "reserva",
      component: reserva,
    },
  ],
});

// const router = new Router({routes})
export default router;
