const mongoose = require("mongoose")

const healthcareDevicesSchema = new mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true
})

const HealthcareDevices = mongoose.model("healthcareDevices",healthcareDevicesSchema)
module.exports= HealthcareDevices