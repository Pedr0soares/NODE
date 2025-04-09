let intervalo;

function iniciarContagem() {
    clearInterval(intervalo);
    
    let campoData = document.getElementById("dataEvento");
    let dataEscolhida = campoData.value;
    let texto = document.getElementById("contador");
    
    if (!dataEscolhida) {
        texto.innerText = "Escolha uma data";
        return;
    }
    
    let data = new Date(dataEscolhida + "T00:00:00");
    
    intervalo = setInterval(function () {
        atualizarContagem(data);
    }, 1000);
}

function atualizarContagem(dataFutura) {
    let agora = new Date();
    let diferenca = dataFutura - agora;
    let texto = document.getElementById("contador");
    
    if (diferenca <= 0) {
        clearInterval(intervalo);
        texto.innerText = "O tempo acabou";
        return;
    }
    
    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    texto.innerText = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}