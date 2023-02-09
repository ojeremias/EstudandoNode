//importando o módulo person do arquivo person.js
//Agora este arquivo terá acesso a classe Person do aquivo person.js
const { Person } = require("./person");

//importando um arquivo para ser executado
//require("./modules/path");
require("./modules/fs");
const person = new Person("Jeremias", 19);
