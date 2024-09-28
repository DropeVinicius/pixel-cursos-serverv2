const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const rotaCurso = require("./rotas/curso");
const rotaFavorito = require("./rotas/favorito");
const rotaPlayer = require("./rotas/player");
const AuthRegisterUserRoutes = require("./rotas/AuthRegisterUserRoutes")
const LoginRoutes = require("./rotas/LoginRoutes")

require("dotenv").config()

app.use(express.json());
app.use(cors({ origin: "https://pixel-cursos.vercel.app", // front end vercel
                methods: ["GET", "POST", "PUT", "DELETE"], 
                credentials: true // Cookies ou autenticação
}));

app.use('/cursos', rotaCurso);
app.use('/favoritos', rotaFavorito);
app.use('/player', rotaPlayer);

app.use('/', AuthRegisterUserRoutes)
app.use(LoginRoutes)

// Servir arquivos estáticos do aplicativo React
app.use(express.static(path.join(__dirname, '../client/build')));

 app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
}); 

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
});

require("./database/connection")