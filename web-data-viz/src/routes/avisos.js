var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idAvaliacao", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAvaliacao", function (req, res) {
    avisoController.deletar(req, res);
});

router.get("/contagem", function (req, res) {
    avisoController.buscarContagemComentarios(req, res); // nova rota para o gráfico
});

router.get("/quantidade", function (req, res) {
    avisoController.buscarQuantidadeComentario(req, res); // KPI de quantidade comentários
});

router.get("/idade", function (req, res) {
    avisoController.buscarIdadeUsuario(req, res); // KPI idade média de usuários
});


module.exports = router;