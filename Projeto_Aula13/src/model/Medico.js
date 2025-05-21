const db = require("../data/connection")

class Medico{
    
    static getAll(callback){
        db.query("SELECT * FROM medicos",callback)
    }
    static getById(id,callback){
        db.query("SELECT * FROM medicos WHERE id = ?",[id],callback)
    }
    static create(data,callback){
        db.query("INSERT INTO medicos set ?",data,callback)
    }
    static updade(id,data,callback){
        db.query("UPDATE medicos SET ? WHERE id = ?",[data,id],callback)
    }
    static delete(id,callback){
        db.query("DELETE FROM medicos WHERE id = ?",[id],callback)
    }

}

module.exports = Medico