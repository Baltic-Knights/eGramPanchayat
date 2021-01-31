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
    const forReason = req.body.forReason;
    const name = req.body.name;
    const email = req.body.email;
    const userid = req.body.userid;

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
                const orderid = response.id;
                const data = new Record({
                    name,
                    email,
                    forReason,
                    number,
                    amount,
                    order_id: orderid
                });

                data.save((err, data) => {
                    if (data) {
                        res.status(200).json({
                            data: {
                                data,
                                id: orderid,
                                currency: response.currency,
                                amount: response.amount
                            }
                        })
                    }
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            res.status(400).json({
                error: "Payment Record with this number already exists!"
            })
        }
    });

}

exports.verification = (req, res) => {

    // console.log(req.body)
    // const shasum = crypto.createHmac('sha256', key.SECRET_KEY)
    // shasum.update(JSON.stringify(req.body))
    // const digest = shasum.digest('hex')

    // // console.log(digest, req.headers['x-razorpay-signature'])

    // if (digest === req.headers['x-razorpay-signature']) {
    //     // console.log('request is legit')
    //     // process it
    //     console.log(req.body.payload.payment.entity)
    if (req.body.response.razorpay_payment_id) {
        Record.findOneAndUpdate({ number: req.body.number },
            { $set: { isPaid: true, payment_id: req.body.response.razorpay_payment_id } }, (err, success) => {
                // console.log(err,user)
                if (success) {
                    console.log(success)
                    const date = success.updatedAt;
                    const name = success.name;
                    const forReason = success.forReason;
                    const number = success.number;
                    const amount = success.amount;
                    const email = success.email;
                    const order_id = success.order_id;
                    pdf.create(pdfTemplate({ name, forReason, date, number, amount,order_id }), {}).toFile(path.join(__dirname, 'images/payment', name) + '.pdf', (error, success) => {
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
    } else {
        sgMail.send({
            from: key.EMAIL_FROM,
            to: email,
            subject: 'Opps,Your Payment with eGram Panchayat failed!',
            text: `Kindly contact to ${key.EMAIL_FROM} or try again!`
        })
            .then(sent => {
                return res.status(400).json({
                    message: `Payment status update has been sent to ${email}`
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}
