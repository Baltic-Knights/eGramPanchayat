const express=require('express');
const multer=require('multer');
const shortid=require('shortid');
const Router=express.Router();
const path=require('path')
const { create, download } = require('../controller/Residence');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'residence'));
    },filename:function(req,file,cb){
        cb(null,shortid.generate()+'-'+file.originalname);
    }
});
const upload=multer({storage});
Router.post('/create',upload.single('picture'),create);

Router.get('/download',download);

module.exports=Router;