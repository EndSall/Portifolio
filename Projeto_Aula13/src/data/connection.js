const myslq = require("mysql2")

const connection = myslq.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"consultas_medicas"
})

connection.connect((err)=>{
    if(err){
        console.log("Erro ao conectar ao MySql",err)
        return;
    }
    console.log("Conectado ao MySQL!")
})

module.exports = connection