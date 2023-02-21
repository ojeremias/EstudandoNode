const express = require("express");
const UserModel = require("../src/models/user.model");

//estamos inicializando o express e pondo-o em uma variável.
const app = express();

app.use(express.json());

app.use((req, res, next) => {});

//requisição get
app.get("/home", (req, res) => {
  res.contentType("aplication/html");
  res.status(200).send("<h1>Hello world</h1>");
});
//estrutura de dados para criação de um usuário
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({}); //objeto vazio server para mostrar todos os dados

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id); //diferente do de cima, aqui será buscado por um id que é gerado por usuário. Ou seja, ao colocar o id, veremos o dado de um usuário específico

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//criação do usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(200).json(user);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));
