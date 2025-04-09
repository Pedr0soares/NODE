function tarefaDemorada(nome, tempo) {
    setTimeout(() => {
        console.log(`Tarefa ${nome} concluida`)
    } , tempo)
}

console.log("iniciando o programa")
console.log("Executando a tarefa 1")
tarefaDemorada(1, 3000)//Tarefa 1 vai demorar 3