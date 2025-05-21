const express = require("express")
const Router = express.Router()
const controle = require("../controller/controll_Pacientes.js")

Router.get("/",controle.getAllPacientes) // pegar todos 
Router.get("/:id",controle.getPaciente) // pegar um 
Router.post("/",controle.createPaciente) // criar um 
Router.put("/:id",controle.updatePaciente) // atualizar um 
Router.delete("/:id",controle.deletePaciente) // deletar um 

module.exports = Router