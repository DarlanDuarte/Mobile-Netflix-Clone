const connection = require('../database/connection');
const filmesLogoMobile = require('../data/filmeLogoMobile.json');
const Filme = require('../models/filme');

async function addFilmesLogoMobile() {
  try {
    for (let filmeLogoMobile of filmesLogoMobile) {
      await Filme.findByIdAndUpdate(filmeLogoMobile.filme_id, {
        logoMobile: filmeLogoMobile.logoMobile,
      });
    }
    console.log('Final do Script');
  } catch (e) {
    console.log(e.message);
  }
}

addFilmesLogoMobile();
