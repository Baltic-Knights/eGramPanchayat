const express=require("express");
const Router=express.Router();
const { paynow,callback } = require('../controller/payment');

Router.get('/paynow',paynow);
Router.post('/callback',callback);

// Router.get('/fetch',fetchRecord);

module.exports=Router;