const Atendimento = require('../models/atendimentos')
module.exports = app => {
    app.get('/atendimento',(req,res)=> res.send('Você está na rota de atendimento'))

    app.post('/atendimento',(req,res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento,res)
        console.log(req.body)
        })
}