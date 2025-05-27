const db = require("../data/connection")

class Consulta{
    
    static getAll(callback){
        db.query("SELECT * FROM consultas",callback)
    }
    static getById(id,callback){
        db.query("SELECT * FROM consultas WHERE id = ?",[id],callback)
    }
    static create(data,callback){
        db.query("INSERT INTO consultas set ?",data,callback)
    }
    static update(id,data,callback){
        db.query("UPDATE consultas SET ? WHERE id = ?",[data,id],callback)
    }
    static delete(id,callback){
        db.query("DELETE FROM consultas WHERE id = ?",[id],callback)
    }

}

module.exports = Consulta