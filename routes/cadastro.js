const express = require('express')
const cadastro = express.Router()
cadastro.get('/', (req,res) => {
    console.log('Faça seu cadastro')
    res.send('Cadastro pronto')
})
module.exports = cadastro