const mongoose=require('mongoose');
const residenceSchema=new mongoose.Schema({
    name:{
        type:String
    },
    UID:{
        type:String
    },
    picture:{
        type:String
    }
},{
    timestamps:true
});

module.exports=mongoose.model('residence',residenceSchema);