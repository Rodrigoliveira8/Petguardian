create database petguardianDB;

use petguardianDB;

show databases;

-- Tabela de Usuário
create table tb_usuario (
    id_usuario         int primary key auto_increment,
    nm_usuario        varchar(200),
    ds_email        varchar(200),
    ds_senha        varchar(100),
    dt_nascimento    varchar(10),
    ds_telefone        varchar(15),
    ds_endereco        varchar(100)
);

-- Tabela de Post

create table tb_pet (
    id_pet            int primary key auto_increment,
    id_usuario        int,
    nm_pet            varchar(50),
    ds_raca            varchar(50),
    ds_localizacao    varchar(100),
    ds_sexo            varchar(10),
    img_pet            varchar(800),
    ds_contato        varchar(100),
    ds_titulo         varchar(100)
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

