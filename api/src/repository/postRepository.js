import {con} from './connection.js'

export async function Post (post){
    const comando = `
    Insert INTO tb_pet(id_usuario,nm_pet,ds_raca,ds_localizacao,ds_sexo,ds_pet,ds_contato)
    VALUES (?,?,?,?,?,?,?);    
     `
     const [linhas] = await con.query (comando, [post.usuario,post.nome,post.raca,post.localizacao,post.sexo,post.desc,post.contato])
     post.id = linhas.insetID;
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
       ds_pet           descricao,
       img_pet          imagem,
       ds_contato       contato
FROM tb_pet`
const [linhas] = await con.query(comando);
return linhas;
}