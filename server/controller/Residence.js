const ResData = require('../models/residenceSchema');
const key = require('../config/keys')
const pdf = require('html-pdf')
const pdfTemplate = require('../documents/Residence Certificate/index')
const fs = require("fs")
const path = require("path");
const { nextTick } = require('process');

let Name = "";

exports.create = (req, res) => {
    const name = req.body.name;
    Name = name;
    const number = req.body.UID;
    const date=req.body.date
    ResData.findOne({ UID: req.body.UID })
        .then(data => {
            if (data) {
                return res.status(200).json({
                    message: "Application already submitted!"
                })
            } else {
                const data = new ResData({
                    name,
                    UID: number,
                    date
                });
                data.save((err,data)=>{
                    if(data){
                        return res.status(200).json({
                            message: "Registration Successful!"
                        })
                    }
                })
            }
        })

    // // const file = req.files.file;
    // // data.picture = key.API + '/public/' + file.filename;
    // // console.log(data.picture);
    // // file.mv(`${__dirname}/applicants/${file.name}`, err => {
    // //     if (err) {
    // //         console.error(err);
    // //         return res.status(200).send(err);
    // //     }
    // // });
}

exports.reject = (req, res) => {
    const number = req.body.UID;
    ResData.deleteOne({ UID: req.body.UID })
        .then(data => {
            return res.status(200).json({
                message: "Application Rejected!"
            })
        })
}

exports.read = (req, res) => {
    ResData.find()
        .exec((err, response) => {
            if (response) {
                return res.status(200).json({
                    data: response
                })
                if (err) {
                    return res.status(500).json({
                        data: err
                    })
                }
            }
        })
}

exports.download = (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile(req.body.name + '.pdf', (err, success) => {
        return res.status(200).json({
            message: "Application Approved!"
        })
    })
}


