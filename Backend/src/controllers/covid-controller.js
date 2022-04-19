const express= require("express")
const Covid = require("../models/covid-model")
const router = express.Router()
 router.post("",async(req,res)=>{
     try{
        const covid = await Covid.create(req.body)
        return res.status(201).send(covid)
     }
     catch(err){
        return res.ststue(500).send({message:err.message})
     }

 })

 router.get("",async(req,res)=>{
    try{
      
       const covids = await Covid.find().lean().exec()
       return res.status(200).send(covids)
    }
    catch(err){
       return res.ststue(500).send({message:err.message})
    }

})

router.delete("/:id",async(req,res)=>{
    try{
       const covid = await Covid.findByIdAndDelete(req.params.id).lean().exec()
       return res.status(200).send(covid)
    }
    catch(err){
       return res.ststue(500).send({message:err.message})
    }

})
module.exports= router