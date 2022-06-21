-- Feed
SELECT id_pet           id,
       nm_usuario      	usuario,
       nm_pet           NomePet,
       ds_raca          Raca,
       ds_localizacao   Localizacao,
       ds_sexo          Sexo,
       img_pet          Imagem,
       ds_contato       Contato,
       ds_titulo        titulo
FROM tb_pet
JOIN tb_usuario ON tb_pet.id_usuario = tb_usuario.id_usuario;


-- Cadastrar Conta
Insert INTO tb_usuario (nm_usuario,ds_email,ds_senha,dt_nascimento,ds_telefone,ds_endereco)
VALUES('Pedro', 'pedro@pedro@gmail', '1234', '2006-05-29', '(11) 1234-1234', 'Rua dos Loucos 55');

select * from tb_usuario;

drop table tb_usuario;

-- Login
SELECT id_usuario       id,
       nm_usuario       Nome
FROM tb_usuario
WHERE ds_email          = 'admin@admin.com.br'
AND   ds_senha          ='1234';


-- Criar Post
Insert INTO tb_pet(id_usuario,nm_pet,ds_raca,ds_localizacao,ds_sexo,ds_contato, ds_titulo)
VALUES (1,'Léu', 'PitBull', 'Rua dos Loucos 55', 'Macho', '(11) 1324-1324', 'doguinho fofo');

select * from tb_pet;

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
       ds_contato       ='(11) 1234-1234',
       id_usuario       = 1,
       ds_titulo		= 'legal'
WHERE id_pet = 1;



-- Deletar Post
DELETE FROM tb_pet
WHERE id_pet = 1;

select * from tb_pet;

-- Listar Post
SELECT id_pet       id,
        id_usuario       Usuário,
        nm_pet           NomePet,
        ds_raca          Raca,
        ds_localizacao   Localizacao,
        ds_sexo          Sexo,
        ds_titulo        Titulo,
        img_pet          Imagem,
        int_interesse   Interesse,
        ds_contato       Contato
    FROM tb_pet           
    WHERE id_usuario     = 1;

-- Interesse
Update tb_pet
    set int_interesse       = true
    WHERE id_pet           = 1;