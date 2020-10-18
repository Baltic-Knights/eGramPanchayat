const ResData = require('../models/residenceSchema');
const key = require('../config/keys')
const pdf=require('html-pdf')
const pdfTemplate=require('../documents/index')
exports.create = (req, res) => {
    console.log(req.file)
    const name = req.body.name;
    const number = req.body.UID;
    ResData.findOne({ UID: number })
        .exec((err, response) => {
            if (err) {
                return res.status(500).json({
                    error: err
                })
            }
            if (response) {
                pdf.create(pdfTemplate(response),{}).toFile(name+'.pdf',(err)=>{
                    if(err){
                        return res.status(500).json({
                            error: err
                        })
                    }
                })
                return res.status(400).json({
                    data: response
                });
            }
            const data = new ResData({
                name,
                UID: number
            });
            
            if (req.file) {
                data.picture = key.API + '/public/' + req.file.filename;
            }
            data.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: error
                    });
                }
                if (data) {
                    return res.status(201).json({
                        data: data
                    });
                }
            })
            pdf.create(pdfTemplate(data),{}).toFile(name+'.pdf',(err)=>{
                if(err){
                    return res.status(500).json({
                        error: err
                    })
                }
                 
            })
        })


}

exports.download = (req, res) => {
    res.sendFile(`${__dirname}/residenceCertificate.pdf`)
}


