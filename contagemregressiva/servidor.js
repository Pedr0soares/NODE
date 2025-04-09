// Servidor -> servidor.js

// Imporar os módulos necessários
const http = require('http') // Módulo para criar servidor HTTP
const fs = require('fs') // Módulo para manipular arquivos
const caminho = require('path') // Módulo para manipular o caminho dos caminho

// Definir portar e host
const porta = 3000
const host = 'localhost'

// Criando o servidor
const servidor = http.createServer((requisicao, respota)=>{
    if(requisicao.url === '/'){
        // Verifica se o usuário acesso a página principal
        const caminhoArquivo = caminho.join(__dirname, 'index.html')

        // Lê o arquivo HTML e envia a resposta

        fs.readFile(caminhoArquivo, (erro, conteudo) => {
            if(erro){
                respota.writeHead(500)
                resposta.end("Erro ao ler arquivo HTML")
                return
            }
            resposta.writeHead(200, {'Content-Type': 'text/html; charset utf-8'})
            resposta.end(conteudo)
        })
    }
    else if(requisicao.url === '/mensagem'){
        resposta.writeHead(200, {'content-type': 'text/plain; charset=utf-8'})
        resposta.end("Olá, esse é uma mensagem do servidor HTTP")
    }
    else { // Caso a rota não existia
        resposta.writeHead(404)
        resposta.end("Página não encontrada")
    }
})  

// Iniciar o servidor
servidor.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
})