const express = require("express")
const Router = express.Router()
const controle = require("../controller/controll_Prontuarios.js")

Router.get("/",controle.getAllProntuarios) // pegar todos 
Router.get("/:id",controle.getProntuario) // pegar um 
Router.post("/",controle.createProntuario) // criar um 
Router.put("/:id",controle.updateProntuario) // atualizar um 
Router.delete("/:id",controle.deleteProntuario) // deletar um 

module.exports = Router