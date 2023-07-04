const connection = require("../database/connection");
const Filme = require("../models/filme");
const Temporada = require("../models/temporada");
const Episodio = require("../models/episodio");

async function addTemporadasEpisodeos() {
  try {
    const series = await Filme.find({ tipo: "serie" }).select("_id");

    for (let serie of series) {
      console.log(`Filme ${serie}- - - - -`);
      const numTemporadas = Math.floor(Math.random() * 5) + 1;
      for (let i = 1; i <= numTemporadas; i++) {
        console.log(`Inserindo temporada ${i} de ${numTemporadas}`);
        const temporada = await Temporada({
          filme_id: serie,
          titulo: `Temporada ${i}`,
        }).save();

        const numEpisodios = Math.floor(Math.random() * 5) + 1;
        for (let x = 1; x <= numEpisodios; x++) {
          console.log(`Inserindo episodios ${x} de ${numEpisodios}`);
          await new Episodio({
            temporada_id: temporada._id,
            titulo: `Episodio ${x}`,
            numero: x,
            descricao:
              "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMake",
            capa: `https://picsum.photos/300/200`,
          }).save();
        }
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

addTemporadasEpisodeos();
