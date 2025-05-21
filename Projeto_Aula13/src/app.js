const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json())

//___Rotas___
/* 
const routesFront = require("./routes/routes_Front.js")
app.use("/",routesFront)
*/
const routesPacientes = require("./routes/routes_Pacientes.js")
app.use("/api/pacientes",routesPacientes)

const routesMedicos = require("./routes/routes_Medicos.js")
app.use("/api/medicos",routesMedicos)

const routesConsultas = require("./routes/routes_Consultas.js")
app.use("/api/consultas",routesConsultas)

const routesProntuarios = require("./routes/routes_Prontuarios.js")
app.use("/api/prontuarios",routesProntuarios)



app.listen(PORT,()=>{
    console.log(`Servidor ligado: http://localhost:${PORT}`)
})