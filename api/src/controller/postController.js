import { Router } from "express";
import { Post, Feed} from "../repository/postRepository.js";

const server = Router();

server.post('/post/criar', async (req,resp) => {
    try {
        const publi = req.body;
        if(!publi.usuario) throw new Error("Usuário é OBRIGATÓRIO!")
        if(!publi.nome) throw new Error("Nome é OBRIGATÓRIO!")
        if(!publi.raca) throw new Error("Raça é OBRIGATÓRIO!")
        if(!publi.localizacao) throw new Error("Localização é OBRIGATÓRIO!")
        if(!publi.sexo) throw new Error("Sexo é OBRIGATÓRIO!")
        if(!publi.desc) throw new Error("Descrição é OBRIGATÓRIO!")
        if(!publi.contato) throw new Error("Contato é OBRIGATÓRIO!")

        const resposta = await Post(publi);
        resp.status(200).send({
            resposta
        })
    } catch (err) {
        resp.status(400).send({
            Erro:err.message
        })
    }
})



server.get ('/post', async (req,resp) =>{
    try{ 
    const resposta = await Feed();

    resp.status(200).send({
        resposta
    })
}
catch(err){
    resp.status(400).send({
        Erro:err.message
    })
}
})
export default server;