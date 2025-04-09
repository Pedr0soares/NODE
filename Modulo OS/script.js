// Pasta NODE ->  Pasta Modulo os -->  Script.js
//importar o modulo os
const os = require("os")

console.log("Sistema Operacional:", os.platform())
console.log("Arquitetura:", os.arch())
console.log("Memória livre:", os.freemem(),"nytes")
console.log("Memória livre:", os.totalmem(),"bytes")