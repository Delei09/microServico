import express from 'express'
import rota from '../rotas';

const porta = 3001 ;
const app = express()

app.use(express.json())
app.use(rota)

export  {porta , app}