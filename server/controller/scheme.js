const Scheme=require('../models/schemeSchema');
const key=require('../config/keys')

exports.add=(req,res)=>{
    const {
        title,
        description,
        weblink,
        department
    }=req.body;
    const _scheme=new Scheme({
        title,
        description,
        weblink,
        department,
        schemeId:Math.random().toString()
    });
    if(req.file){
        _scheme.picture=key.API+'/public/'+req.file.filename;
    }
    _scheme.save((error,data)=>{
           if(error){
               return res.status(400).json({
                   message:error
               });
           }
           if(data){
               return res.status(201).json({
                   message:data
               });
           }
    })
}

exports.view=(req,res)=>{
    Scheme.find({})
.exec((err,data)=>{
    if(err) return res.status(400).json({error});
    if(data){
            res.status(200).json({
                data
            })
    }
})
}


