import  'dotenv/config'
import express from 'express'
import cors from 'cors'


const server = express();

server.use(cors());
server.use(express.json());

 
server.use(usuariocontroller);

server.listen(process.env.PORT,() => console.log(`API conectado na porta ${process.env.PORT
}`))