//importando um módulo nativo do nodeJS
const path = require("path");

//Apenas o nome do arquivo atual
console.log(path.basename(__filename)); //__filename é uma variável global, esta que recebe o valor do nome do arquivo atual - path.js

// Nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Tranforma nosso arquivo em um array com vários objetos com informações básicas
console.log(path.parse(__filename));

// Junta caminhos de arquivos
console.log(path.join(__dirname, "sou-lindo"));
