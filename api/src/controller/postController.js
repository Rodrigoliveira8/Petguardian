import { Router } from "express";
import { Post, Feed, listarPosts, deletarPosts, editarPost, inserirImagem} from "../repository/postRepository.js";
import multer from 'multer'

const server = Router();
const upload = multer({dest: 'storage/imgpet'})

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




server.get ('/feed', async (req,resp) =>{
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

server.get('/usuario/:id/post', async (req, resp) => {
    try {
        const {id} = req.params;

        const resposta = await listarPosts(id);

        if (!resposta)
            throw new Error('Não foi possivel listar os posts')

        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
    
})

server.delete('/usuario/post/:id', async (req, resp) => {
    try {
        const {id} = req.params;

        const resposta = await deletarPosts(id);

        if(resposta != 1)
            resp.status(404).send()
        else 
            resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/usuario/post/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const pet = req.body;

        if(!pet.usuario) throw new Error("Usuário é OBRIGATÓRIO!")
        if(!pet.nome) throw new Error("Nome é OBRIGATÓRIO!")
        if(!pet.raca) throw new Error("Raça é OBRIGATÓRIO!")
        if(!pet.localizacao) throw new Error("Localização é OBRIGATÓRIO!")
        if(!pet.sexo) throw new Error("Sexo é OBRIGATÓRIO!")
        if(!pet.descricao) throw new Error("Descrição é OBRIGATÓRIO!")
        if(!pet.contato) throw new Error("Contato é OBRIGATÓRIO!")

        const resposta = await editarPost(pet, id);

        if (resposta != 1)
            resp.status(404).send();

        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/post/:id/imagem', upload.single('imgpet'), async (req, resp) => {
    try {
        const {id} = req.params;
        const imagem = req.file.path

        const resposta = await inserirImagem(imagem, id);

        resp.status(204).send();

        if (resposta != 1) throw new Error('Não foi possível alterar/inserir a imagem') 

        
        
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})