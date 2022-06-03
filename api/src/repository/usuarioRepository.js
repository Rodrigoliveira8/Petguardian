import {con} from './connection.js'

export async function Cadastro (nome,email, senha, nascimento, telefone, endereco){
    const comando = `
    Insert INTO tb_usuario (nm_usuario,ds_email,ds_senha,dt_nascimento,ds_telefone,ds_endereco)
VALUES(?,?,?,?,?,?)`

    const [linhas] = await con.query(comando, [nome, email,senha,nascimento,telefone,endereco])
    return linhas[0];
}

export async function Login (email,senha){
    const comando = `
    SELECT id_usuario       id,
       nm_usuario       Nome
FROM tb_usuario
WHERE ds_email          =?
AND   ds_senha          =?`

const [linhas] = await con.query(comando, [email,senha]);
return linhas[0]
}