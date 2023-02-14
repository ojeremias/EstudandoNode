// fs é um modulo do nodeJs -> fornece acesso ao sistema de arquivo do nosso computador
// path -> possibilita a manipulação do diretório
const fs = require("fs");
const path = require("path");

// Criando uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro", error);
  }
  console.log("Pasta criada com sucesso!");
});

//Criando arquivo com conteúdo "Hello, node!" É um método assíncrono (o writeFile)
//Inserimos todos dentro do writeFile pois todos são assíncronos e caso não ficassem em ordem como abaixo, a execução não seria em ordem.
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello, node!",
  (error) => {
    if (error) {
      return console.log("Erro ", error);
    }
    console.log("Arquivo criado com sucesso!");

    fs.appendFile(
      path.join(__dirname, "/test", "/test.txt"),
      "Toma!",
      (error) => {
        if (error) {
          return console.error("Algo deu errado, meu nobre", error);
        }
        console.log("Arquivo modificado com sucesso!");
      }
    );

    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.error("Erro: ", error);
        }

        console.log(data);
      }
    );
    //Irá ler o conteúdo do arquivo "test.txt"
  }
);

//Modificando arquivo já existente
