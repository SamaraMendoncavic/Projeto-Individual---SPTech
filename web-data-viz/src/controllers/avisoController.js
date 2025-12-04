var avisoModel = require("../models/avisoModel");

// realiza a listagem das publicações
function listar(req, res) {
    avisoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avaliação: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// realiza a listagem das publicações por usuário
function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avisoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// Plota a descrição que o usuário colocou na tela
function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    avisoModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// realiza a publicação do comentário com base do id do usuário
function publicar(req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        avisoModel.publicar(titulo, descricao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// verifica a quantidade de comentários para o KPI
function buscarContagemComentarios(req, res) {
    avisoModel.buscarContagemPorData()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma contagem de comentários encontrada!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar a contagem de comentários: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// verifica a quantidade de comentários para o KPI
function buscarQuantidadeComentario(req, res) {
    avisoModel.buscarQuantidadeComentario()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma quantidade de comentários encontrada!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar a contagem de comentários: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// verifica a idade média de nossos usuários para o KPI
function buscarIdadeUsuario(req, res) {
    avisoModel.buscarIdadeUsuario()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma quantidade de comentários encontrada!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar a contagem de comentários: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    buscarContagemComentarios,
    buscarQuantidadeComentario,
    buscarIdadeUsuario
}