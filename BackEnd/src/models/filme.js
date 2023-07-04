const connection = require('../database/connection');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const FilmeSchema = new Schema({
  titulo: String,
  tipo: String,
  capa: String,
  logo: String,
  thumb: String,
  logoMobile: String,
  descricao: String,
  generos: Array,
  elenco: Array,
  cenas_momentos: Array,
});

const Filme = connection.model('Filme', FilmeSchema);

module.exports = Filme;

/* const Filme = connection.model("Filme", {
  titulo: String,
  tipo: String,
  capa: String,
  logo: String,
  thumb: String,
  descricao: String,
  generos: Array,
  elenco: Array,
  cenas_momentos: Array,
}); */
