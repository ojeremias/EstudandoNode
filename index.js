//importando o módulo person do arquivo person.js
//Agora este arquivo terá acesso a classe Person do aquivo person.js
const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDataBase = require("./src/database/connect");

dotenv.config();

connectToDataBase();

//importando um arquivo para ser executado
//require("./modules/path");
// require("./modules/fs")

require("./modules/http");
const person = new Person("Jeremias", 19);
