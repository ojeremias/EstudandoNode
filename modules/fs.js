// fs é um modulo do nodeJs -> fornece acesso ao sistema de arquivo do nosso computador
const fs = require("fs");
const path = require("path");

// Cria uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro", error);
  }
  console.log("Pasta criada com sucesso!");
});

fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello, node!",
  (error) => {
    if (error) {
      return console.log("Erro ", error);
    }
    console.log("Arquivo criado com sucesso!");
  }
);
