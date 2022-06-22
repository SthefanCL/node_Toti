const express = require('express')
const app = express()
const rota = require('./routes/rotas')
app.use('/test',rota)

const cadastro = require('./routes/cadastro')
app.use('/cadastro',cadastro)

const login = require('./routes/login')
app.use('/login',login)

const password = require('./routes/password')
app.use('/password', password)

app.get('/', (req,res) => {
    console.log('Requisição GET foi chamado')
    res.send('Olá mundo!')
})
app.get('/help', (req,res) => {
    console.log('Rota de ajuda foi chamado')
    res.send('Bem-vindo ao suporte!')
})
const users = [{
    name : 'Luis'
},{
    name : 'Pedrito'
}
]

app.get('cadastro/:id',(req,res,next,id) =>{
    req.user = users[id]
    res.send(req.user)
    next()
}
)

app.listen(3000)
/*app.get('/:id', (req,res) => {
    const id = req.params.id
    res.send(`usuario digitou o ID: ${id}`)
})
const verifiqueIdade = (req,res,next) =>{
    const idade = req.params.idade
    if(idade < 16 ){
        console.log( 'Você não tem idade para votar')
    }else{
        next()
    }
}
app.post('/', verifiqueIdade, (req,res) =>{
    console.log('Bem-vindo ao portal das eleições')
})*/
