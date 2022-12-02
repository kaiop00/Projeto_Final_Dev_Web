<template>
    <div class="container">
        <div class="row">
            <div class="col-4 flex-row justify-content-start">
                <br>
                <p>Tipo de transação</p>
                <div class="btn-group btn-group-lg p-1 d-flex flex-row justify-content-center" role="group" aria-label="Large button group">
                <button type="button" class="btn btn-outline-dark">Comprar</button>
                <button type="button" class="btn btn-outline-dark">Alugar</button>
                <button type="button" class="btn btn-danger">Reserva</button>
                </div>
                <br>
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
                <br>
                <form>
                    <div class="mb-3">
                      <label class="form-label"> Onde? </label>
                      <input type="email" class=" forms form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                </form>
                <br>
                <p>Preço</p>
                <label class="form-label"> Min </label>
                <input placeholder="RS 0.00" type="email" class="forms form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <label class="form-label"> Max </label>
                <input placeholder="RS 0.00" type="email" class="forms form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <br>
                <div>
                    <p>Quartos</p>
                    <button type="button" class="btn btn-outline-dark">1</button>
                    <button type="button" class="btn btn-outline-dark">2</button>
                    <button type="button" class="btn btn-outline-dark">3</button>
                    <button type="button" class="btn btn-outline-dark">4+</button>
                </div>
                <br>
                <div>
                    <p>Banheiros</p>
                    <button type="button" class="btn btn-outline-dark">1</button>
                    <button type="button" class="btn btn-outline-dark">2</button>
                    <button type="button" class="btn btn-outline-dark">3</button>
                    <button type="button" class="btn btn-outline-dark">4+</button>
                </div>
                <br>
                <div>
                    <p>Vagas</p>
                    <button type="button" class="btn btn-outline-dark">1</button>
                    <button type="button" class="btn btn-outline-dark">2</button>
                    <button type="button" class="btn btn-outline-dark">3</button>
                    <button type="button" class="btn btn-outline-dark">4+</button>
                </div>
            </div>
            <div class="col-8">
                <br>
                <p>Imóveis para alugar</p>
                <h5>120.657 imóveis para alugar</h5>
                <br>
                <div>
                    <button type="button" class="btn btn-outline-dark">Mapa</button>
                    <button type="button" class="btn btn-outline-dark">Salvar busca</button>
                </div>
                <br>
                <br>
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
                  <div class="botaoanuncio">
                    <button type="button" class="btn btn-danger w-75 ">Efetuar Reserva</button>
                  </div>
            </div>
        </div>
    </div>
</template>

<style>

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
}</style>


<!-- <script setup lang="ts">
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

</template> -->

