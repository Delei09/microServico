import amqplib , {Connection , Channel}from 'amqplib'

export default class Rabbitmq {

    private canal! : Channel
    private conexao! : Connection

    constructor(private uri : string){
    }

    async iniciar() : Promise<void>{
        this.conexao = await  amqplib.connect(this.uri)
        this.canal = await this.conexao.createChannel()
        await this.canal.assertQueue('treinamento', {
            durable : false
        })
    }

    async addFila(fila : string , msg : string) {

        await this.canal.prefetch(1)
        await this.canal.assertQueue(fila, {
            durable : false
        })
        return this.canal.sendToQueue(fila , Buffer.from(msg))
    }
}