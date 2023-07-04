const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const filmesRouter = require("./routes/filmes.routes");
const usuariosRouter = require("./routes/usuarios.routes");
const episodioRouter = require("./routes/episodios.routes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/", filmesRouter);
app.use("/usuario", usuariosRouter);
app.use("/episodio", episodioRouter);

app.listen(8080, (req, res) => {
  console.log("Server running successfully on port 8080");
});
