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

// Servir arquivos estáticos do aplicativo React
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
});