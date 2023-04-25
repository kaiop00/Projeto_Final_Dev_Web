<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary flex-fill justify-content-evenly">
      <div>
        <RouterLink to="/" ><img src="./assets/logoAluga.png" width="100"
            height="70"></RouterLink>
        
      </div>  

      <div class="navlink">
        <a href="comprar.html"> Comprar</a>
      </div>
      <div class="navlink">
        <RouterLink to="/alugar">Alugar</RouterLink>
      </div>
      <div class="navlink">
        <RouterLink to="/reserva">Fazer Reserva</RouterLink>
      </div>


      <div class="linkbotao">
        <RouterLink to="/anunciar"><button type="button" class="btn btn-dark">Anunciar</button></RouterLink>
        
        <RouterLink to="/login">
          <button type="button" class="btn btn-danger"><i class="bi bi-person-fill"></i>
            Entrar</button>
        </RouterLink>


      </div>
    </nav>

  <RouterView />
</template>

<style scoped>
  .navlink a {
    text-decoration: none;
    color: rgb(15, 20, 25);
  }
  a {
    text-decoration: none;
  }
  .navlink a:hover {
    text-decoration: underline;
    
    border-radius: 5px;
  }
</style>
