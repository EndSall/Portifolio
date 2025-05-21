const express = require("express")
const Router = express.Router()
const controle = require("../controller/controll_Consultas.js")

Router.get("/",controle.getAllConsultas) // pegar todos 
Router.get("/:id",controle.getConsulta) // pegar um 
Router.post("/",controle.createConsulta) // criar um 
Router.put("/:id",controle.updateConsulta) // atualizar um 
Router.delete("/:id",controle.deleteConsulta) // deletar um 

module.exports = Router