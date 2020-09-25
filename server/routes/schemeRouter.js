const express=require('express');
const multer=require('multer');
const shortid=require('shortid');
const { requireSignIn, adminMiddleware } = require('../middlewares');
const path=require('path');
const Router=express.Router();
const { add,view } = require('../controller/scheme');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'schemeUploads'));
    },filename:function(req,file,cb){
        cb(null,shortid.generate()+'-'+file.originalname);
    }
});
const upload=multer({storage});
Router.post('/add',requireSignIn, adminMiddleware,upload.single('picture'),add);

Router.get('/view',view);

module.exports=Router;