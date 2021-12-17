import express , {Request , Response} from 'express'
import Rabbitmq from './rabbitmq/rabbitmqServer'

const rabbitmq = new Rabbitmq('amqp://172.29.0.2')
//const rabbitmq = new Rabbitmq('amqp://localhost')

export type dadosType = {
    fila : string ,
    msg : string
}

const rota = express.Router()

rota.post("/addfila", async (req : Request, res : Response) => {

    try{
        const dados : dadosType = req.body
         await rabbitmq.iniciar()
        const resposta =  await  rabbitmq.addFila(dados.fila, dados.msg)
        res.status(200).json(resposta)
    }catch(e){
        res.status(400).json('Deu erro')
    }
})

export default rota