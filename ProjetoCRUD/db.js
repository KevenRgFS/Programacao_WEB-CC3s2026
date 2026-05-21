const mysql=require("mysql2")

//Parametros de configuração do banco:
const db=mysql.createConnection({

    host:"127.0.0.1",
    user:"root",
    password:"catolica",
    database:'Turma2',
    port:"3307"
});

//Estabelecer a conexão:
db.connect(err=>{
    if(err) throw err;
    console.log("Conectado ao seu Banco");
})

//Exportar Módulos de Conexão
module.express=db;