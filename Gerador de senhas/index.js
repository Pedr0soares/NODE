const minusculas = "abcdefghijklmnopqrstuvwxyz"
const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numeros = "0123456789"
const caracteresEspeciais = "!@#$¨&*<>{}()[]"

function gerarSenha() {
const comprimento = parseInt(document.getElementById
("comprimento") .value)
const opcoes = {

minusculas: document.getElementById("minusculas").
checked,

maiusculas: document.getElementById("maiusculas").
checked,

numeros: document.getElementById("numeros") .checked,
caracteresEspeciais: document.getElementById
("especiais").checked
       }


let caracteres = ''
  if (opcoes.minusculas) caracteres += minusculas
  if (opcoes.maiusculas) caracteres += maiusculas
  if (opcoes.numeros) caracteres += numeros
  if (opcoes. caracteresEspeciais) caracteres +=
  caracteresEspeciais

  if(!caracteres) {
    alert("Selecione pelo menos um opção")
  }
  
  let senha = ''
  for(let contador = 0; contador < comprimento; contador++) {
    const indiceAleatorio = Math.floor(Math.random() *
caracteres.length)
senha += caracteres[indiceAleatorio]
  }
  document.getElementById("senha").value = senha 


}

function copiarSenha() {
    const entradaSenha = document.getElementById("senha")
    entradaSenha.Select()
    document.execCommand('copy')
    
    const botaoCopiar = document.querySelector(".botao-copiar")
    const textoOriginal = botaoCopiar.textContent
    botaoCopiar.textContent = "Copiado"
    setTimeout(() => {
        boaoCopiar.textContent = textoOriginal
    },2000)
}

gerarSenha()