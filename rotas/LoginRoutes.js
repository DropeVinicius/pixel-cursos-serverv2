const router = require("express").Router();

const LoginController = require("../controladores/LoginController")

router.post("/login", LoginController.login)

module.exports = router;