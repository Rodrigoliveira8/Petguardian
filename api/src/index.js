import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const server = express();
server.use(cors());
server.use(express.json());

//EndPoints





server.listen(process.env.PORT, () => console.log(`API online na Porta ${process.env.PORT}`))