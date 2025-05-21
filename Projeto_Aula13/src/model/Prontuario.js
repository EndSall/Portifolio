const db = require("../data/connection")

class Prontuario{
    
    static getAll(callback){
        db.query("SELECT * FROM prontuarios",callback)
    }
    static getById(id,callback){
        db.query("SELECT * FROM prontuarios WHERE id = ?",[id],callback)
    }
    static create(data,callback){
        db.query("INSERT INTO prontuarios set ?",data,callback)
    }
    static updade(id,data,callback){
        db.query("UPDATE prontuarios SET ? WHERE id = ?",[data,id],callback)
    }
    static delete(id,callback){
        db.query("DELETE FROM prontuarios WHERE id = ?",[id],callback)
    }

}

module.exports = Prontuario