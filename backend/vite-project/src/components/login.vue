<template>
    <div class="imagem01">
    <a href="home.html"> <img src="voltar-removebg-preview.png" width="100" height="40"> </a>
  </div>

  <div class="container w-50">
    <div id="icons">
      <a href="ftemblema.jpeg"></a>
    </div>
    <div class="texto d-flex justify-content-center ">
      <h3>Entre agora mesmo!</h3>
    </div>
    <form action="" class="form-floating formulario mb-3 m-3 was-validated " novalidate>
      <div class="form-floating mb-3">
        <input type="email" class="form-control  inputEmail" id="floatingInput" placeholder="name@example.com" required>
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control inputPassword" id="floatingPassword" placeholder="Password" required
          minlength="6
          value=">
        <label for="floatingPassword">Password</label>
      </div>
      <div>
        <a href="senha.html">Esqueceu a senha?</a>
      </div>
      <br>
      <div>
        <button type="submit" id="btEnviar" class="btn btn-danger w-100">Entrar</button>
      </div>
      <div>
        <p4>Não tem uma conta?</p4>
        <a href="formulario.html">Inscreva-se</a>
      </div>
    </form>
  </div>
</template>

<style>

.imagem01{
padding-top: 40px;
display:inline-block;vertical-align:top;
}

</style>