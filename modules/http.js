// importando http
const http = require("http");

const port = 8080;
//criando o server
const server = http.createServer((req, res) => {
  // req é o objeto da requisição, o outro é objeto da resposta
  // sempre que alguém entra em um site, ela manda uma requisição (req) e o servidor manda uma resposta (res)

  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" }); //informando o tipo de conteúdo que será enviado
    res.end("<h1>Home page!</h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "John Doe",
        email: "john@doe.com",
      },
      {
        name: "Jane Doe",
        email: "jane@doe.com",
      },
    ];

    res.writeHead(200, { "Content-type": "application/json" }); //informando que o tipo do conteúdo é JSON
    res.end(JSON.stringify(users)); //transforma um dado JSON em um JSON preparado para ser posto na aplicação web, em uma string.
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));
