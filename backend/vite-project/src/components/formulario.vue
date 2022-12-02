<template>
    <div class="container w-75">
    <H3>Criar Conta</H3>

    <form action="" class="form-floating mb-3 m-3 was-validated needs-validation" novalidate>
      <div class="form-floating mb-3 sucesso">
        <input type="nome" class="form-control" id="floatingInput" placeholder="a" required>
        <label for="floatingInput">Nome:</label>
        <div class="invalid-feedback">
          Insira um Nome valido.
        </div>
      </div>
      <div class="form-floating mb-3 sucesso">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
        <label for="floatingInput">Email:</label>
        <div class="invalid-feedback">
          Insira um Email valido.
        </div>
      </div>
      <br>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required minlength="6">
        <label for="floatingPassword" class="form-label">Senha:</label>
        <div class="invalid-feedback">
          A senha deve conter no mínimo 6 caracteres
        </div>
        <br>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
          <label for="floatingPassword">Confirmar Senha:</label>
          <div class="invalid-feedback">
            Confirmar Senha
          </div>
          <h2>Data de Nascimento</h2>

          <div class="d-flex flex-row date">
            <div class="form-floating d-flex flex-row w-100">
              <select class="form-select mes1 dias_date" id="floatingSelectGrid4" required>
                <option></option>
              </select>

              <div class="form-floating w-100" required>
                <select class="form-select mes_date" id="floatingSelectGrid" required>
                  <option></option>
                  <option value="1">Janeiro</option>
                  <option value="2">Fevereiro</option>
                  <option value="3">Março</option>
                  <option value="4">Abril</option>
                  <option value="5">Maio</option>
                  <option value="6">Junho</option>
                  <option value="7">Julho</option>
                  <option value="8">Agosto</option>
                  <option value="9">Setembro</option>
                  <option value="10">Outubro</option>
                  <option value="11">Novembro</option>
                  <option value="12">Dezembro</option>
                </select>

                </select>
              </div>
            </div>

            <div class="form-floating w-50" required>
              <select class="form-select anos_date" id="floatingSelectGrid4" required>
                <option></option>
              </select>
            </div>
          </div>

          <button type="submit" class="botao btn btn-danger w-100">Se Inscrever</button>
    </form>
  </div>

  </div>
  </div>
  </div>
  <!-- <script src="code.js"></script> -->
</template>


<script>

function criardias(){
  for(let i = 1 ; i <= 31 ; i++){
      $('.dias_date').append($('<option>', {
          value: i,
          text: i
      }));
  }
}


document.querySelector(".mes1").addEventListener("change", () => {
document.querySelector(".dias_date").addEventListener("change",() => {
  if(document.querySelector(".mes1").value == 2 && document.querySelector(".dias_date").value == 29){
    $(".ano_date").empty()
    criaranobi() 
  }else {
    $(".ano_date").empty()
    criarano()
  }
})
})
criardias()


function criarano(){
  for(let i = 1950 ; i <= 2004 ; i++){
      $('.anos_date').append($('<option>', {
          value: i,
          text: i
      }));
  }
}criarano()


// function criaranobi(){
//   for(let i = 1950 ; i <= 2004 ; i++){
//       if(i%4 === 0){
//       $('.anos_date').append($('<option>', {
//           value: i,
//           text: i  
//       }))
//     }
// }
// }





// $(function(){
//     $('.sim').click(function(){
//       if ($(this).is(':checked'))
//       {
//         $('.btn').prop("disabled",false);
//       }
//     });
//   });



// (function () {

//     var forms = document.querySelectorAll('.needs-validation')
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
        
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()

</script>