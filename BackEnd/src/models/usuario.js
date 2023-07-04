const connection = require("../database/connection");

const Usuario = connection.model("Usuario", {
  nome: String,
  email: String,
  senha: String,
});

module.exports = Usuario;
