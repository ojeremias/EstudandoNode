const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.kffbwn8.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados...",
          error
        );
      }
      return console.log("Conexão estabelecida com o banco de dadoss");
    }
  );
};

module.exports = connectToDataBase;

//mongodb+srv://EstudoNodeJs:<password>@cluster0.cco5l3z.mongodb.net/?retryWrites=true&w=majority
