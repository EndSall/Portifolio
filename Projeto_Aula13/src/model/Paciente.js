const db = require("../data/connection")

class Paciente{
    
    static getAll(callback){
        db.query("SELECT * FROM pacientes",callback)
    }
    static getById(id,callback){
        db.query("SELECT * FROM pacientes WHERE id = ?",[id],callback)
    }
    static create(data,callback){
        db.query("INSERT INTO pacientes set ?",data,callback)
    }
    static updade(id,data,callback){
        db.query("UPDATE pacientes SET ? WHERE id = ?",[data,id],callback)
    }
    static delete(id,callback){
        db.query("DELETE FROM pacientes WHERE id = ?",[id],callback)
    }

}

module.exports = Paciente