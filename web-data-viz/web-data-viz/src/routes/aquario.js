var express = require("express");
var router = express.Router();

var Controller = require("../controllers/Controller");

router.get("/:empresaId", function (req, res) {
  Controller.buscarAquariosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  Controller.cadastrar(req, res);
})

module.exports = router;