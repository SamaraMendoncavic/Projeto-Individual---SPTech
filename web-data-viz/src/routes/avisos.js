var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

// realiza a listagem das publicações
router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

// realiza a listagem das publicações por usuário
router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

// Plota a descrição que o usuário colocou na tela
router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

// realiza a publicação do comentário com base do id do usuário
router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

// realiza a contagem de comentários para o gráfico
router.get("/contagem", function (req, res) {
    avisoController.buscarContagemComentarios(req, res); // nova rota para o gráfico
});

// verifica a quantidade de comentários para o KPI
router.get("/quantidade", function (req, res) {
    avisoController.buscarQuantidadeComentario(req, res); // KPI de quantidade comentários
});

// verifica a idade média de nossos usuários para o KPI
router.get("/idade", function (req, res) {
    avisoController.buscarIdadeUsuario(req, res); // KPI idade média de usuários
});


module.exports = router;