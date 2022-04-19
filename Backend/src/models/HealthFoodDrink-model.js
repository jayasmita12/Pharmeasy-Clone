const mongoose = require("mongoose")

const healthFooddrinkSchema = new mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true
})

const HealthFooddrink = mongoose.model("healthFooddrink",healthFooddrinkSchema)
module.exports= HealthFooddrink