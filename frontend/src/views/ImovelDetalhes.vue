<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { api } from '../baseConfig'
import { coverURL} from '../mixing/uploadUtil'

interface Cover {
  alternativeText: string,
  url: string
}
interface Imovel {
  id: number,
  cover: Cover
  title: string,
  summary: string,
  number: number,
  price: number
  comments: Comment[]
}
const route = useRoute()
const id = route.params.id
const imovel = ref<Imovel>({} as Imovel)
onMounted( async () => {
  const response = await api.get(`/imovels/${id}`, {
    params: {
      populate: "cover, comments",
    }
  })
  const { data } = response
  imovel.value = data.data
})
</script>

<template>
    <template v-if="imovel.cover">
      <div class="row align-items-center" >
        <div class="col">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img  :src="coverURL(imovel.cover.url)" class="w-75 rounded-start" :alt="imovel.cover.alternativeText">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{imovel.title}}</h5>
                            <hr>
                            <div class="text-start">
                                <p class="card-text">Volume: {{imovel.number}}</p>
                                <p class="card-text"><strong>Preço: <small class="text-danger">{{imovel.price}}</small></strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <CommentContainer :comments="imovel.comments"></CommentContainer>
    </template>
    <div v-else>
      <h1>Carregando</h1>
    </div>
</template>