
<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { onMounted, ref } from 'vue';
  import ImovelCard from '../components/imovelCard.vue'
  import { api } from '../baseConfig'
  interface Cover {
    url: string,
    formats: object
  }
  interface Imovel {
    id: number,
    cover: Cover
    rua: string,
    bairro: string,
    description: string,
    number: number,
    price: number,
    telefone: number
  }
  const imoveis = ref<Imovel[]>([]);
    onMounted( async () => {
    const data  = await api.get("/imovels", {
      params: {
        populate: "cover"
      }
    })
    imoveis.value = data.data
  })
  
</script>


<template>
  <div class="flex-fill">
    <nav class="navlink d-flex justify-content-center">
      <div >
        <RouterLink to="/" ><img src="../assets/logoAluga.png" width="100"
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


    <div class=" flex-column justify-content-center flex-fill">
      <div >
        <div >
            <ImovelCard   v-for="imovel in imoveis" :key="imovel.id"
            :id="imovel.id"
            :cover="imovel.cover.url"
            :description="imovel.description"
            :price="imovel.price"
            :number="imovel.number"
            :telefone="imovel.telefone"
            :rua="imovel.rua"
            :bairro="imovel.bairro"
            >
          </ImovelCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .navlink a {
    text-decoration: none;
    color: rgb(15, 20, 25);
    margin-right: 150px;
  }
  .navlink a:hover {
    text-decoration: underline;
    
    border-radius: 5px;
  }

</style>