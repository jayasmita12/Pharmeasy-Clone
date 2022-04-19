const express=require("express")
const HealthcareDevices = require("../models/HealthCareDevice-model")
const router = express.Router()
 router.post("",async(req,res)=>{
     try{
        const healthcareDevice = await HealthcareDevices.create(req.body)
        return res.status(201).send(healthcareDevice)
     }
     catch(err){
        return res.status(500).send({message:err.message})
     }

 })

 router.get("",async(req,res)=>{
    try{
       const healthcareDevices = await HealthcareDevices.find().lean().exec()
       return res.status(200).send(healthcareDevices)
    }
    catch(err){
       return res.status(500).send({message:err.message})
    }

})

router.delete("/:id",async(req,res)=>{
    try{
       const healthcareDevice = await HealthcareDevices.findByIdAndDelete(req.params.id).lean().exec()
       return res.status(200).send(healthcareDevice)
    }
    catch(err){
       return res.status(500).send({message:err.message})
    }

})
module.exports= router