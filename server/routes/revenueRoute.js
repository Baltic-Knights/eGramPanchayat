const express=require('express');
const Router=express.Router();
const { create,download } = require('../controller/revenue');

Router.post('/create',create);

Router.get('/download',download);

module.exports=Router;