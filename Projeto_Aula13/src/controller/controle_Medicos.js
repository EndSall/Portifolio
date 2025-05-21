const Medico = require("../model/Medico")

const getAll = (req,res)=>{
    Medico.getAll((err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const getById = (req,res)=>{
    Medico.getById(req.params.id,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const create = (req,res)=>{
    Medico.create(req.body,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const update = (req,res)=>{
    Medico.update(req.params.id,req.body,(err,result)=>{
        if(err) return res.status(500).json({erro: err.message})
        res.json(result)
    })
}
const deletar = (req,res)=>{
    Medico.delete(req.params.id,(err,result)=>{
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