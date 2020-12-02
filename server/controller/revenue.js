const Revenue = require('../models/revenueSchema');
const key = require('../config/keys')
const pdf = require('html-pdf')
const pdfTemplate = require('../documents/Revenue taxes/index')
exports.create = (req, res) => {
    const name = req.body.name;
    const number = req.body.UID;
    const date=req.body.date;
    Revenue.findOne({ UID: req.body.UID })
        .then(data => {
            if (data) {

            } else {
                const data = new Revenue({
                    name,
                    UID: number,
                    date
                });
                data.save()
            }
        })

}

exports.approve = (req,res) => {
    Revenue.findOne({ UID: req.body.UID })
        .then((response) => {
            if (response) {
                
                Revenue.findOneAndUpdate({ UID: req.body.UID },
                    {
                        $set: {
                            home_tax: req.body.home_tax,
                            light_tax: req.body.light_tax,
                            health_tax: req.body.health_tax,
                            water_tax: req.body.water_tax,
                            penalty_tax: req.body.penalty_tax,
                            warrant_tax: req.body.warrant_tax
                        }
                    }
                    , function (err, data) {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            })
                        } else if (data) {
                            return res.status(200).json({
                                msg: "Successful"
                            });
                        }
                    }
                    );
            } else {
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
                    UID:req.body.UID,
                    home_tax: req.body.home_tax,
                    light_tax: req.body.light_tax,
                    health_tax: req.body.health_tax,
                    water_tax: req.body.water_tax,
                    penalty_tax: req.body.penalty_tax,
                    warrant_tax: req.body.warrant_tax
                });
                data.save();
                    return res.status(200).json({
                        msg: "successful"
                })
            }
        })
}

exports.reject = (req, res) => {
    const number = req.body.UID;
    Revenue.deleteOne({ UID: req.body.UID })
        .then(data => {
            return res.status(200).json({
                data: "Rejected"
            })
        })
}

exports.readData = (req, res) => {
    Revenue.find()
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
    // console.log(req.body)
    const previous = {
        home_tax: 0,
        light_tax: 0,
        health_tax: 0,
        water_tax: 0,
        penalty_tax: 0,
        warrant_tax: 0
    }
    pdf.create(pdfTemplate(req.body,previous), {}).toFile(req.body.name + '.pdf', (err) => {
        return res.status(200).json({
            msg: "successful"
        })
    })
}


