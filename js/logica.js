let form = document.querySelector('.AreaCriarConta');
let nameComplete = document.querySelector('#name');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let confirmSenha = document.querySelector('#csenha');
let btn = document.querySelector('.btnSubmit')
let labelname = document.querySelector('.labelname')

nameComplete.addEventListener('keyup', () => {
  if (nameComplete.value.length > 0 && nameComplete.value.length <= 3) {
    nameComplete.classList.add('errado')
  }
  else {
    nameComplete.classList.remove('errado')
  }

})
