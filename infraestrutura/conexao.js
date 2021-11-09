const mysql  = require ('mysql')
var config =
{
    host: '127.0.0.1',
    user: 'root',
    port: '3306',
    password: 'Admin@123',
    database: 'node_api_rest',
};

function connect(){
    if(global.connection && global.connection.state !== 'disconnected'){
        console.log("MySql Connection Recovered");
        return global.connection;
    }else{
        const connection = mysql.createConnection(config);
        console.log("MySql Connection Started");
        global.connection = connection;
        return connection;
    }

}
module.exports = {connect}