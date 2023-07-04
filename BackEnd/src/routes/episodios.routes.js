const express = require("express");
const Episodio = require("../models/episodio");
const router = express.Router();

router.get("/temporada/:temporada", async (req, res) => {
  try {
    const temporada_id = req.params.temporada;
    const episodios = await Episodio.find({
      temporada_id: temporada_id,
    });

    res.status(200).json({ error: false, episodios });
  } catch (e) {
    res.status(400).json({ error: true, message: e.message });
  }
});

module.exports = router;
