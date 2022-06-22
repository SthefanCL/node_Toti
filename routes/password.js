const express = require('express');
const password = express.Router()
password.get('/',(req,res)=>{
    console.log('Esqueci minha senha')
    res.send('Insira seua senha')
})
module.exports = password