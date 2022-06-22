const express = require('express')
const rota = express.Router()
rota.get('/', (req,res) => {
    console.log('Requisição GET foi chamado')
    res.send('Bom dia galera!')
})
module.exports = rota