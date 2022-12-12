<template>
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

</template>