const connection = require("../database/connection");
const usuarioJSON = require("../data/usuario.json");

const Usuario = require("../models/usuario");

async function addUsers() {
  try {
    for (let usuario of usuarioJSON) {
      console.log(`Inserindo ${usuario.nome}`);
      await new Usuario(usuario).save();
    }
    console.log(`Final do Script`);
  } catch (error) {
    console.log(error.message);
  }
}

addUsers();
