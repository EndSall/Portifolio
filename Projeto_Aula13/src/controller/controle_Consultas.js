const Consulta = require("../model/Consulta")

const getAll = (req,res)=>{
    const result = Consulta.getAll()
    if(err) return res.status(500).json(err)
    res.json(result[0])
}