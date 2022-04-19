const mongoose = require("mongoose")

const skinCareSchema = new mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true
})

const Skincare = mongoose.model("skincare",skinCareSchema)
module.exports= Skincare