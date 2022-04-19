const mongoose = require("mongoose")

const covidSchema = new mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true
})

const Covid = mongoose.model("covid",covidSchema)
module.exports= Covid