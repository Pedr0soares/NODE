function tarefaDemorada(){
    const agora = new Date();
    const futuro = agora.getTime() + 3000 //adiciona 3 segundos
    while (new Date().getTime() < futuro) {} //Espera 3 segundos
}

console.log("Iniciando o programa...")
console.log("Executando tarefa 1")
tarefaDemorada() //Simula um processo que leva 3 segundos 
console.log("Tarefa 1 concluida")


console.log("Executando tarefa 2")
tarefaDemorada() //Simula outro processo que leva 3 segundos
console.log("tarefa 2 concluida")
console.log("Programa finalizado")