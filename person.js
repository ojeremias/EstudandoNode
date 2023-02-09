class Person {
  constructor(name, idade) {
    this.name = name;
    this.idade = idade;
  }

  sayMyName() {
    return `My name is ${this.name} e tenho ${this.idade} anos!`;
  }
}

//possibilitando a exportação da class Person
module.exports = {
  Person,
};
