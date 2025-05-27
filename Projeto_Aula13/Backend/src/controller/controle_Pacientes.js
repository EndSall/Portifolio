const Paciente = require("../model/Paciente")

const getAll = (req,res)=>{
    Paciente.getAll((err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const getById = (req,res)=>{
    Paciente.getById(req.params.id,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const create = (req,res)=>{
    Paciente.create(req.body,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const update = (req,res)=>{
    Paciente.update(req.params.id,req.body,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const deletar = (req,res)=>{
    Paciente.delete(req.params.id,(err,result)=>{
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