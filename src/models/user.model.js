//após ter criado já um banco, é necessário determinarmos quais serão os tipos de dados. Ou seja, o modelo de dados
const mongoose = require("mongoose"); //imporatndo mongoose

const userScheme = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
  },
});
const UserModel = mongoose.model("User", userScheme);

module.exports = UserModel;
