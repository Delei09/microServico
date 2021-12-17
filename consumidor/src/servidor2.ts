import express  from "express";
import Rabiit from "./rabbitmq/rabbitServidor";

const app = express()
const rabbitmq = new Rabiit('amqp://172.29.0.2')
//const rabbitmq = new Rabiitmq('amqp://localhost')

app.listen(3002,  () => {
    console.log("Servidor Rodando na porta 3002")
    try{    
        setTimeout( async () => {
            await rabbitmq.iniciar()
            await rabbitmq.lerMensagem()
        },8000)

    }catch{
        console.log("Deu erro")
    }
})