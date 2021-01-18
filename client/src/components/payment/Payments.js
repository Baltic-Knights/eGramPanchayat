import React, { useState, useEffect } from 'react';
import axiosInstance from '../../helpers/axios';
import PaymentImg from './payment.jpg';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
import { Redirect } from 'react-router';
import { isAuth } from '../../helpers/auth';
import { keys } from '../../helpers/credentials';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validText = (val) => /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/i.test(val);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validMobile = (val) => /^[0][1-9]\d{9}$|^[1-9]\d{9}$/i.test(val);

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const Payment = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState();
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("Residence Certificate");
    const [number, setNumber] = useState();

    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }
        const resdata = {
            amount,
            number,
            name
        }
        // console.log(resdata, reason)
        axiosInstance.post('pay/razorpay', resdata)
            .then(res => {
                // console.log(res)
                const options = {
                    key: keys.Razorpay,
                    currency: res.data.data.currency,
                    amount: res.data.data.amount.toString(),
                    order_id: res.data.data.id,
                    name: "Pay to Gram Panchayat",
                    description: reason,
                    image: { PaymentImg },
                    handler: function (response) {
                        // console.log(response)
                        // alert(response)
                        // alert(response.razorpay_payment_id)
                        // alert(response.razorpay_order_id)
                        // alert(response.razorpay_signature)
                    },
                    prefill: {
                        name:name,
                        email: email,
                        contact: number
                     }
                }
                const paymentObject = new window.Razorpay(options)
                paymentObject.open()
            })
            .catch(err=>{
                store.addNotification({
                    title: "Payment Record with this number already exists!",
                    message: 'contact to gram panchayat officer',
                    type: "info",
                    container: 'top-right',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 3000,
                      showIcon: true
                    }
                  })
                  window.location.reload(false);
            })
    }

    return (
        isAuth() ? isAuth() && isAuth().role === 'admin' || isAuth().role === 'user'
            ?
            <Container fluid className="mb-3">
                <Row className="justify-content-md-center">
                    <Col className='col-md-5 mt-3' >
                        <FadeTransform
                            in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(-50%)'
                            }}>
                            <Card className='frm'>
                                <div className="text-center mt-4 mb-4"><h1 className="">Payment Gateway.</h1></div>
                                <Card.Img varient="top" className="pic mt-1 col-md-6 col-sm-10 offset-md-3" src={PaymentImg}></Card.Img>
                                <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
                                <Card.Body>
                                    <LocalForm onSubmit={displayRazorpay}>
                                        <div className="form-group">
                                            <Row><Col className="col-md-3 offset-md-1">
                                                <Form.Label>Name:</Form.Label></Col>
                                                <Col className="col-md-7">
                                                    <Control.text
                                                        model=".name"
                                                        className="form-control"
                                                        autoComplete="off"
                                                        placeholder="Enter applicant's full name"
                                                        name="name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        validators={{
                                                            required, validText, maxLength: maxLength(20), minLength: minLength(3)
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".name"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            validText: 'Enter a valid Name!',
                                                            maxLength: 'Length should be less than 20 characters!',
                                                            minLength: 'Length should be greater than 3 characters!'
                                                        }}
                                                    />
                                                </Col></Row>
                                        </div>
                                        <div className="form-group">
                                            <Row><Col className="col-md-3 offset-md-1">
                                                <Form.Label>Email Id:</Form.Label></Col>
                                                <Col className="col-md-7">
                                                    <Control.text
                                                        model=".email"
                                                        className="form-control"
                                                        autoComplete="off"
                                                        placeholder="Enter email id"
                                                        name="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        validators={{
                                                            required, validEmail
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".email"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            validEmail: 'Enter a valid Email!'
                                                        }}
                                                    />
                                                </Col></Row>
                                        </div>
                                        <div className="form-group">
                                            <Row><Col className="col-md-3 offset-md-1">
                                                <Form.Label>Mobile Number:</Form.Label></Col>
                                                <Col className="col-md-7">
                                                    <Control.text
                                                        model=".mobile"
                                                        className="form-control"
                                                        autoComplete="off"
                                                        placeholder="Enter mobile number:"
                                                        name="number"
                                                        value={number}
                                                        onChange={(e) => setNumber(e.target.value)}
                                                        validators={{
                                                            required, validMobile
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".mobile"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            validMobile: 'Enter a valid Mobile number!'
                                                        }}
                                                    />
                                                </Col></Row>
                                        </div>
                                        <Row><Col className="col-md-3 offset-md-1"><Form.Label>select receipt option:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <select
                                                    className="my-1 mr-sm-2 form-control"
                                                    value={reason}
                                                    defaultValue="Residence Certificate"
                                                    onChange={(e) => setReason(e.target.value)}
                                                >
                                                    <option value="Residence Certificate">Residential Certificate.</option>
                                                    <option value="Revenue tax receipt">Revenue tax receipt.</option>
                                                </select>
                                            </Col></Row>
                                        <Row><Col>
                                            <div className="form-group">
                                                <Row><Col className="col-md-3 offset-md-1"><Form.Label>Amount to pay:</Form.Label></Col>
                                                    <Col className="col-md-7">
                                                        <Control.text
                                                            model=".amount"
                                                            className="form-control"
                                                            autoComplete="off"
                                                            placeholder="Enter Amount"
                                                            name="Amount"
                                                            value={amount}
                                                            onChange={(e) => setAmount(e.target.value)}
                                                            validators={{
                                                                required, isNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".amount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                isNumber: 'Enter an amount in digits!'
                                                            }}
                                                        />
                                                    </Col></Row>
                                            </div></Col></Row>
                                        <div className="text-center mt-4">
                                            <Button variant="primary" type="submit">Pay Now</Button>
                                        </div>
                                    </LocalForm>
                                </Card.Body>
                            </Card></FadeTransform></Col>
                </Row>

            </Container> : <Redirect to="/" /> : <Redirect to="/login" />
    )
}

export default Payment;