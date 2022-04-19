const express= require("express")
const HealthFooddrink = require("../models/HealthFoodDrink-model")
const router = express.Router()
 router.post("",async(req,res)=>{
     try{
        const healthFooddrink = await HealthFooddrink.create(req.body)
        return res.status(201).send(healthFooddrink)
     }
     catch(err){
        return res.status(500).send({message:err.message})
     }

 })

 router.get("",async(req,res)=>{
    try{
       const healthFooddrinks = await HealthFooddrink.find().lean().exec()
       return res.status(200).send(healthFooddrinks)
    }
    catch(err){
       return res.status(500).send({message:err.message})
    }

})

router.delete("/:id",async(req,res)=>{
    try{
       const healthFooddrink = await HealthFooddrink.findByIdAndDelete(req.params.id).lean().exec()
       return res.status(200).send(healthFooddrink)
    }
    catch(err){
       return res.status(500).send({message:err.message})
    }

})
module.exports= router