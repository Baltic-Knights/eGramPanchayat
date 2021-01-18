const express=require("express");
const Router=express.Router();
const { razorpay,verification } = require('../controller/payment');

Router.post('/razorpay',razorpay);
Router.post('/verification',verification);


module.exports=Router;