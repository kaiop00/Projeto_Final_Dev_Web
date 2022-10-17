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
