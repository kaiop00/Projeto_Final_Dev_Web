<script setup lang="ts"> 
  import { RouterLink} from 'vue-router'
</script>

<template >
  <div class="flex-fill">
    <nav class=" justify-content-center ">
      <div>
        <RouterLink to="/" ><img src="../assets/logoAluga.png" alt="Logo da empresa de aluga" width="100" height="70"></RouterLink>
      </div>  
    </nav>

    <div class=" container ">
      
      <div class=" d-flex justify-content-center ">
        <h3>Entre agora mesmo!</h3>
      </div>
      <form class="form-floating formulario mb-3 m-3 was-validated " novalidate>
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
        
        <br>
        <div>
          <button type="submit" id="btEnviar" class="btn btn-danger w-100">Entrar</button>
        </div>
        <div>
          <p4>Não tem uma conta?</p4>
          <RouterLink to="/inscricao">Inscreva-se</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

