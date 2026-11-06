const express = require('express')
const app = express()

const cors = require('cors')

const conn = require('./db/conn')
const hospedeController = require('./controller/hospede.controller')
const quartoController = require('./controller/quarto.controller')

const hostname = 'localhost'
const PORT = 3000

// ----- Middleware -----
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ----- Rotas -----

app.post('/hospede', hospedeController.cadastrar)
app.get('/hospede', hospedeController.listar)
app.get('/hospede/:id', hospedeController.buscaPorCod)
app.delete('/hospede/:id', hospedeController.excluir)
app.put('/hospede/:id', hospedeController.atualizar)

app.get('/', (req,res) => {
    res.status(200).jsoj({message: 'Aplicação rodando.'})
})

// ----- Server -----
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err) =>{
    console.error('Erro de conexão com o banco de dados.',err)
})
