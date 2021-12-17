import amqplib , { Channel , Connection , ConsumeMessage} from 'amqplib'

export default class Rabiit {

    private conexao! : Connection;
    private canal! : Channel;
    constructor(private uri : string){}

    async iniciar() : Promise<void>{
        this.conexao = await amqplib.connect(this.uri)
        this.canal = await this.conexao.createChannel()
    }

    async lerMensagem(){
        const resultado =  await this.canal.consume('treinamento' , ( msg ) => {
            if(msg){
                const mensagem = msg.content.toString().split(' ')
                const [n1, ,n2] = mensagem
                const resultado = parseInt(n1) + parseInt(n2)
                console.log('Resultado:' , resultado)
            }    
          }, {
              
              noAck : true ,
          })
    }

    async desligar() : Promise<void>{
        
    }
}