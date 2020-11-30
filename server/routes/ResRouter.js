const express=require('express');
const Router=express.Router();
const { create,read, download } = require('../controller/Residence');

Router.post('/create',create);

Router.get('/readApplicants',read);
Router.get('/download',download);

module.exports=Router;