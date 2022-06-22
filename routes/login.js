const express = require('express')
const login = express.Router()
login.get('/', (req,res) => {
    console.log('Faça seu login')
    res.send('Login pronto')
})
module.exports = login