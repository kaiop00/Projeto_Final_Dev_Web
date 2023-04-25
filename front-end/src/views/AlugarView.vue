
<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { onMounted, ref } from 'vue';
  import ImovelCard from '@/components/imovelCard.vue'
  import { api } from '@/service/http'
  interface Cover {
    data: {
      attributes:{
        url: string,
        formats: object
      }
    }
  }
  interface Apartment {
    id: number,
    photos: Cover,
    description: string,
    value: number,
    rented: boolean,
    address: string,
    Type: string,
  }
  let apartments = ref<Apartment[]>();
    
  onMounted( async () => {
    await api.get("/apartments", {
      params: {
        populate: "photos"
      }
    }).then(response => apartments = response.data.data)
    console.log('apartments', apartments);
  })
  
</script>


<template>
  <div class="flex-fill">
    <div class=" flex-column justify-content-center flex-fill">
      <div >
          <ImovelCard  v-for="apartment in apartments" :key="apartment.id"
          :id="apartment.id"
          :description="apartment.attributes.description"
          :value="apartment.attributes.value"
          :photos="apartment.attributes.photos?.data?.attributes.url"
          :address="apartment.attributes.address"
          >
        </ImovelCard>
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