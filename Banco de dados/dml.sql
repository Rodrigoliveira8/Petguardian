-- Feed
SELECT id_pet           id,
       id_usuario       Usuário,
       nm_pet           NomePet,
       ds_raca          Raca,
       ds_localizacao   Localizacao,
       ds_sexo          Sexo,
       ds_pet           Descricao,
       img_pet          Imagem,
       ds_contato       Contato
FROM tb_pet;


-- Cadastrar Conta
Insert INTO tb_usuario (nm_usuario,ds_email,ds_senha,dt_nascimento,ds_telefone,ds_endereco)
VALUES('Pedro', 'pedro@pedro@gmail', '1234', '2006-05-29', '(11) 1234-1234', 'Rua dos Loucos 55');

-- Login
SELECT id_usuario       id,
       nm_usuario       Nome
FROM tb_usuario
WHERE ds_email          = 'admin@admin.com.br'
AND   ds_senha          ='1234';


-- Criar Post
Insert INTO tb_pet(id_usuario,nm_pet,ds_raca,ds_localizacao,ds_sexo,ds_contato)
VALUES (1,'Léu', 'PitBull', 'Rua dos Loucos 55', 'Macho', '(11) 1324-1324');



-- Cadastrar Imagem
UPDATE tb_pet
SET img_pet             ='/storage/fotos/adsf.jp'
WHERE id_pet            =1;



-- Editar Post
UPDATE tb_pet
SET    nm_pet           ='Léu',
       ds_raca          ='PitBull',
       ds_localizacao   ='Rua dos Loucos 55',
       ds_sexo          ='Macho',
       ds_pet           ='ruf ruf',
       ds_contato       ='(11) 1234-1234',
       id_usuario       = 1
WHERE id_pet = 1;



-- Deletar Post
DELETE FROM tb_pet
WHERE id_pet = 1;

select * from tb_pet;

-- Listar Post
SELECT id_pet           id,
       id_usuario       Usuário,
       nm_pet           NomePet,
       ds_raca          Raca,
       ds_localizacao   Localizacao,
       ds_sexo          Sexo,
       ds_pet           Descricao,
       img_pet          Imagem,
       ds_contato       Contato
FROM tb_pet
WHERE id_usuario        =1;