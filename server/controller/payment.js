const Record = require("../models/paymentSchema");
const https = require("https");
const qs = require("querystring");
const express = require('express')

const checksum_lib = require("../Paytm/checksum");
const config = require('../Paytm/config')


exports.paynow = (req, res) => {
    // Route for making payment
    console.log(req.query);
    var paymentDetails = {
        amount: req.query.amount,
        customerId: req.query.name,
        customerEmail: req.query.emailId,
        customerPhone: req.query.number,
        orderId:req.query.orderId
    }
        var paytmParams = {};
        paytmParams['MID'] = config.PaytmConfig.mid;
        paytmParams['WEBSITE'] = config.PaytmConfig.website;
        paytmParams['CHANNEL_ID'] = 'WEB';
        paytmParams['INDUSTRY_TYPE_ID'] = 'Retail';
        paytmParams['ORDER_ID'] = paymentDetails.orderId;
        paytmParams['CUST_ID'] = paymentDetails.customerId;
        paytmParams['TXN_AMOUNT'] = paymentDetails.amount;
        paytmParams['CALLBACK_URL'] = 'http://localhost:5000/pay/callback';
        paytmParams['EMAIL'] = paymentDetails.customerEmail;
        paytmParams['MOBILE_NO'] = paymentDetails.customerPhone;


        checksum_lib.genchecksum(paytmParams, config.PaytmConfig.key, function (err, checksum) {
            console.log("checksum",checksum);
            var params={
                ...paytmParams,
                CHECKSUMHASH:checksum
            }
            res.json(params)
        });
    // console.log(req.body)
    // const name = req.body.name;
    // const emailId = req.body.emailId;
    // const amount = req.body.amount;
    // const date=new Date();
    // const forReason = req.body.forReason;
    // const data = new Record({
    //     name,
    //     emailId,
    //     amount,
    //     date,
    //     forReason
    // });
    // data.save((error, data) => {
    //     if (error) {
    //         return res.status(400).json({
    //             message: error
    //         });
    //     }
    //     if (data) {
    // return res.status(201).json({
    //     data: req.body
    // });
    //     }
    // })
}

exports.callback = (req, res) => {
    console.log("Reached")
    var paytmChecksum="";
    console.log(req.body)
    var received_data=req.body;
    console.log(received_data)
    var paytmParams={};
    for(var key in received_data){
        if(key=="CHECKSUMHASH"){
            paytmChecksum=received_data[key];
        }else{
            paytmParams[key]=received_data[key];
        }
    }
    var isValidChecksum=checksum_lib.verifychecksum(paytmParams,config.PaytmConfig.key,paytmChecksum);
    if(isValidChecksum){
        console.log("checksum matched!");
    }else{
        console.log("checksum mismatched!");
    }
}