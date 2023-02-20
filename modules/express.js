const express = require("express");
const UserModel = require("../src/models/user.model");

//estamos inicializando o express e pondo-o em uma variável.
const app = express();

app.use(express.json());

//requisição get
app.get("/home", (req, res) => {
  res.contentType("aplication/html");
  res.status(200).send("<h1>Hello world</h1>");
});

app.get("/users", (req, res) => {
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
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    req.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));
