<template>

                <div class="imagem01">
                    <img src="AnderpsQuixada_005.jpeg" width="600" height="600"> </a>
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
            </div>

        </div>
    </div>
              
            
</template>
<style>


.imagem01{
padding-top: 40px;
display:inline-block;vertical-align:top;
}
.text_{
display:inline-block;
padding-top: 60px;
padding-left: 50px;
}
.texto1{
padding-top: 60px;
}
.forms{
opacity : 0.3;
}

h3{
padding-top: 100px;
}



</style>
