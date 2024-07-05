function enviar() {
let nomeUsuario = document.getElementById("nome").value
let emailUsuario = document.getElementById("email").value
let dataUsuario = document.getElementById("data").value
let numeroUsuario = document.getElementById("numero").value
let carroUsuario = document.querySelector("input[name = 'carro']:checked").value
let geladeiraUsuario = document.querySelector("input[name= 'geladeira']:checked").value
let rendaUsuario = document.querySelector("input[name= 'renda']:checked").value

    alert("Seu nome é: " +nomeUsuario + 
    "\nSeu email é: " +emailUsuario + 
    "\nSua data de nascimento é: " +dataUsuario + 
    "\nSeu telefone é: " +numeroUsuario +
    "\nVocê possui: " +carroUsuario +
    "\nVocê possui: " +geladeiraUsuario +
    "\nSua renda mensal é: " +rendaUsuario)
    
}
