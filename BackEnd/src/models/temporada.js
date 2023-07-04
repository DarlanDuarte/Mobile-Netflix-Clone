const connection = require("../database/connection");
const mongoose = require("mongoose");

const TemporadaSchema = new mongoose.Schema({
  filme_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Filme",
  },
  titulo: String,
});

const Temporada = connection.model("Temporada", TemporadaSchema);

module.exports = Temporada;

/* const Temporada = connection.model("Temporada", {
  filme_id: {
    type: mongoose.Types.ObjectId,
    ref: "Filme",
  },
  titulo: String,
});
 */
