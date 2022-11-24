<template>

            <div class="col-4 flex-row justify-content-start">
                <br>
                <p>Tipo de transação</p>
                <div class="btn-group btn-group-lg p-1 d-flex flex-row justify-content-center" role="group" aria-label="Large button group">
                <button type="button" class="btn btn-outline-dark">Comprar</button>
                <button type="button" class="btn btn-danger">Alugar</button>
                <button type="button" class="btn btn-outline-dark">Reserva</button>
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
</template>