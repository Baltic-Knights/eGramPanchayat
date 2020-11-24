const mongoose=require("mongoose");
const paymentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    forReason:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});

module.exports=mongoose.model('payment',paymentSchema);
