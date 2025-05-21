const express = require("express")
const Router = express.Router()
const controle = require("../controller/controle_Pacientes.js")

Router.get("/",controle.getAll) // pegar todos 
Router.get("/:id",controle.getById) // pegar um 
Router.post("/",controle.create) // criar um 
Router.put("/:id",controle.update) // atualizar um 
Router.delete("/:id",controle.delete) // deletar um 

module.exports = Router