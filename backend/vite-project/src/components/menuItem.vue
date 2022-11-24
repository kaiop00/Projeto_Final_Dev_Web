<script setup lang="ts">
import type { ItemProps } from "./navegacaoItem.vue";
import Item from "./navegacaoItem.vue";
import { onMounted } from "vue";
import { RouterView } from "vue-router";
// import router from "@/router";

const menuItems: ItemProps[] = [
  { name: "Home", route: "/home" },
  { name: "Alugar", route: "/alugar" },
  { name: "Comprar", route: "/comprar" },
  { name: "FazerReserva", route: "/reserva" },
  { name: "Anunciar", route: "/anunciar" },
  { name: "Login", route: "login" },
];

</script>

<template>

    <div class="navlink d-flex justify-content-end">

        <div class="navlink">
            <a href="comprar.html"> Comprar</a>
        </div>
        <div class="navlink">
            <a href="alugar.html"> Alugar</a>
        </div>
        <div class="navlink">
            <a href="reserva.html"> Fazer Reserva</a>
        </div>
  

        <div class="linkbotao">
            
               <a href="anunciar.html">
                <button type="button" class="btn btn-dark">Anunciar</button>
            </a>
            <a href="login.html">
                <button type="button" class="btn btn-danger"><i class="bi bi-person-fill"></i>
                    Entrar</button>
                </a>

          
        </div>
    </div>

</template>

