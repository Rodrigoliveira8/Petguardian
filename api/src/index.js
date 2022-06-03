import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import usuarioController from './controller/usuarioController.js'
import postController    from  './controller/postController.js'

//Configurando o server
const server = express();
server.use(cors());
server.use(express.json());

//EndPoints
server.use(usuarioController);
server.use(postController)

server.listen(process.env.PORT, () => console.log(`API online na Porta ${process.env.PORT}`))