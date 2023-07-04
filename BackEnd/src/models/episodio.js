const connection = require("../database/connection");
const mongoose = require("mongoose");

const EpisodioSchema = new mongoose.Schema({
  temporada_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Temporada",
  },

  titulo: String,
  descricao: String,
  numero: Number,
  capa: String,
});

const Episodio = connection.model("Episodio", EpisodioSchema);

module.exports = Episodio;

/* const Episodio = connection.model("Episodio", {
  temporada_id: {
    type: mongoose.Types.ObjectId,
    ref: "Temporada",
  },
  titulo: String,
  descricao: String,
  numero: Number,
  capa: String,
}); */
