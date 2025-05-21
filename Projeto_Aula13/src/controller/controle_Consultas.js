const Consulta = require("../model/Consulta")

const getAll = (req,res)=>{
    Consulta.getAll((err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const getById = (req,res)=>{
    Consulta.getById(req.params.id,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const create = (req,res)=>{
    Consulta.create(req.body,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const update = (req,res)=>{
    Consulta.update(req.params.id,req.body,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const deletar = (req,res)=>{
    Consulta.delete(req.params.id,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deletar
}