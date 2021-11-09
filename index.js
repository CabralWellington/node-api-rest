const customExpress = require('./config/customExpress')
const app = customExpress()
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')
connect = conexao.connect()
tabelas.init(connect)

app.listen(3001 , () => console.log("Servidor rodando na porta 3000"))