const mongoose=require('mongoose');
const literacySchema=new mongoose.Schema({
    years:{
        type:[Number],
        required:true,
        max:5,
        min:5
    },
    menCount:{
        type:[Number],
        required:true,
        max:5,
        min:5
    },
    womenCount:{
        type:[Number],
        required:true,
        max:5,
        min:5
    }
},{
    timestamps:true
});

module.exports=mongoose.model('literacy',literacySchema);