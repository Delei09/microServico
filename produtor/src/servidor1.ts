import { porta , app } from "./config/config";
import Rabbitmq from './rabbitmq/rabbitmqServer'

const rabbitmq = new Rabbitmq('amqp://172.29.0.2')
//const rabbitmq = new Rabbitmq('amqp://localhost')

app.listen(porta, async ( ) => {
    console.log("servidor rodando na porta " + porta)
    try{
        setTimeout( async () => {
            await rabbitmq.iniciar()
        },5000 )
    }catch{
        console.log("Erro Servidor 1")
    }
})