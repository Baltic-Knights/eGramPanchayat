const ResData = require('../models/residenceSchema');
const key = require('../config/keys')
const pdf = require('html-pdf')
const pdfTemplate = require('../documents/Residence Certificate/index')
const fs = require("fs")
const path = require("path");
const { nextTick } = require('process');
// const fileUpload = require('express-fileupload');
// const express = require('express');
// const app = express();
// app.use(fileUpload());
let Name = "";

exports.create = (req, res) => {
    // console.log(req.body)
    const name = req.body.name;
    Name = name;
    const number = req.body.UID;
    ResData.findOne({ UID: req.body.UID })
        .then(data => {
            if (data) {
                console.log(data)
                pdf.create(pdfTemplate(data), {}).toFile(data.name + '.pdf', (err, success) => {
                    return res.status(200).json({
                        msg: "successful"
                    })
                })
            } else {
                const data = new ResData({
                    name,
                    UID: number
                });
                data.save()
                pdf.create(pdfTemplate(data), {}).toFile(name + '.pdf', (err) => {
                    return res.status(200).json({
                        error: "successful"
                    })
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
    // // console.log(Name)
    // // res.sendFile(key.API + `'/public/${Name}.pdf`)
    // const src = fs.createReadStream(key.API + `'/public/${Name}.pdf`);

    // res.writeHead(200, {
    //   'Content-Type': 'application/pdf',
    //   'Content-Disposition': 'attachment; filename=sample.pdf',
    //   'Content-Transfer-Encoding': 'Binary'
    // });

    // src.pipe(res); 

    // var file =key.API +`/public/residence/${Name}.pdf`;
    // console.log(file)
    // fs.readFile(file, function (err, data) {
    //     res.contentType("application/pdf");
    //     res.send(data)
    // })
    console.log(path.dirname(__dirname))
    // res.sendFile(`${Name}.pdf`);
    res.status(200).json({
        data: 'reach'
    })
}


