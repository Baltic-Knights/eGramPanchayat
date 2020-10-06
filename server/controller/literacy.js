const Record = require('../models/literacySchema');

exports.addRecord = (req, res) => {
    const years = req.body.years;
    const menCount = req.body.menCount;
    const womenCount = req.body.womenCount;
    const data = new Record({
        years,
        menCount,
        womenCount
    });
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
}

exports.fetchRecord = (req, res) => {
    Record.find({})
        .exec((err, data) => {
            if (err) return res.status(400).json({ err });
            if (data) {
                res.status(200).json({
                    data: data
                })
            }
        }
        )
}


