const express=require('express');
const Router=express.Router();
const { create,download,approve,readData,reject } = require('../controller/revenue');

Router.post('/create',create);

Router.post('/approve',approve);

Router.post('/reject',reject);

Router.get('/readData',readData);

Router.post('/download',download);

module.exports=Router;