var database = require("../database/config");

function listar() {
    console.log("ACESSEI O avaliacao_usuario  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            a.idAvaliacao AS idAvaliacao,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM avaliacao_usuario a
            INNER JOIN usuario u
                ON a.fk_usuario = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            a.idAvaliacao AS idAvaliacao,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM avaliacao_usuario a
            INNER JOIN usuario u
                ON a.fk_usuario = u.idUsuario
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            a.idAvaliacao AS idAvaliacao,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM avaliacao_usuario a
            INNER JOIN usuario u
                ON a.fk_usuario = u.idUsuario
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO avaliacao_usuario (titulo, descricao, fk_usuario) VALUES ('${titulo}', '${descricao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idAvaliacao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAvaliacao);
    var instrucaoSql = `
        UPDATE avaliacao_usuario SET descricao = '${novaDescricao}' WHERE idAvaliacao = ${idAvaliacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idAvaliacao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAvaliacao);
    var instrucaoSql = `
        DELETE FROM avaliacao_usuario WHERE idAvalicao = ${idAvaliacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarContagemPorData() {
    var instrucaoSql = `
        SELECT DATE_FORMAT(dt_avaliacao, '%d-%m-%Y') AS data_comentario,
               COUNT(idAvaliacao) AS total_comentarios
               FROM avaliacao_usuario
               GROUP BY data_comentario
               ORDER BY data_comentario DESC;
    `;
    console.log("Executando a instrução SQL para contagem de comentários: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuantidadeComentario() {
    var instrucaoSql = `
    SELECT COUNT(idAvaliacao) AS total_comentarios
       FROM avaliacao_usuario;`;

    console.log("Executando a instrução SQL para contagem de comentários: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIdadeUsuario() {
    var instrucaoSql = `
    SELECT ROUND(AVG(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())),0) AS Idade_Usuarios
           FROM usuario;`;

    console.log("Executando a instrução SQL para contagem de comentários: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar,
    buscarContagemPorData,
    buscarQuantidadeComentario,
    buscarIdadeUsuario
}
