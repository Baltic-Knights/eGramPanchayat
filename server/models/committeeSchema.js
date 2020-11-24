const mongoose=require('mongoose');
const committeeSchema=new mongoose.Schema({
    previous:{
        Name:[String],
        workingPeriod:[String],
        caste:[String]
    },
    current:{
        Name:[String],
        designation:[String],
        contact:[String]
    }
},{
    timestamps:true
});

module.exports=mongoose.model('committee',committeeSchema);