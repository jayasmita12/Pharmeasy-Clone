const express = require("express")
const Skincare = require("../models/skinCare-model")
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const skincare = await Skincare.create(req.body)
        return res.status(201).send(skincare)

    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
        const skincares = await Skincare.find().lean().exec()
        return res.status(200).send(skincares)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const skincare = await Skincare.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(skincare)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router