const express = require("express")
const path = require("path")
const Router = express.Router()

const basePath = path.join(__dirname,"../../../../FrontEnd")

Router.get("/",(req,res)=>{
    res.sendFile(path.join(basePath,"index.html"))
})

Router.get("/Consultas",(req,res)=>{
    res.sendFile(path.join(basePath,"consultas.html"))
})
Router.get("/Medicos",(req,res)=>{
    res.sendFile(path.join(basePath,"medicos.html"))
})
Router.get("/Pacientes",(req,res)=>{
    res.sendFile(path.join(basePath,"pacientes.html"))
})
Router.get("/Prontuarios",(req,res)=>{
    res.sendFile(path.join(basePath,"prontuarios.html"))
})

module.exports = Router