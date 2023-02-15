const express = require("express");

const app = express;

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello World</h1>");
});

//utilizamos o get para pegar uma lista de usuários
app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "John@doe.com",
    },
    {
      name: "Jane Doe",
      email: "Jane@doe.com",
    },
  ];
  res.status(200).json(users);
});

//criação de registro no nosso banco
app.post("/users", (req, res) => {
  req.body;
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));
