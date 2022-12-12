 <!-- inicio + menu 

<script>
import menu from "../components/menu.vue"
import inicio from "../components/inicio.vue"


export default {
    name: "home",
    components: {
        menu,
        inicio,
        
    },
};


</script> -->


<template>

    <div>
       <a href="home.html"> <img src="WhatsApp_Image_2022-09-26_at_13.52.22-removebg-preview.png" width="100"
            height="70"> </a> 
    </div>
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
  
    <div class="imagem01">
      <img src="AnderpsQuixada_005.jpeg" width="600" height="600">
    </div>
    <div class="text_">
      <h2>Pronto para procurar um imóvel para você?</h2>
      <div class="texto1">
        <p>O que você precisa?</p>
  
        <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
          <a href="comprar.html"> <button type="button" class="btn btn-outline-dark">Comprar</button> </a>
          <a href="alugar.html"> <button type="button" class="btn btn-outline-dark">Alugar</button> </a>
          <a> <button type="button" class="btn btn-outline-dark">Fazer Reserva</button> </a>
        </div>
  
        <p>Qual o tipo?</p>
  
        <div class="forms form-floating">
          <select class="form-select" id="floatingSelectGrid">
            <option selected>Por favor insira um tipo</option>
            <option>Apartamento</option>
            <option>Casa</option>
            <option>Fazenda</option>
            <option>Casa de Condominio</option>
            <option>Apartamento de Condominio</option>
          </select>
        </div>
  
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Onde deseja sua locação? </label>
            <input type="email" class=" forms form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
        </form>
        <div class="d-grid gap-2">
          <button class="btn btn-danger" type="button"><i class="bi bi-search"></i> Buscar</button>
        </div>
      </div>
  
    </div>
  
  
  
  
  
  </template>
  
  <style>
  body {
    justify-content: center;
    align-items: center;
    font-family: 'poppins', 'sans-serif';
    background: linear-gradient(-45deg, black, silver, white);
    min-height: 100vh;
  }
  
  .navlink a {
    text-decoration: none;
    color: rgb(15, 20, 25);
    margin-right: 150px;
  }
  
  a {
    text-decoration: none;
  }
  
  .navlink a:hover {
    text-decoration: underline;
    background-color: brown;
    border-radius: 5px;
  }
  
  .imagem01 {
    padding-top: 40px;
    display: inline-block;
    vertical-align: top;
  }
  
  .text_ {
    display: inline-block;
    padding-top: 60px;
    padding-left: 50px;
  }
  
  .texto1 {
    padding-top: 60px;
  }
  
  .forms {
    opacity: 0.3;
  }
  
  h3 {
    padding-top: 100px;
  }
  </style>

