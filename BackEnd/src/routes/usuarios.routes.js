const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario');

router.post('/login', async (req, res) => {
  try {
    const body = req.body;
    const usuario = await Usuario.findOne(body);

    if (usuario) {
      res.status(200).json({error: false, usuario});
      return;
    }
    res.status(400).json({error: true, message: `Nenhum Usuário Encontrado!`});
  } catch (e) {
    res.status(400).json({error: true, message: e.message});
  }
});

module.exports = router;
