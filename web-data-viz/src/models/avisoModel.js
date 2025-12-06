var database = require("../database/config");

// realiza a listagem das publicações
function listar() {
    console.log("ACESSEI O comentario_usuario  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            a.idComentario AS idComentario,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM comentario_usuario a
            INNER JOIN usuario u
                ON a.fk_usuario = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Plota a descrição que o usuário colocou na tela
function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            a.idComentario AS idComentario,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM comentario_usuario a
            INNER JOIN usuario u
                ON a.fk_usuario = u.idUsuario
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// realiza a listagem das publicações por usuário
function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            a.idComentario AS idComentario,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM comentario_usuario a
            INNER JOIN usuario u
                ON a.fk_usuario = u.idUsuario
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// realiza a publicação do comentário com base do id do usuário
function publicar(titulo, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO comentario_usuario (titulo, descricao, fk_usuario) VALUES ('${titulo}', '${descricao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// realiza a contagem de comentários para o gráfico
function buscarContagemPorData() {
    var instrucaoSql = `
        SELECT DATE_FORMAT(dt_comentario, '%d-%m-%Y') AS data_comentario,
               COUNT(idComentario) AS total_comentarios
               FROM comentario_usuario
               GROUP BY data_comentario
               ORDER BY data_comentario ASC;
    `;
    console.log("Executando a instrução SQL para contagem de comentários: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// verifica a quantidade de comentários para o KPI
function buscarQuantidadeComentario() {
    var instrucaoSql = `
    SELECT COUNT(idComentario) AS total_comentarios
       FROM comentario_usuario;`;

    console.log("Executando a instrução SQL para contagem de comentários: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// verifica a idade média de nossos usuários para o KPI
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
    buscarContagemPorData,
    buscarQuantidadeComentario,
    buscarIdadeUsuario
}
