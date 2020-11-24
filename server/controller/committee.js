const Record = require('../models/committeeSchema.js');

exports.addData = (req, res) => {
    const previous = req.body.previous;
    const current = req.body.current;
    const data = new Record({
        previous,
        current
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

exports.readData = (req, res) => {
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


