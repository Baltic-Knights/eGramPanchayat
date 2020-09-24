const express=require('express');
const Router=express.Router();
const { add,view } = require('../controller/scheme');

Router.post('/add',add);

Router.get('/view',view);

module.exports=Router;