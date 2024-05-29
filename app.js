const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const rotaCurso = require("./rotas/curso");
const rotaFavorito = require("./rotas/favorito");
const rotaPlayer = require("./rotas/player");

app.use(express.json());
app.use(cors({origin: "*"}));

app.use('/cursos', rotaCurso);
app.use('/favoritos', rotaFavorito);
app.use('/player', rotaPlayer);

const port = 8000


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
});