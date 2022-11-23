<script setup lang="ts">
import type { UserProps } from "./SugestaoSeguidor.vue";
import FollowerSuggestion from "./SugestaoSeguidor.vue";
</script>

<template>
  <div>
    <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1>Home</h1>
                                        <div class="d-flex flex-row justify-content-between">
                                            <img src="./Imags.jpg" class="rounded-circle" width="64" height="64">
                                        </div>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-floating">
                                            <textarea class="form-control" onkeyup="digitarModal(event)"
                                                placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                            <label for="floatingTextarea">O que você está pensando?</label>
                                        </div>
                    
                                        <div id="exp">
                                            <a href="#"><i class="bi bi-globe"></i>Todos podem responder</a>
                                        </div>
                                        <div>
                                            <i class="back bi bi-card-image hover-blue"></i>
                                            <i class="bi bi-filetype-pdf hover-blue"></i>
                                            <i class="bi bi-emoji-smile hover-blue"></i>
                                            <i class="bi bi-reception-4 hover-blue"></i>
                                            <i class="bi bi-calendar-date hover-blue"></i>
                                            <i class="bi bi-geo-alt hover-blue"></i>
                    
                    
                                            <span id="ctdModal">0</span>
                    
                                            <i class="bi bi-plus-circle" id="separacao"></i>
                                            <button id="btEnviarModal" type="button" class="btn btn-primary"
                                                disabled>Enviar</button>
                                        </div>
                                    </div>                     
                                </div>
                            </div>
                        </div>
                    <button type="button" class="btn btn-success rounded-circle d-xl-none  d-xl-block d-lg-block"><i
                            class="bi bi-twitter"></i></button>
                </div>
           

            <div class="col-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
                <h1>Home</h1>
                <div class="d-flex flex-row justify-content-between">
                    <img src="./Imags.jpg" class="rounded-circle" width="64" height="64">
                </div>
           
               
                    <div class="form-floating">
                        <textarea class="form-control text-count" onchange="digitar(event)" onkeyup="digitar(event)" placeholder="Leave a comment here"
                            id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">O que você está pensando?</label>
                    </div>

                    <div id="exp">
                        <a href="#"><i class="bi bi-globe"></i>Todos podem responder</a>
                    </div>
                    <div>
                        <i class="back bi bi-card-image hover-blue"></i>
                        <i class="bi bi-filetype-pdf hover-blue"></i>
                        <i class="bi bi-emoji-smile hover-blue"></i>
                        <i class="bi bi-reception-4 hover-blue"></i>
                        <i class="bi bi-calendar-date hover-blue"></i>
                        <i class="bi bi-geo-alt hover-blue"></i>


                        <span id="ctd">0</span>

                        <i class="bi bi-plus-circle" id="separacao"></i>
                        <button id="btEnviar" type="button" class="btn btn-primary" disabled>Enviar</button>
                    </div>
            </div>
</template>
