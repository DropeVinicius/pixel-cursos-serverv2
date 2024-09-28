const express = require("express");
const router = express.Router();

const AuthRegisterUserController = require("../controladores/AuthRegisterUserController");

// Inicialização (se necessário)
router.get("/", AuthRegisterUserController.init);

// Rota de registro
router.post("/register", AuthRegisterUserController.registerUser); // Alterado para /register

module.exports = router;