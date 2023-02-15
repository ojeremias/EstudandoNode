const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}EstudoNodeJs:${process.env.MONGODB_PASSWORD}@cluster0.cco5l3z.mongodb.net/?retryWrites=true&w=majority`
  );
  (error) => {
    if (error) {
      return console.log(
        "Ocorreu um erro ao se conectar com o banco de dados."
      );
    }
    return console.log("Conexão com o banco de dados realizada com sucesso!");
  };
};
//exportando módulo
module.exports = connectToDataBase;
