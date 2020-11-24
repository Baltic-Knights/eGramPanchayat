const Revenue = require('../models/revenueSchema');
const key = require('../config/keys')
const pdf = require('html-pdf')
const pdfTemplate = require('../documents/Revenue taxes/index')
exports.create = (req, res) => {
    Revenue.findOne({ name: req.body.name })
        .exec((err, response) => {
            console.log("reached")
            if (err) {
                return res.status(500).json({
                    error: err
                })
            }
            if (response) {
                pdf.create(pdfTemplate(req.body, response), {}).toFile(req.body.name + '.pdf', (err) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    }
                })
                Revenue.findOneAndUpdate({ name: req.body.name },
                    {
                        $set: {
                            home_tax: req.body.home_tax,
                            light_tax: req.body.light_tax,
                            health_tax: req.body.health_tax,
                            water_tax: req.body.water_tax,
                            penalty_tax: req.body.penalty_tax,
                            warrant_tax: req.body.warrant_tax
                        }
                    }, function (err, data) {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            })
                        }else if(data){
                            return res.status(400).json({
                                data: data
                            });
                        }
                        
                    });
                console.log("records updated!!!");
            }
        })
    const previous = {
        home_tax: 0,
        light_tax: 0,
        health_tax: 0,
        water_tax: 0,
        penalty_tax: 0,
        warrant_tax: 0
    }

    const data = new Revenue({
        name: req.body.name,
        home_tax: req.body.home_tax,
        light_tax: req.body.light_tax,
        health_tax: req.body.health_tax,
        water_tax: req.body.water_tax,
        penalty_tax: req.body.penalty_tax,
        warrant_tax: req.body.warrant_tax
    });
    console.log(data)
    data.save((error, data) => {
        if (error) {
            return res.status(400).json({
                message: error
            });
        }
        if (data) {
            return res.status(201).json({
                data: data,
                another: previous
            });
        }
    })
    pdf.create(pdfTemplate(data, previous), {}).toFile(req.body.name + '.pdf', (err) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }

    })
}

exports.download = (req, res) => {
    res.sendFile(`${__dirname}/residenceCertificate.pdf`)
}


