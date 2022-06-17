import { Router } from "express";
import { Cadastro, Login} from "../repository/usuarioRepository.js";

const server = Router();

server.post('/usuario/cadastro', async (req,resp) => {
    try{ 
    const {nome,email, senha, nascimento, telefone, endereco} = req.body;
    if(!nome) throw new Error('O nome é Obrigatório!')
    if(!email) throw new Error('O email é Obrigatório!')
    if(!senha) throw new Error('A senha é Obrigatório!')
    if(!nascimento) throw new Error('O nascimento é Obrigatório!')
    if(!telefone) throw new Error('O telefone é Obrigatório!')
    if(!endereco) throw new Error('O endereço é Obrigatório!')
    const resposta = await Cadastro(nome,email,senha,nascimento,telefone,endereco);
    resp.send(resposta)
}
catch(err){
    resp.status(400).send({
        Erro:err.message
    })
}
})  

server.post('/usuario/login', async (req,resp) => {
    try {
        const {email, senha} = req.body

        const resposta = await Login(email,senha)
        if(!resposta) throw new Error ("Credenciais inválidas!")
        resp.status(200).send(resposta)
        
    } catch (err) {
        resp.status(401).send({
            Erro:err.message
        })
    }
})

export default server;