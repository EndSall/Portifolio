const Prontuario = require("../model/Prontuario")

const getAll = (req,res)=>{
    Prontuario.getAll((err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const getById = (req,res)=>{
    Prontuario.getById(req.params.id,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const create = (req,res)=>{
    Prontuario.create(req.body,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const update = (req,res)=>{
    Prontuario.update(req.params.id,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const deletar = (req,res)=>{
    Prontuario.delete(req.params.id,(err,result)=>{
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