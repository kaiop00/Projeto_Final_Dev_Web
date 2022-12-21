<script setup lang="ts">
import { coverURL} from '../mixing/uploadUtil'

defineProps<{
    id: number,
    cover: string
    rua: string,
    bairro: string,
    description: string,
    number: number,
    price: number,
    telefone: number
}>()
</script>

<template>
    <div class="col-lg-3 col-md-4 col-sm-1">
      <router-link :to="'/imovel/' + id">
      <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" width="100%" :src="coverURL(cover)"   />
          <div class="card-body text-center">
              <h5 class="card-title">{{description}} - {{ number }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Preço: {{price}} - Contato - {{ telefone }}</h6>
              <div class="d-flex justify-content-between align-items-center">
                {{ rua }} - {{ bairro }}
              </div>
          </div>  
      </div>
      </router-link>
    </div>
</template>