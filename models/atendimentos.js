const db = require('../infraestrutura/conexao')
const moment = require('moment')
class atendimento{
    adiciona(atendimento,res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:SS')
        const atendimentoDatado = {...atendimento, dataCriacao,data}    

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length >=5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)
        } else {        
            
            const conexao = db.connect();
            console.log(atendimento)
            const sql = 'insert into atendimentos set ?'
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    //res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }
            })
        }




        const conexao = db.connect();
        console.log(atendimento)
        const sql = 'insert into atendimentos set ?'
        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
}

module.exports = new atendimento