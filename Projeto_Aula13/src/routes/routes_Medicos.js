const express = require("express")
const Router = express.Router()
const controle = require("../controller/controll_Medicos.js")

Router.get("/",controle.getAllMedicos) // pegar todos 
Router.get("/:id",controle.getMedico) // pegar um 
Router.post("/",controle.createMedico) // criar um 
Router.put("/:id",controle.updateMedico) // atualizar um 
Router.delete("/:id",controle.deleteMedico) // deletar um 

module.exports = Router