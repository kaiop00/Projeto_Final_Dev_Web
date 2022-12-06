<template>


                <div>
                    <a href="home.html"> <img src="WhatsApp_Image_2022-09-26_at_13.52.22-removebg-preview.png"
                            width="100" height="70"> </a>
                </div>
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
                    <div>
                        <a href="anunciar.html">
                            <button type="button" class="btn btn-dark">Anunciar</button>
                        </a>
                        <a href="login.html">
                            <button type="button" class="btn btn-danger"><i class="bi bi-person-fill"></i>
                                Entrar</button>
                            </a>
                    </div>
                </div>

                <div class="imagem01">
                    <img src="AnderpsQuixada_005.jpeg" width="600" height="600"> </a>
                </div>
                <div class="text_">
                    <h2>o que deseja comprar ?</h2>
                    <div class="texto1">
                        <p>O que você precisa?</p>

                        <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
                            <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
                                <button type="button" class="btn btn-danger">Comprar</button>
                                <button type="button" class="btn btn-outline-dark">Alugar</button>
                                <button type="button" class="btn btn-outline-dark">Fazer Reserva</button>
                            </div>

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
                    </div>
                    <div class="forms form-floating">
                        <select class="form-select" id="floatingSelectGrid">
                            <option selected>Por favor insira uma faixa de valor</option>
                            <option>40.000 - 100.000</option>
                            <option>100.00 - 150.000</option>
                            <option>200.000 - 250.000</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"> Onde deseja sua locação? </label>
                        <input type="email" class=" forms form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp">

                    </div>

                    <div class="menu d-grid gap-2">
                        <button class="btn btn-danger" type="button"><i class="bi bi-search"></i>Buscar</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<style>


.navlink a{
text-decoration: none;
color:  rgb(15, 20, 25);
margin-right: 150px;
}
a{
text-decoration: none;
}
.navlink a:hover{
text-decoration: underline;  
background-color: brown;
border-radius: 5px;
}
/* .menu{
padding-top: 20px;
} */
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

</style>