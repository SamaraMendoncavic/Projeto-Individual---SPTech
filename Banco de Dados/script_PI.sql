CREATE DATABASE project_Hazelwood;
USE project_Hazelwood;

CREATE TABLE cadastro (
    idCadastro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    dtNasc DATE,
    senha CHAR(8)
);

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    fkCadastro INT,
    status VARCHAR(45),
    CONSTRAINT fkUsuario_cadastro FOREIGN KEY (fkCadastro) REFERENCES cadastro(idCadastro)
);

CREATE TABLE livros (
    idLivros INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    dt_lancamento VARCHAR(45),
    genero VARCHAR(45),
    qtd_pagina INT
);

INSERT INTO livros (nome, dt_lancamento, genero, qtd_pagina) VALUES
('A Hipótese do amor', '2021-01-01', 'Ficção', 368),
('Odeio te amar', '2023-01-01', 'Ficção', 352),
('Noiva', '2021-01-01', 'Ficção', 368),
('A razão do amor', '2022-01-01', 'Romance', 336),
('Amor, teoricamente', '2023-01-01', 'Romance', 453),
('xeque-mate', '2023-01-01', 'Romance', 336);

CREATE TABLE avaliacao_usuario (
    id_Livros INT,
    id_cadastro INT,
    id_usuario INT,
    comentario VARCHAR(100),
    avaliacao_livro INT,
    CONSTRAINT pkComposta PRIMARY KEY (id_Livros, id_cadastro, id_usuario),
    CONSTRAINT livro_avaliacao FOREIGN KEY (id_Livros) REFERENCES livros(idLivros),
    CONSTRAINT cadastro_avaliacao FOREIGN KEY (id_cadastro) REFERENCES produto(idCadastro),
    CONSTRAINT usuario_avaliacao FOREIGN KEY (id_usuario) REFERENCES produto(idUsuario)
);