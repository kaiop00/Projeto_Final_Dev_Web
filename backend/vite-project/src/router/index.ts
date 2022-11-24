import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/alugar",
      name: "alugar",
      component: HomeView,
    },

    {
      path: "/login",
      name: "login",
      component: HomeView,
    },
    {
      path: "/compra",
      name: "compra",
      component: HomeView,
    },
    {
      path: "/anunciar",
      name: "anunciar",
      component:HomeView,
    },
    {
      path: "/reserva",
      name: "reserva",
      component: HomeView,
    },
  ],
});

export default router;
