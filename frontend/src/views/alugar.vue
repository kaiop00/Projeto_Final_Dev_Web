
<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>


<template>
  <nav class="navlink d-flex justify-content-center">
      <div>
        <RouterLink to="/" ><img src="../assets/logoAluga.png" width="100"
            height="70">
        </RouterLink>
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
  
  
  <div class="d-flex flex-column justify-content-center">
    
    
    

    <button type="button" class="btn btn-danger" >Anunciar</button>
    
    <div class="container ">
      <div class="card mb-3" style="max-width: 750px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="apt1.webp" class="img-card" alt="apartamento 1">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">RS 800<span>/mês</span></h5>
              <p class="card-text">STUDIO COM VARANDA GOURMET NA BELA VISTA APTO tipo Studio, com 40 m2 área útil. Próximo ao Shopping Frei Caneca, Mackenzie, FGV, Hospital Sírio Libanês, Hospital 9 de Julho, etc...</p>
              <p class="card-text"><small class="text-muted">Rua Paim, Bela Vista </small></p>
              <a href="">Ver mais detalhes</a>
              <button type="button" class="btnmsg btn btn-outline-dark">Mensagem</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 750px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="apt2.jpg" class="img-card" alt="apartamento 2">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">RS 2.000<span>/mês</span></h5>
              <p class="card-text">Galpão, 2.300 m², Fortaleza, Paupina, grande Messejana. Acesso fácil, na entrada da cidade, menos de 1 km do Quarto Anel Viário, 100 mts da BR-116. Crossdocking, cabe até 2 caminhões...</p>
              <p class="card-text"><small class="text-muted">Rua Guarani, Paupina</small></p>
              <a href="">Ver mais detalhes</a>
              <button type="button" class="btnmsg btn btn-outline-dark">Mensagem</button>
            </div>
          </div>
        </div>                
      </div>
    </div>
    <div class=" d-flex">
      <button type="button" class="btn btn-danger flex-fill">Alugar</button>
    </div>
  </div>
</template>

<style scoped>

.img-card {
height: 250px;
width:250px;
}
.btnmsg{
border-radius: 25px;
}

.card{
max-width:300px;
}
.botaoanuncio{
    padding-left: 70px;
}
</style>