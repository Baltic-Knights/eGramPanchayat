import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentImg from './payment.jpg';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validText = (val) => /^[a-zA-Z]+ [a-zA-Z]+$/i.test(val);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validMobile=(val)=> /^((\+){1}91){1}[1-9]{1}[0-9]{9}$/i.test(val);
const Payment = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [number, setNumber] = useState();
    function isDate(val) {
        // Cross realm comptatible
        return Object.prototype.toString.call(val) === '[object Date]'
    }

    function isObj(val) {
        return typeof val === 'object'
    }

    function stringifyValue(val) {
        if (isObj(val) && !isDate(val)) {
            return JSON.stringify(val)
        } else {
            return val
        }
    }

    function buildForm({ action, params }) {
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)


        Object.keys(params).forEach(key => {
            const input = document.createElement('input')
            input.setAttribute('type', 'hidden')
            input.setAttribute('name', key)
            input.setAttribute('value', stringifyValue(params[key]))
            form.appendChild(input)
        })

        return form
    }

    function post(details) {
        const form = buildForm(details)
        document.body.appendChild(form)
        form.submit()
        form.remove()
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const str = name.split(" ").join("");
        const paymentData = {
            name: str,
            forReason: reason,
            amount: amount,
            emailId: email,
            number: number,
            orderId: "ORDER_ID" + (new Date().getTime())
        }
        console.log(paymentData);
        var url = 'http://localhost:5000/pay/paynow';
        var request = {
            url: url,
            params: paymentData,
            method: "get"
        }
        const response = await axios(request);
        const processParams = await response.data;
        console.log(processParams)
        var details = {
            action: "https://securegw-stage.paytm.in/order/process",
            params: processParams
        }
        post(details);
    }
    return (
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
                                <LocalForm onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <Row><Col className="col-md-3 offset-md-1">
                                            <Form.Label>Name:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Control.text 
                                                    model=".name"
                                                    className="form-control"
                                                    autocomplete="off"
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
                                                    autocomplete="off"
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
                                                        validText: 'Enter a valid Email!'
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
                                                    autocomplete="off"
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
                                                        validMobile: 'Enter a valid Mobile number starting from +91!'
                                                    }}
                                                />
                                            </Col></Row>
                                    </div>
                                    <Row><Col className="col-md-3 offset-md-1"><Form.Label>select receipt option:</Form.Label></Col>
                                        <Col className="col-md-7">
                                            <Control.select
                                                model=".reason"
                                                as="select"
                                                className="my-1 mr-sm-2 form-control"
                                                id="inlineFormCustomSelectPref"
                                                custom
                                                value={reason}
                                                onChange={(e) => setReason(e.target.value)}
                                            >
                                                <option value="Residential Certificate.">Residential Certificate.</option>
                                                <option value="Revenue tax receipt.">Revenue tax receipt.</option>
                                               
                                            </Control.select>
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

        </Container>
    )
}

export default Payment;