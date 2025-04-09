// Node -> Modulo FS -> sript.js
const fs = require("fs")

//fs.writeFileSync("mensagem.docx","Oi, criei esse arquivo pelo node")

//console.log("Arquivo criado com sucesso!")
const conteudo = fs.readFileSync("mensagem.txt", "utf-8")
console.log("conteudo do arquivo:")
console.log(conteudo)