const Record = require("../models/paymentSchema");
const pdf = require('html-pdf')
const pdfTemplate = require('../documents/payment/index')
const Razorpay = require('razorpay')
const shortid = require("shortid")
const path = require("path");
const fs = require('fs')
const crypto = require("crypto")
const key = require('../config/keys')
const sgMail = require('@sendgrid/mail');
const { userInfo } = require("os");
sgMail.setApiKey(key.EmailKey);

const razorpay = new Razorpay({
    key_id: 'rzp_test_Y179EKf01voYPw',
    key_secret: 'azajU71KY1gEhtihUKe3340L'
})

exports.razorpay = async (req, res) => {
    const payment_capture = 1
    const currency = 'INR';
    const amount = req.body.amount;
    const number = req.body.number;
    const name=req.body.name;

    Record.findOne({ number: number }, async (err, user) => {
        // console.log(user)
        if (!user) {
            const options = {
                currency,
                receipt: shortid.generate(),
                payment_capture,
                amount: amount * 100
            }

            try {
                const response = await razorpay.orders.create(options)
                console.log(response)
                res.status(200).json({
                    data: {
                        id: response.id,
                        currency: response.currency,
                        amount: response.amount
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }else{
            res.status(400).json({
                error: "Payment Record with this number already exists!"
            })
        }
    });

}

exports.verification = (req, res) => {

    const shasum = crypto.createHmac('sha256', key.SECRET_KEY)
    shasum.update(JSON.stringify(req.body))
    const digest = shasum.digest('hex')

    // console.log(digest, req.headers['x-razorpay-signature'])

    if (digest === req.headers['x-razorpay-signature']) {
        // console.log('request is legit')
        // process it
        console.log(req.body.payload.payment.entity)
        const name = req.body.payload.payment.entity.card.name;
        const forReason = req.body.payload.payment.entity.description;
        const date = new Date();
        const number = req.body.payload.payment.entity.contact;
        const amount = (req.body.payload.payment.entity.amount) / 100;
        const email = req.body.payload.payment.entity.email;

        Record.findOne({ number: number }, (err, user) => {
            // console.log(err,user)
            if (!user) {
                const data = new Record({
                    name,
                    forReason,
                    date,
                    number,
                    amount
                });
                
                data.save((err, data) => {
                    if (data) {
                        pdf.create(pdfTemplate({ name, forReason, date, number, amount }), {}).toFile(path.join(__dirname, 'images/payment', name) + '.pdf', (error, success) => {
                            if (error) {
                                return res.status(400).json({
                                    error: "Error while creating a PDF!"
                                })
                            } else {
                                pathToAttachment = `${__dirname}/images/payment/${name}.pdf`;
                                attachment = fs.readFileSync(pathToAttachment).toString("base64");
                                sgMail.send({
                                    from: key.EMAIL_FROM,
                                    to: email,
                                    subject: 'Your Payment Receipt generated Successfully!',
                                    text: 'Download Payment Receipt and use it!',
                                    attachments: [
                                        {
                                            content: attachment,
                                            filename: `${name}.pdf`,
                                            type: "application/pdf",
                                            disposition: "attachment"
                                        }
                                    ]
                                })
                                    .then(sent => {
                                        fs.unlinkSync(`${__dirname}/images/payment/${name}.pdf`);
                                        return res.status(200).json({
                                            message: `Your PDF has been sent to ${email}`
                                        });
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    });
                            }
                        })
                    }
                })
            }
        })
    } else {
        sgMail.send({
            from: key.EMAIL_FROM,
            to: email,
            subject: 'Opps,Your Payment with eGram Panchayat failed!',
            text: `Kindly contact to ${key.EMAIL_FROM} or try again!`
        })
            .then(sent => {
                return res.status(200).json({
                    message: `Payment status update has been sent to ${email}`
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    // res.json({ status: 'ok' })
}
