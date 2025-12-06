CREATE DATABASE projeto_hazelwood;
USE projeto_hazelwood;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    dtNasc DATE,
    senha CHAR(8)
);

CREATE TABLE livros (
    idLivros INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    dt_lancamento DATE,
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

CREATE TABLE comentario_usuario (
    idComentario INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(255),
    dt_comentario DATETIME DEFAULT CURRENT_TIMESTAMP, 
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);


SELECT * FROM usuario;

SELECT * FROM comentario_usuario;

SELECT DATE_FORMAT(dt_comentario, '%d-%m-%Y') AS data_comentario,
       COUNT(idComentario) AS total_comentarios
       FROM comentario_usuario
       GROUP BY data_comentario
       ORDER BY data_comentario ASC;
                
SELECT COUNT(idComentario) AS total_comentarios
       FROM comentario_usuario;
       
SELECT ROUND(AVG(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())),0) AS Idade_Usuarios
           FROM usuario;
       