const mongoose=require('mongoose');
const revenueSchema=new mongoose.Schema({
    name:{
        type:String
    },
    home_tax:{
        type:Number
    },
    light_tax:{
        type:Number
    },
    health_tax:{
        type:Number
    },
    water_tax:{
        type:Number
    },
    penalty_tax:{
        type:Number
    },
    warrant_tax:{
        type:Number
    }
},{
    timestamps:true
});

module.exports=mongoose.model('revenue',revenueSchema);