const connection = require('../database/connection');
const Filme = require('../models/filme');
const filmesJSON = require('../data/filme.json');

async function addFilmes() {
  try {
    for (let filmes of filmesJSON) {
      console.log(`Inserindo ${filmes.titulo}`);
      await new Filme(filmes).save();
    }
    console.log(`Final do Script`);
  } catch (error) {
    console.log(error.message);
  }
}

addFilmes();
