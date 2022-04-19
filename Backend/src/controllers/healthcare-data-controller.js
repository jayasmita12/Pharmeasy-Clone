const express = require("express")
const Healthcaredata = require("../models/healthcare-data-model")
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const healthcaredata = await Healthcaredata.create(req.body)
        return res.status(201).send(healthcaredata)

    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const healthcaredatas = await Healthcaredata.find().lean().exec()
        return res.status(200).send(healthcaredatas)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const healthcaredata = await Healthcaredata.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(healthcaredata)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router