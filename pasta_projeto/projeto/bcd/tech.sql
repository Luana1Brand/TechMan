drop database if exists Techman;
create database Techman charset=UTF8 collate utf8_general_ci;
use Techman;



create table comentarios(
    id integer not null primary key auto_increment,
   comentario varchar(250) not null,
   equipamento varchar(50) not null,
   perfil varchar(50) not null,
   data varchar(50) not null
);


create table equipamentos(
   id integer not null primary key auto_increment,
   equipamento varchar(50) not null,
   imagem varchar(50) not null,
   descricao varchar(250) not null,
   ativo varchar(50) not null,
   data varchar(50) not null
);


create table perfis(
   id varchar(50) not null,
   perfil varchar(50) not null
);


create table usuarios(
   id integer not null primary key auto_increment,
   senha varchar(10) not null,
   perfil varchar(50) not null
);

describe comentarios;
describe equipamentos;
describe perfils;
describe usuarios;

show tables;


                 
LOAD DATA INFILE 'F:/Pudim/3SEMESTRE/TechMan/projeto/bcd/docs/comentarios.csv'
INTO TABLE comentarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
select * from comentarios;


LOAD DATA INFILE 'F:/Pudim/3SEMESTRE/TechMan/projeto/bcd/docs/equipamentos.csv'
INTO TABLE equipamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
select * from equipamentos;




LOAD DATA INFILE 'F:/Pudim/3SEMESTRE/TechMan/projeto/bcd/docs/perfis.csv'
INTO TABLE perfis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
select * from perfis;

LOAD DATA INFILE 'F:/Pudim/3SEMESTRE/TechMan/projeto/bcd/docs/usuarios'
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
select * from usuarios;