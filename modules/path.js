//importando um módulo nativo do nodeJS
// path serve como uma bússola para ajudar a navegar no sistema de arquivos. Podemos, com ela, unir diretórios.
const { dir } = require("console");
const path = require("path");
const fs = require("fs");

//Apenas o nome do arquivo atual
console.log(path.basename(__filename)); //__filename é uma variável global, esta que recebe o valor do nome do arquivo atual - path.js

// Nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Tranforma nosso arquivo em um array com vários objetos com informações básicas
//console.log(path.parse(__filename));

// Junta caminhos de arquivos
console.log(path.join(__dirname, "sou-lindo"));

//Será criado uma pasta "oiieeeu", caso já exista, dará erro
fs.mkdir(path.join(__dirname, "/oiieeeu"), (error) => {
  if (error) {
    return console.error("Algo deu errado", error);
  }
  console.log("Pasta criada");
});
