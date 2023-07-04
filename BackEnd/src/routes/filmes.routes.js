const express = require("express");
const mongoose = require("mongoose");
const Filme = require("../models/filme");
const Temporadas = require("../models/temporada");
const _ = require("underscore");

const router = express.Router();

router.get("/home", async (req, res) => {
  try {
    //Recuperando filmes
    let filmes = await Filme.find({});
    let finalFilmes = [];

    //Recuperando Temporadas
    for (let filme of filmes) {
      if (mongoose.Types.ObjectId.isValid(filme._id)) {
        const temporadas = await Temporadas.find({
          filme_id: filme._id,
        });

        const newFilme = { ...filme._doc, temporadas };
        finalFilmes.push(newFilme);
      } else {
        console.log("Valor inválido para filme._id:", filme._id);
      }
    }

    //misturar resultados aleatoriamentes com Underscore
    finalFilmes = _.shuffle(finalFilmes);

    //filme principal e separando filmes com o Underscore
    const principal = finalFilmes[0];
    //separando em secoes
    const secoes = _.chunk(finalFilmes, 5);

    res.status(200).json({ error: false, principal, secoes });
  } catch (e) {
    res.status(400).json({ error: true, message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const filmes = await Filme.find({});

    res.status(200).json({ error: false, filmes });
  } catch (e) {
    res.status(400).json({ error: true, message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filmes = await Filme.findById(id);

    res.status(200).json({ error: false, filmes });
  } catch (e) {
    res.status(400).json({ error: true, message: e.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const response = await new Filme(body).save();
    res.status(201).json({ error: false, user: response });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const filmes = await Filme.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200).json({ error: false, filmes });
  } catch (e) {
    res.status(400).json({ error: true, message: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const filmes = await Filme.findByIdAndDelete(id);
    res
      .status(200)
      .json({ error: false, message: `Usuário deletado com Sucesso!` });
  } catch (e) {
    res.status(400).json({ error: true, message: e.message });
  }
});

module.exports = router;
