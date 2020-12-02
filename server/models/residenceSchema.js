const mongoose=require('mongoose');
const residenceSchema=new mongoose.Schema({
    name:{
        type:String
    },
    date:{
        type:Date
    },
    UID:{
        type:Number
    },
    picture:{
        type:String
    }
},{
    timestamps:true
});

module.exports=mongoose.model('residence',residenceSchema);