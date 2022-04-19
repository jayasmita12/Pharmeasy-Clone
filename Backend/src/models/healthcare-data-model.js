const mongoose = require("mongoose")

const healthcaredataSchema = new mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    dis:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

const Healthcaredata = mongoose.model("healthcaredata",healthcaredataSchema)
module.exports= Healthcaredata