//Promises -> Simples.js
/* Vamos criar um exemplo oque simula buscar dados de um usuario em um banco de dados, a busca vai levar 2 segundos */

const {reject} = require ("async");
const {resolve} = require("path");

function buscarUsuario(id) {
    return new Promise(resolve, reject) => {
        //iniciamos uma nova promise que pode ter dois resultados 
        //resolve, quando tem sucesso
        //reject, quando da erro
        console.log(`buscando usuário com o ID: ${id}`)
        setTimeout(() => {
            const usuario = {id: id,nome:"João "}
            //Criamos um objeto representando  um usuário econtrado 
            if(usuario){
                resolve(usuario)
                //Se o usúario existir o resolve é acionado indicando que a tarefa foi concluida com sucesso 
            } else {
                reject ("Usuario não encontrado")
                // Se não existir o reject é acionado indicando que a tarefa falhou 
            }
        }, 2000)
    }
}

buscarUsuario(1)
.then((usuario) => {//acontece quando a promise é aprovada 
    console.log("Usuario encontrado:", usuario)
})
.catch((erro)=> {//acontece quando a promisse é rejeitada 
    console.log("Erro,"erro )})