import {con} from './connection.js'

export async function Post (post){
    const comando = `
    Insert INTO tb_pet(id_usuario,nm_pet,ds_raca,ds_localizacao,ds_sexo,ds_contato, ds_titulo)
    VALUES (?,?,?,?,?,?,?);    
     `
     const [resposta] = await con.query (comando, [post.usuario,post.nome,post.raca,post.localizacao,post.sexo,post.contato, post.titulo])
     post.id = resposta.insertId;
     
     return post
    }

    

export async function Feed (){
    const comando = `
SELECT id_pet           id,
       id_usuario       usuario,
       nm_pet           nome,
       ds_raca          raca,
       ds_localizacao   localizacao,
       ds_sexo          sexo,
       img_pet          imagem,
       ds_titulo        titulo,
       ds_contato       contato
FROM tb_pet`
const [linhas] = await con.query(comando);
return linhas;
}

export async function listarPosts (id) {
    const comando = 
    `SELECT id_pet       id,
        id_usuario       Usuário,
        nm_pet           NomePet,
        ds_raca          Raca,
        ds_localizacao   Localizacao,
        ds_sexo          Sexo,
        ds_titulo        Titulo,
        img_pet          Imagem,
        ds_contato       Contato
    FROM tb_pet           
    WHERE id_usuario     = ?`

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function deletarPosts (id) {
    const comando = 
    `DELETE FROM tb_pet
    WHERE id_pet = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows; 
}

export async function editarPost (pet, id) {
    const comando = 
    `UPDATE tb_pet
    SET    nm_pet           =?,
           ds_raca          =?,
           ds_localizacao   =?,
           ds_sexo          =?,
           ds_pet           =?,
           ds_contato       =?,
           id_usuario       =?
    WHERE id_pet = ?`

    const [linhas] = await con.query(comando, [pet.nome, pet.raca, pet.localizacao, pet.sexo, pet.descricao, pet.contato,pet.usuario, id]);
    
    return linhas.affectedRows;
}

export async function inserirImagem (imagem, id) {
    const comando = 
    `UPDATE tb_pet
    SET img_pet             = ?
    WHERE id_pet            = ?`

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}


export async function Interesse (interessado, id){
    const comando = 
    `Update tb_pet
    set int_interesse       =?
    WHERE id_pet           =?
    `
    const [resposta] = await con.query(comando, [interessado, id]);
    return resposta.affectedRows;
}