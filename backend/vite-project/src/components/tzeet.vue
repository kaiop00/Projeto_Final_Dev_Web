<script setup lang="ts">
import type { UserProps } from "./SugestaoSeguidor.vue";

export interface TzeetProps {
  user: UserProps;
  publicationData: string;
  tzeetBody: string;
  replyNumber: number;
  retzeetNumber: number;
  likeNumber: number;
}
defineProps<{
  data: TzeetProps;
}>();
</script>

<template>
                    <div class="usuario mt-3">
                        <span class="nometw"> Atila lamarino </span> <span class="date">@oatila</span> Oct 21,2021
                        <p class="text">Se vai furar o orçamento, da para voltar a financiar absorventes e a ciência? Ou
                            só voto mesmo?</p>
                    </div>
                   

                    <div class="acoeslinks d-flex justify-content-around">
                        <a href="Reply "><span><i class="bi bi-chat"></i></span> 100</a>
                        <a class="Ret" href="Retzeet"><span><i class="bi bi-share"></i></span> 200</a>
                        <a class="like" href="Like "><span><i class="bi bi-suit-heart"></i></span> 50</a>
                        <a href="Share"><span><i class="bi bi-arrow-down-circle"></i></span> 30</a>
                    </div>

                    <div class="usuario mt-3">
                        <span class="nometw"> Atila lamarino </span> <span class="date">@oatila</span> Oct 21,2021
                        <p class="text"> Nada que ta ruim que não posssa piorar </p>
                    </div>

            
                    <div class="acoeslinks d-flex justify-content-around">
                        <a href="Reply "><span><i class="bi bi-chat"></i></span> 100</a>
                        <a class="Ret" href="Retzeet"><span><i class="bi bi-share"></i></span> 200</a>
                        <a class="like" href="Like "><span><i class="bi bi-suit-heart"></i></span> 50</a>
                        <a href="Share"><span><i class="bi bi-arrow-down-circle"></i></span> 30</a>
                    </div>
                    <br>
                    <div class="usuario mt-3">
                        <span class="nometw"> Atila lamarino </span> <span class="date">@oatila</span> Oct 21,2021
                        <p class="text">Something really bad ir happing in somewhere in the world..gmal if off</p>
                    </div>

                    <div class="acoeslinks d-flex justify-content-around">
                        <a href="Reply "><span><i class="bi bi-chat"></i></span> 100</a>
                        <a class="Ret" href="Retzeet"><span><i class="bi bi-share"></i></span> 200</a>
                        <a class="like" href="Like "><span><i class="bi bi-suit-heart"></i></span> 50</a>
                        <a href="Share"><span><i class="bi bi-arrow-down-circle"></i></span> 30</a>
                    </div>
</template>
